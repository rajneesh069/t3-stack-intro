import { auth } from "@/server/auth";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
export async function Navbar() {
  const session = await auth();

  return (
    // <div className="hidden h-12 w-full items-center justify-between border border-b-gray-800 p-2 lg:flex">
    //   <Image
    //     src={"/todo-logo-nav.png"}
    //     width={100}
    //     height={100}
    //     alt="app-logo"
    //   />
    //   <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
    //     <Button variant={"outline"}>
    //       <p>{session ? "Sign out" : "Sign in"}</p>
    //       <LogIn />
    //     </Button>
    //   </Link>
    // </div>

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
            {!session && (
              <Link href={"/hello"}>
                <Button variant={"outline"}>
                  <p>{"Get Started"}</p>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
