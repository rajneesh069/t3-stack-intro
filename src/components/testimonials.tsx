import { Stars } from "./star";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const testimonials = [
  {
    rating: 5,
    description:
      "This todo app transformed how our team manages projects. The collaboration features are game-changing.",
    name: "Sarah Chen",
    designation: "Product Manager",
  },
  {
    rating: 5,
    description:
      "Finally, a todo app that actually helps me stay organized. The smart reminders are incredibly helpful.",
    name: "Mike Rodriguez",
    designation: "Freelancer",
  },
  {
    rating: 4,
    description:
      "Clean interface, powerful features. It's everything I need to manage my busy schedule.",
    name: "Emily Watson",
    designation: "Startup Founder",
  },
];

export function Testimonials() {
  return (
    <section className="container mx-auto my-auto space-y-3 px-4 py-10">
      <div className="flex justify-center">
        <Badge variant={"secondary"}>Testimonials</Badge>
      </div>
      <h1 className="text-center text-3xl font-bold">
        Loved by thousands of users
      </h1>
      <p className="text-muted-foreground text-center">
        See what our users have to say about TaskFlow
      </p>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((el, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>
                <Stars rating={el.rating} />
              </CardTitle>
            </CardHeader>
            <CardContent>{el.description}</CardContent>
            <CardFooter>
              <div className="flex flex-col gap-2">
                <p className="text-xl">{el.name}</p>
                <p className="text-muted-foreground">{el.designation}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
