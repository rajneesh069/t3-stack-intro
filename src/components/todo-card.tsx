import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DeleteTodo } from "./delete-todo";

export function TodoCard({
  id,
  title,
  description,
  done,
}: {
  id: string;
  title: string;
  description: string | null;
  done: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={`${done ? "line-through" : ""}`}>
          {title}
        </CardTitle>
        {description && (
          <CardDescription className={`${done ? "line-through" : ""}`}>
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardFooter className="flex justify-end">
        <DeleteTodo id={id} />
      </CardFooter>
    </Card>
  );
}
