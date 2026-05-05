import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HandbookAI – Generate Compliant Employee Handbooks",
  description: "Questionnaire-based tool that generates state-specific employee handbooks with required policies and legal language for small businesses.",
  keywords: "employee handbook, HR compliance, small business, state-specific policies",
  openGraph: {
    title: "HandbookAI – Generate Compliant Employee Handbooks",
    description: "Generate state-compliant employee handbooks in minutes. Built for small businesses with 5-50 employees.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="def0a798-d149-41e8-bfac-7582c058f7ba"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
