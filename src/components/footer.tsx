import { CheckCircle } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Support: ["Help Center", "Privacy Policy", "Terms of Service", "Status"],
};

const currentYear = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
}).format(new Date());

export function Footer() {
  return (
    <footer className="border-t px-4 py-12">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8" />
              <span className="text-xl font-bold">TaskFlow</span>
            </div>
            <p className="text-muted-foreground">
              The smart todo app that helps you get things done effortlessly.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-semibold">{category}</h3>
              <div className="space-y-2">
                {links.map((link) => (
                  <div
                    key={link}
                    className="text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground mt-12 border-t pt-8 text-center">
          <p>&copy; {currentYear} TaskFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
