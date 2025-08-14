import { MicIcon } from "lucide-react";
import { TodoCard } from "./todo-card";
import { Input } from "./ui/input";
import { api } from "@/trpc/server";

export async function Todos() {
  const todos = await api.todo.getAllTodos();
  const urgentTodos = todos.filter((todo) => todo.priority === "URGENT");
  const laterTodayTodos = todos.filter((todo) => todo.priority === "TODAY");
  const tomorrowTodos = todos.filter((todo) => todo.priority === "TOMORROW");
  return (
    <div className="flex h-full w-full flex-col-reverse gap-2 p-2 lg:h-[calc(100vh-64px)] lg:flex-col">
      <div className="flex h-full w-full flex-grow flex-col border-b px-2 lg:flex-row">
        <section
          id="important-todos"
          className="h-full w-full flex-shrink-0 space-y-4 border-b p-3 lg:w-1/3 lg:border-r lg:border-b-0"
        >
          <h1 className="text-center text-4xl font-bold underline">Urgent</h1>
          {urgentTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              done={todo.done}
            />
          ))}
        </section>

        <section
          id="later-today-todos"
          className="h-full w-full flex-shrink-0 space-y-4 border-b p-3 lg:w-1/3 lg:border-r lg:border-b-0"
        >
          <h1 className="text-center text-4xl font-bold underline">
            Later Today
          </h1>
          {laterTodayTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              done={todo.done}
            />
          ))}
        </section>

        <section
          id="tomorrow-todos"
          className="h-full w-full flex-shrink-0 space-y-4 p-3 lg:w-1/3"
        >
          <h1 className="text-center text-4xl font-bold underline">Tomorrow</h1>
          {tomorrowTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              done={todo.done}
            />
          ))}
        </section>
      </div>
      <section className="w-1/2 self-center p-3">
        <div className="relative">
          <Input placeholder="Chat...." className="w-full rounded-md pr-10" />
          <MicIcon
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
            size={20}
          />
        </div>
      </section>
    </div>
  );
}
