import { auth } from "@/server/auth";
import Link from "next/link";

export async function Navbar() {
  const session = await auth();

  return (
    <div className="flex h-12 w-full items-center border border-b border-gray-300 p-2">
      Navbar
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
}
