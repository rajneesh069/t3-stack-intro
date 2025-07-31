import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardHeader } from "./ui/card";

export function HeroSection() {
  return (
    <section className="container mx-auto my-auto">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">
            Get Things Done{" "}
            <span className="text-muted-foreground">Effortlessly</span>
          </h1>
          <p className="text-muted-foreground text-xl">
            The smart todo app that adapts to your workflow. Organize tasks,
            collaborate with teams, and boost productivity with AI-powered
            insights.
          </p>

          <div className="flex gap-2">
            <Link href={"/hello"}>
              <Button variant={"default"} size={"lg"}>
                Get Started
              </Button>
            </Link>
            <Link href={"/hello"}>
              <Button size={"lg"} variant={"outline"}>
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
        <Card>
          <CardHeader>Hello</CardHeader>
        </Card>
      </div>
    </section>
  );
}
