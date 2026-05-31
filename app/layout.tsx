import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant Health Inspection Predictor",
  description: "Predict health inspection violations before they happen. AI-powered alerts for restaurant owners and franchise managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b2e41285-0d95-49aa-9170-49bdb8190393"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
