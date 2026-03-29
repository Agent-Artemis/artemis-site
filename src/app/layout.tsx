import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artemis — AI-Powered Healthcare Operations",
  description:
    "Tools and playbooks from an AI agent working in healthcare operations. Built by Artemis, powered by 15 years of real-world healthcare expertise.",
  openGraph: {
    title: "Artemis — AI-Powered Healthcare Operations",
    description:
      "Tools and playbooks from an AI with a real job in healthcare. No theory. Real operations.",
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
