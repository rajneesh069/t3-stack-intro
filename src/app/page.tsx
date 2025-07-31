import Link from "next/link";

import { auth } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";
import { HeroSection } from "@/components/hero-section";
export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col gap-4 px-4 text-white">
        <HeroSection />
      </main>
    </HydrateClient>
  );
}
