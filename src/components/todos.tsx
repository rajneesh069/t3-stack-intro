import { MicIcon } from "lucide-react";
import { TodoCard } from "./todo-card";
import { Input } from "./ui/input";

// Mock data for each section — 4 todos each
const todayTodos = [
  {
    id: "uuid-today-1",
    title: "Fix bug in login flow",
    description: "Users can't reset password, investigate OAuth callback.",
    done: false,
    userId: "user-123",
    createdAt: new Date("2025-08-01T10:00:00Z"),
    updatedAt: new Date("2025-08-01T10:00:00Z"),
  },
  {
    id: "uuid-today-2",
    title: "Code review PR #456",
    description: "Review new feature branch and leave feedback.",
    done: false,
    userId: "user-123",
    createdAt: new Date("2025-08-01T11:30:00Z"),
    updatedAt: new Date("2025-08-01T11:30:00Z"),
  },
  {
    id: "uuid-today-3",
    title: "Update dependencies",
    description: "Update all npm packages to latest minor versions.",
    done: true,
    userId: "user-123",
    createdAt: new Date("2025-08-01T08:15:00Z"),
    updatedAt: new Date("2025-08-01T12:00:00Z"),
  },
];

const laterTodayTodos = [
  {
    id: "uuid-later-1",
    title: "Design new dashboard UI",
    description: "Sketch wireframes and get feedback from the team.",
    done: false,
    userId: "user-123",
    createdAt: new Date("2025-08-01T13:00:00Z"),
    updatedAt: new Date("2025-08-01T13:00:00Z"),
  },
  {
    id: "uuid-later-2",
    title: "Write tests for user API",
    description: "Cover edge cases and error handling.",
    done: false,
    userId: "user-123",
    createdAt: new Date("2025-08-01T14:15:00Z"),
    updatedAt: new Date("2025-08-01T14:15:00Z"),
  },
  {
    id: "uuid-later-3",
    title: "Plan team retrospective",
    description: "Gather points and prepare agenda for Friday.",
    done: false,
    userId: "user-123",
    createdAt: new Date("2025-08-01T15:30:00Z"),
    updatedAt: new Date("2025-08-01T15:30:00Z"),
  },
];

const tomorrowTodos = [
  {
    id: "uuid-tomorrow-1",
    title: "Research new tech stack",
    description: "Look into Rust backend frameworks.",
    done: false,
    userId: "user-123",
    createdAt: new Date("2025-08-02T09:00:00Z"),
    updatedAt: new Date("2025-08-02T09:00:00Z"),
  },
  {
    id: "uuid-tomorrow-2",
    title: "Prepare presentation slides",
    description: "For next week’s all-hands meeting.",
    done: false,
    userId: "user-123",
    createdAt: new Date("2025-08-02T10:30:00Z"),
    updatedAt: new Date("2025-08-02T10:30:00Z"),
  },
  {
    id: "uuid-tomorrow-3",
    title: "Refactor auth middleware",
    description: "Make it compatible with new token strategy.",
    done: false,
    userId: "user-123",
    createdAt: new Date("2025-08-02T11:45:00Z"),
    updatedAt: new Date("2025-08-02T11:45:00Z"),
  },
];

export function Todos() {
  return (
    <div className="flex h-full w-full flex-col-reverse gap-2 p-2 lg:h-[calc(100vh-64px)] lg:flex-col">
      <div className="flex h-full w-full flex-grow flex-col border-b px-2 lg:flex-row">
        <section
          id="important-todos"
          className="h-full w-full flex-shrink-0 space-y-4 border-b p-3 lg:w-1/3 lg:border-r lg:border-b-0"
        >
          <h1 className="text-center text-4xl font-bold underline">
            Important
          </h1>
          {todayTodos.map((todo) => (
            <TodoCard
              key={todo.id}
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
