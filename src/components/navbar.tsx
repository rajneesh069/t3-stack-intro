import { auth } from "@/server/auth";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
export async function Navbar() {
  const session = await auth();

  return (
    <header className="border-b">
      <div className="px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <CheckCircle className="h-8 w-8" />
            <span className="text-xl font-bold">TaskFlow</span>
          </div>
          <div className="flex gap-2">
            <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
              <Button variant={"outline"}>
                <p>{session ? "Sign out" : "Sign in"}</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
