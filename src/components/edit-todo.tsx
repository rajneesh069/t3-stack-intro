"use client";

import { PencilIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { z } from "zod";
import { updateTodoSchema } from "@/types/todo";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = updateTodoSchema;

export function EditTodo({
  id,
  title,
  description,
  done,
  priority,
}: {
  id: string;
  title: string;
  description: string | null;
  done: boolean;
  priority: "URGENT" | "TODAY" | "TOMORROW";
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description,
      done,
      id,
      priority,
      title,
    },
  });

  const editTodoMutation = api.todo.updateTodo.useMutation({
    onSuccess: () => {
      toast("Successfully updated todo", {
        duration: 2000,
      });
      router.refresh();
      setOpen(false);
    },
    onError: (error) => {
      toast(`Failed to update todo ${error.message}`, {
        duration: 2000,
      });
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await editTodoMutation.mutateAsync(values);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <PencilIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      name={field.name}
                      onBlur={field.onBlur}
                      onChange={(e) => field.onChange(e.target.value)}
                      value={field.value ?? ""}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="done"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <p>Mark Completed</p>
                      <Checkbox
                        checked={Boolean(field.value)}
                        onCheckedChange={(val) => field.onChange(Boolean(val))}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="URGENT">Urgent</SelectItem>
                          <SelectItem value="TODAY">Later Today</SelectItem>
                          <SelectItem value="TOMORROW">Tomorrow</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={editTodoMutation.isPending}>
                {form.formState.isSubmitting ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
