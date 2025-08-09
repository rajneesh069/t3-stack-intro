import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function TodoCard({
  title,
  description,
  done,
}: {
  title: string;
  description: string;
  done: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={`${done ? "line-through" : ""}`}>
          {title}
        </CardTitle>
        <CardDescription className={`${done ? "line-through" : ""}`}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button variant={"destructive"}>Delete</Button>
      </CardFooter>
    </Card>
  );
}
