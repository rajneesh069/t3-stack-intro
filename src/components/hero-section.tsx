import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { heroSectionCards } from "@/lib/constants";
import { Badge } from "./ui/badge";
import { CheckCircle, Circle, PlusIcon } from "lucide-react";
import { Input } from "./ui/input";

export function HeroSection() {
  return (
    <section className="container mx-auto my-auto px-4 lg:p-20">
      <div className="flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col justify-center space-y-8 text-center">
          <h1 className="text-5xl font-bold">
            Get Things Done{" "}
            <span className="text-muted-foreground">Effortlessly</span>
          </h1>
          <p className="text-muted-foreground text-xl">
            The smart todo app that adapts to your workflow. Organize tasks,
            collaborate with teams, and boost productivity with AI-powered
            insights.
          </p>

          <div className="flex justify-center gap-2">
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
          <CardHeader>
            <div className="flex justify-between px-2">
              <CardTitle>{"Today's Tasks"}</CardTitle>
              <Badge variant={"secondary"}>
                {heroSectionCards.length} Tasks
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {heroSectionCards.map((el, idx) => (
              <div
                key={idx}
                className="hover:bg-muted flex gap-3 rounded-lg p-3"
              >
                {el.done ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Circle />
                )}
                <p>{el.title}</p>
              </div>
            ))}
          </CardContent>

          <CardFooter className="space-x-3">
            <PlusIcon className="text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Add a new task...."
              className="w-sm border-0 bg-transparent"
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
