import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DeleteTodo } from "./delete-todo";
import { EditTodo } from "./edit-todo";
import { ToggleComplete } from "./toggle-done";

export function TodoCard({
  id,
  title,
  description,
  done,
  priority,
}: {
  id: string;
  title: string;
  description: string | null;
  done: boolean;
  priority: "URGENT" | "TODAY" | "TOMORROW";
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
      <CardFooter className="flex justify-end gap-2">
        <ToggleComplete id={id} done={done} />
        <EditTodo
          id={id}
          title={title}
          description={description}
          priority={priority}
          done={done}
        />
        <DeleteTodo id={id} />
      </CardFooter>
    </Card>
  );
}
