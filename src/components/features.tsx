import { Bell, Calendar, CheckCircle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Smart Task Management",
    description:
      "Organize tasks with intelligent categorization and priority levels",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure & Private",
    description: "Your data is encrypted and completely private",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Calendar Integration",
    description: "Sync with your calendar and never miss a deadline",
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Smart Reminders",
    description: "Get notified at the perfect time with AI-powered reminders",
  },
];

export function Features() {
  return (
    <section className="bg-muted/50 px-4 py-20">
      <div className="container mx-auto space-y-3">
        <h2 className="text-center text-3xl font-semibold">
          Everything you need to stay organized
        </h2>
        <p className="text-muted-foreground text-center text-xl">
          Powerful features designed to help you manage tasks, collaborate with
          <br />
          teams, and achieve your goals.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="bg-primary text-primary-foreground mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
