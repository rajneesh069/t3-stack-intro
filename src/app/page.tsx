import { HydrateClient } from "@/trpc/server";
import { HeroSection } from "@/components/hero-section";
export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col gap-4">
        <HeroSection />
      </main>
    </HydrateClient>
  );
}
