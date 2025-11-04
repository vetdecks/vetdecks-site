"use client";

import React from "react";
import Button from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Check, Star } from "lucide-react";

export default function Page() {
  // list of Dyce chapters 1–31
  const dyceChapters = [
    { title: "Ch. 1 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-1-dyce" },
    { title: "Ch. 2 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-2-dyce" },
    { title: "Ch. 3 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-3-dyce" },
    { title: "Ch. 4 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-4-dyce" },
    { title: "Ch. 5 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-5-dyce" },
    { title: "Ch. 6 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-6-dyce" },
    // free sample
    { title: "Ch. 7 – Dyce (free sample)", url: "https://vetdecks.gumroad.com/l/ch-7-dyce" },
    { title: "Ch. 8 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-8-dyce" },
    { title: "Ch. 9 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-9-dyce" },
    { title: "Ch. 10 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-10-dyce" },
    { title: "Ch. 11 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-11-dyce" },
    { title: "Ch. 12 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-12-dyce" },
    { title: "Ch. 13 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-13-dyce" },
    { title: "Ch. 14 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-14-dyce" },
    { title: "Ch. 15 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-15-dyce" },
    { title: "Ch. 16 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-16-dyce" },
    { title: "Ch. 17 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-17-dyce" },
    { title: "Ch. 18 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-18-dyce" },
    { title: "Ch. 19 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-19-dyce" },
    { title: "Ch. 20 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-20-dyce" },
    { title: "Ch. 21 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-21-dyce" },
    { title: "Ch. 22 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-22-dyce" },
    { title: "Ch. 23 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-23-dyce" },
    { title: "Ch. 24 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-24-dyce" },
    { title: "Ch. 25 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-25-dyce" },
    { title: "Ch. 26 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-26-dyce" },
    { title: "Ch. 27 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-27-dyce" },
    { title: "Ch. 28 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-28-dyce" },
    { title: "Ch. 29 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-29-dyce" },
    { title: "Ch. 30 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-30-dyce" },
    { title: "Ch. 31 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-31-dyce" },
  ];

  return (
    <main className="min-h-screen text-slate-900">
      {/* top banner */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-center text-sm py-2 px-4">
        VetDecks is new 🎉 Chapters 1–31 of Dyce Anatomy are live now. More decks are coming soon.
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">VetDecks</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">Features</a>
            <a href="#how" className="hover:opacity-80">How it works</a>
            <a href="#subjects" className="hover:opacity-80">Subjects</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" href="#pricing">Get decks</Button>
            <Button href="#sample" className="bg-sky-600 hover:bg-sky-700">Try a free sample</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Anki decks for veterinary students —{" "}
              <span className="text-sky-700">crafted from the most-used textbooks</span>
            </h1>
            <p className="mt-5 text-lg text-slate-700">
              VetDecks turns dense chapters into clean, exam-ready flashcards: fundamentals,
              species differences, and higher-order questions — so you learn faster and remember longer.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#subjects">Browse decks</Button>
              <Button variant="outline" href="#sample">Download a free sample</Button>
            </div>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Directly mapped to popular vet texts</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Basic facts → clinical reasoning</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Media-friendly, Anki-ready cards</li>
            </ul>
          </div>

          {/* sample card */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Sample Deck Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border p-4">
                <div className="text-xs uppercase text-slate-500 mb-2">Front</div>
                <p className="text-slate-900">
                  Identify the major branches of the celiac artery in the dog and note a key species difference vs. the horse.
                </p>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-xs uppercase text-slate-500 mb-2">Back</div>
                <ul className="space-y-2">
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Dog: hepatic, left gastric, splenic.</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Horse: similar trunks with enlarged splenic branches.</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Source: standard vet anatomy texts.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 border-t bg-white scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Study smarter, retain longer</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              ["Built for vet curricula", "Organized by course & species."],
              ["Active recall, done right", "Mix of basic facts and higher-order prompts."],
              ["Tiered difficulty", "Filter to what you need right now."],
              ["Textbook-aligned", "Cards cite the source chapter."],
            ].map(([title, body]) => (
              <Card key={title}>
                <CardHeader><CardTitle className="text-lg">{title}</CardTitle></CardHeader>
                <CardContent className="text-slate-700">{body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects + Dyce list */}
      <section id="subjects" className="py-16 bg-white border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Dyce Anatomy — chapters 1–31</h2>
              <p className="text-slate-700 mt-2">Buy only the chapters you need right now.</p>
            </div>
            <Button variant="outline" href="#pricing">See pricing</Button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dyceChapters.map((ch) => (
              <Card key={ch.url}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{ch.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button href={ch.url} className="w-full">Get this deck</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50 border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Simple, student-friendly pricing</h2>
          <p className="text-center text-slate-700 mt-2">Start with one chapter. Add more as you need them.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle>Single chapter</CardTitle></CardHeader>
              <CardContent>
                <div className="text-5xl font-extrabold">$5 <span className="text-base font-medium">USD/EUR*</span></div>
                <p className="mt-2 text-slate-600 text-sm">*Price is set in Gumroad; regional currency may vary.</p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> One textbook chapter</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Anki-ready .apkg</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Keep forever</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Build-your-own bundle</CardTitle></CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Buy only the chapters you need this week — anatomy lab, midterm, or boards prep.
                </p>
                <p className="mt-4 text-slate-600 text-sm">
                  Full textbooks (all chapters) will get their own Gumroad products later at different prices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-slate-50 border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            <Card><CardContent className="pt-6"><strong>Do I need Anki?</strong><br />Yes — downloads are standard .apkg files.</CardContent></Card>
            <Card><CardContent className="pt-6"><strong>Are diagrams included?</strong><br />No — current decks focus on text-based, exam-style recall to stay copyright-safe.</CardContent></Card>
            <Card><CardContent className="pt-6"><strong>Can I request another textbook?</strong><br />Email hello@vetdecks.com and say what you need.</CardContent></Card>
          </div>
        </div>
      </section>

      {/* Free sample */}
      <section id="sample" className="py-16 bg-white border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Grab the free sample (Dyce Ch. 7)</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Textbook-aligned prompts</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Anki-ready</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> No email required</li>
            </ul>
          </div>
          <div className="space-y-3">
            <Button href="https://vetdecks.gumroad.com/l/ch-7-dyce" className="w-full">
              Get Dyce Ch. 7 free
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">What students are saying</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Clearer than the textbook for quick review.",
              "I can buy only the chapters I'm in right now.",
              "Nice to have species differences actually called out.",
            ].map((quote) => (
              <Card key={quote}>
                <CardContent className="pt-6 text-slate-800">
                  <Star className="inline h-5 w-5 mr-2 text-amber-500" />
                  {quote}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold">VetDecks</div>
            <p className="text-slate-600 mt-2">
              Textbook-aligned Anki decks for vet students. More decks coming soon.
            </p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="mailto:hello@vetdecks.com" className="hover:underline">Contact</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Stay in touch</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="mailto:hello@vetdecks.com" className="hover:underline">Email</a></li>
              <li><a href="https://github.com/vetdecks/vetdecks-site" className="hover:underline" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 mt-8">
          © {new Date().getFullYear()} VetDecks. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
