import { auth } from "@/server/auth";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { AddTodo } from "./add-todo";
export async function Navbar() {
  const session = await auth();

  return (
    <header className="border-b px-3 py-2">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex gap-2">
            <CheckCircle className="h-8 w-8" />
            <span className="hidden text-xl font-bold md:block">TaskFlow</span>
          </div>
        </Link>

        <div className="flex gap-2">
          {session?.user && <AddTodo />}
          <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
            <Button variant={"outline"}>
              <p>{session ? "Sign out" : "Sign in"}</p>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
