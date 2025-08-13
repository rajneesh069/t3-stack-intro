import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { auth } from "@/server/auth";
import { Todos } from "@/components/todos";

export default async function Home() {
  const session = await auth();
  return session ? (
    <Todos />
  ) : (
    <main className="flex min-h-screen flex-col gap-4">
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
