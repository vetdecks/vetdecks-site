import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VetDecks — Anki Decks for Veterinary Students (Textbook-Aligned)",
  description: "Study faster with textbook-aligned Anki decks for vet school. Basics → higher-order questions, species differences, and diagrams included.",
  openGraph: {
    title: "VetDecks — Anki Decks for Veterinary Students",
    description: "Textbook-aligned cards with images, tags, and higher-order prompts.",
    type: "website",
    url: "https://vetdecks.com",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "VetDecks — Anki Decks for Veterinary Students",
    description: "Textbook-aligned cards with images, tags, and higher-order prompts.",
    images: ["/og-cover.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
