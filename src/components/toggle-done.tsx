"use client";

import { api } from "@/trpc/react";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function ToggleComplete({ id, done }: { done: boolean; id: string }) {
  const router = useRouter();
  const toggleCompleteMutation = api.todo.toggleComplete.useMutation({
    onSuccess: () => {
      toast("Yay, done!!!", {
        duration: 1500,
        style: { background: "#16A34A", color: "#ffffff" },
      });
      router.refresh();
    },
    onError: (error) => {
      toast("Uh-Oh :(. Try that again.", {
        duration: 2000,
      });
      console.error(error);
    },
  });

  async function handleSubmit(val: boolean) {
    try {
      await toggleCompleteMutation.mutateAsync({ id, done: Boolean(val) });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Checkbox
      className="h-6 w-6 rounded-full"
      onCheckedChange={handleSubmit}
      checked={Boolean(done)}
      disabled={toggleCompleteMutation.isPending}
    />
  );
}
