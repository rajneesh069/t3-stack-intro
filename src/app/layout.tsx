import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";
import { headers } from "next/headers";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Task Flow",
  description: "A todo app to manage daily tasks.",
  icons: [{ rel: "icon", url: "/todo-logo.png" }],
};

const inter = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const theme = (await headers()).get("x-theme") ?? "dark";

  const isDark = theme === "dark";
  return (
    <html
      lang="en"
      className={`${inter.className} ${isDark ? "dark" : ""}`}
      style={{ colorScheme: isDark ? "dark" : "light" }}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableColorScheme={true}
        >
          <TRPCReactProvider>
            <Navbar />
            {children}
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
