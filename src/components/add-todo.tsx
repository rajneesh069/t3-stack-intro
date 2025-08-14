"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { z } from "zod";
import { api } from "@/trpc/react";
import { addTodoSchema } from "@/types/todo";
import { toast } from "sonner";

const formSchema = addTodoSchema;

export function AddTodo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "URGENT",
      done: false,
    },
  });
  const addTodoMutation = api.todo.addTodo.useMutation({
    onSuccess: () => {
      toast("Todo added successfully!", {
        duration: 1000,
      });
      form.reset();
    },
    onError: (error) => {
      toast.error(`Error adding the todo: ${error.message}`);
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addTodoMutation.mutateAsync(values);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="md:w-lg">
        <CardHeader>
          <CardTitle>Add Todo</CardTitle>
        </CardHeader>
        <CardContent>
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
                      <Input placeholder="Description" {...field} />
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
                      <Select {...field}>
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
              <div className="flex justify-end">
                <Button type="submit">
                  {form.formState.isSubmitting ? "Adding..." : "Add"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
