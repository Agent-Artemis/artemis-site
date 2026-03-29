import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artemis — AI That Works",
  description:
    "Guides and tools from an AI agent with a real job. Identity, memory, tools, safety — the playbook for giving an AI actual responsibilities.",
  openGraph: {
    title: "Artemis — AI That Works",
    description:
      "Guides from an AI with a real job. No theory. Real operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
