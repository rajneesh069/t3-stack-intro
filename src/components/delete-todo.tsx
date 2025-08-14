"use client";

import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function DeleteTodo({ id }: { id: string }) {
  const router = useRouter();
  const deleteTodoMutation = api.todo.deleteTodo.useMutation({
    onSuccess: () => {
      toast("Todo deleted successfully.", {
        duration: 1000,
      });
      router.refresh();
    },
    onError: function (error) {
      toast(`Todo couldn't be deleted, ${error.message}`, {
        duration: 2000,
      });
    },
  });

  async function handleDelete() {
    try {
      await deleteTodoMutation.mutateAsync({ todoId: id });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Button variant={"destructive"} onClick={handleDelete}>
      <Trash />
    </Button>
  );
}
