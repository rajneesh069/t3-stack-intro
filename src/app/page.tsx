import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4">
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
