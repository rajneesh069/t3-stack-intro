import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    console.log("Session Not Found.");
    redirect("/");
  }
  return <div className="h-[92vh] flex-1">{children}</div>;
}
