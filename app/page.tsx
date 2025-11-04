"use client";

import React from "react";
import Button from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Check, Star } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* Nav */}
        <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-center text-sm py-2 px-4">
        VetDecks is new 🎉 Chapters 1–21 of Dyce Anatomy are live now. More chapters and more subjects are being added daily.
        </div>

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
              <span className="text-sky-700">
                crafted from the most-used textbooks
              </span>
            </h1>

            <p className="mt-5 text-lg text-slate-700">
              VetDecks turns dense chapters into clean, exam-ready flashcards:
              fundamentals, species differences, and higher-order questions —
              so you learn faster and remember longer.
            </p>

            <p className="mt-3 text-sm font-medium text-sky-700">
              New project. More decks are being added soon.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#subjects">Browse decks</Button>
              <Button variant="outline" href="#sample">Download a free sample</Button>
            </div>

            <ul className="mt-6 space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Directly mapped to popular vet texts</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Basic facts → clinical reasoning</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> No sign-up, instant downloads</li>
            </ul>
          </div>

          {/* Sample card preview */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Sample Deck Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="rounded-xl border p-4">
                <div className="text-xs uppercase text-slate-500 mb-2">Front</div>
                <p className="text-slate-900">
                  Identify the major branches of the <strong>celiac artery</strong> in the dog
                  and note a key species difference vs. the horse.
                </p>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-xs uppercase text-slate-500 mb-2">Back</div>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <strong>Dog:</strong> Hepatic, left gastric, splenic.
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <strong>Horse:</strong> Similar trunks with enlarged splenic branches.
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <strong>Source:</strong> Dyce, Sack, and Wensing's Textbook of Veterinary Anatomy.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 border-t bg-white scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Study smarter, retain longer
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6 text-sm">
            {[
              ["Built for vet curricula", "Organized by course & textbook."],
              ["Active recall, done right", "Mix of core facts and higher-order prompts that mirror exam thinking."],
              ["Tiered difficulty", "Cards are tagged Basic / Concept / Higher-Order / Clinical Application / Species Differences for smart filtering."],
              ["Directly mapped to chapters", "Each deck cites the source chapter so you can cross-check fast."]
            ].map(([title, body]) => (
              <Card key={title as string}>
                <CardHeader>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700">{body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 bg-slate-50 border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How VetDecks works
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm">
            {[
              ["1. Choose your subject", "Pick anatomy, physiology, medicine, surgery, or histology."],
              ["2. Download the deck", "Import into Anki in seconds — tags included."],
              ["3. Study with purpose", "Filter by difficulty, subject, or textbook chapter."]
            ].map(([t, b]) => (
              <Card key={t as string}>
                <CardHeader><CardTitle className="text-base">{t}</CardTitle></CardHeader>
                <CardContent className="text-slate-700">{b}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="py-16 bg-white border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Subjects & deck lines</h2>
          <p className="text-slate-700 mt-2 text-sm">
            Curated collections organized by course and species. New decks added regularly.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
            {[
              ["Anatomy", "Region- and system-based decks.", "Core"],
              ["Physiology", "Mechanisms first, then clinical correlations.", "Core"],
              ["Pharmacology", "Drug classes, mechanisms, contraindications, and red flags.", "Core"],
              ["Medicine & Surgery", "Problem-based cards that drive pattern recognition.", "Clinical"],
              ["Pathology", "Gross ↔ histo with key differentials.", "Core"],
              ["Reproduction", "Species differences and protocols at a glance.", "Clinical"],
            ].map(([title, blurb, tag]) => (
              <Card key={title as string}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{title}</CardTitle>
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-100">
                      {tag}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="text-slate-700">{blurb}</CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <Button variant="outline" href="#pricing">See pricing</Button>
          </div>
        </div>
      </section>

      {/* Pricing (2 tiers, no all-access) */}
      <section id="pricing" className="py-20 bg-slate-50 border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Simple, student-friendly pricing
          </h2>

          <p className="text-center text-slate-700 mt-2 text-sm">
            Pay only for what you need. More decks are being added soon.
          </p>

         <div className="mt-10 grid md:grid-cols-2 gap-6">
  {[
    {
      title: "Single Chapter Deck",
      price: "$5",
      bullets: [
        "Anki .apkg (ready to import)",
        "Smart tags (subject, chapter, difficulty)",
      ],
      cta: "Browse chapters",
      link: "https://vetdecks.gumroad.com/"
    }
  ].map(({ title, price, bullets, cta, link }) => (
    <Card key={title}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-5xl font-extrabold">
          {price} <span className="text-base font-medium">EUR</span>
        </div>

        <ul className="mt-4 space-y-2 text-slate-700">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <Check className="h-5 w-5 text-emerald-600" /> {b}
            </li>
          ))}
        </ul>

        <Button
          href={link}
          className="w-full mt-6"
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  ))}
          </div>
        </div>
      </section>
{/* Chapters for sale */}
<section
  id="chapters"
  className="py-20 bg-white border-t scroll-mt-24"
>
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Dyce Anatomy — Available Chapters
    </h2>
    <p className="text-center text-slate-700 mt-2 max-w-2xl mx-auto">
      Download a chapter-specific Anki deck (.apkg), fully tagged and exam-focused.
      Each chapter is sold separately so you only buy what you need.
    </p>

    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { num: "1",  url: "https://vetdecks.gumroad.com/l/ch-1-dyce" },
        { num: "2",  url: "https://vetdecks.gumroad.com/l/ch-2-dyce" },
        { num: "3",  url: "https://vetdecks.gumroad.com/l/ch-3-dyce" },
        { num: "4",  url: "https://vetdecks.gumroad.com/l/ch-4-dyce" },
        { num: "5",  url: "https://vetdecks.gumroad.com/l/ch-5-dyce" },
        { num: "6",  url: "https://vetdecks.gumroad.com/l/ch-6-dyce" },
        {
          num: "7 (free sample)",
          url: "https://vetdecks.gumroad.com/l/ch-7-dyce",
          highlight: true
        },
        { num: "8",  url: "https://vetdecks.gumroad.com/l/ch-8-dyce" },
        { num: "9",  url: "https://vetdecks.gumroad.com/l/ch-9-dyce" },
        { num: "10", url: "https://vetdecks.gumroad.com/l/ch-10-dyce" },
        { num: "11", url: "https://vetdecks.gumroad.com/l/ch-11-dyce" },
        { num: "12", url: "https://vetdecks.gumroad.com/l/ch-12-dyce" },
        { num: "13", url: "https://vetdecks.gumroad.com/l/ch-13-dyce" },
        { num: "14", url: "https://vetdecks.gumroad.com/l/ch-14-dyce" },
        { num: "15", url: "https://vetdecks.gumroad.com/l/ch-15-dyce" },
        { num: "16", url: "https://vetdecks.gumroad.com/l/ch-16-dyce" },
        { num: "17", url: "https://vetdecks.gumroad.com/l/ch-17-dyce" },
        { num: "18", url: "https://vetdecks.gumroad.com/l/ch-18-dyce" },
        { num: "19", url: "https://vetdecks.gumroad.com/l/ch-19-dyce" },
        { num: "20", url: "https://vetdecks.gumroad.com/l/ch-20-dyce" },
        { num: "21", url: "https://vetdecks.gumroad.com/l/ch-21-dyce" }
        { num: "22", url: "https://vetdecks.gumroad.com/l/ch-22-dyce" },
        { num: "23", url: "https://vetdecks.gumroad.com/l/ch-23-dyce" },
        { num: "24", url: "https://vetdecks.gumroad.com/l/ch-24-dyce" },
        { num: "25", url: "https://vetdecks.gumroad.com/l/ch-25-dyce" },
        { num: "26", url: "https://vetdecks.gumroad.com/l/ch-26-dyce" },
        { num: "27", url: "https://vetdecks.gumroad.com/l/ch-27-dyce" },
        { num: "28", url: "https://vetdecks.gumroad.com/l/ch-28-dyce" },
        { num: "29", url: "https://vetdecks.gumroad.com/l/ch-29-dyce" },
        { num: "30", url: "https://vetdecks.gumroad.com/l/ch-30-dyce" },
        { num: "31", url: "https://vetdecks.gumroad.com/l/ch-31-dyce" },
      ].map(({ num, url, highlight }) => (
        <Card
          key={num}
          className={highlight ? "ring-2 ring-sky-600" : ""}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                Dyce Anatomy — Chapter {num}
              </CardTitle>
              {highlight && (
                <span className="text-xs px-2 py-1 rounded-full bg-sky-100 text-sky-700">
                  Free sample
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent className="text-slate-700 space-y-4">
            <div className="text-sm">
              Fully tagged Anki deck (.apkg). Focused on examable anatomy,
              species differences, and clinically relevant structures.
            </div>

            <Button
              href={url}
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              {highlight ? "Download free" : "Buy this chapter"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>

    <p className="text-center text-xs text-slate-500 mt-8">
      More chapters and other subjects (physio, pharm, surgery, repro) are
      being added daily. Check back soon {" "}
      <a
        className="underline"
        href="mailto:hello@vetdecks.com"
      >
        hello@vetdecks.com
      </a>{" "}
      to request a priority topic.
    </p>
  </div>
</section>

      {/* Testimonials */}
      <section className="py-16 bg-white border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What students are saying
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm">
            {[
              "“These decks saved me hours rebuilding content that already exists in the textbook. Exact enough for exams, clear enough for clinics.” — Final-year DVM student",
              "“I finally get spaced repetition. The tags make it easy to focus just on what we covered this week.” — 1st-year student",
              "“The species differences are the secret sauce. Students actually *remember* them.” — Anatomy TA",
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

      {/* FAQ */}
      <section id="faq" className="py-16 bg-slate-50 border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Frequently asked questions
          </h2>

          <div className="mt-8 space-y-4 text-sm">
            <Card>
              <CardContent className="pt-6">
                <strong>Do I need Anki to use VetDecks?</strong>
                <br />
                Yes. Our downloads are standard .apkg files that import
                directly into Anki on desktop or mobile.
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <strong>What textbooks are you aligned to?</strong>
                <br />
                We build from the most-used veterinary texts; each deck cites
                chapter sources inside the cards.
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <strong>Can I request a topic?</strong>
                <br />
                Absolutely — email hello@vetdecks.com and tell us what you want
                covered.
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <strong>Do updates cost extra?</strong>
                <br />
                Single chapter decks include lifetime updates for that chapter.
                Bundles include lifetime updates for that bundle.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free sample */}
      <section id="sample" className="py-16 bg-white border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Grab a free sample deck</h3>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-emerald-600" /> Fully tagged cards
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-emerald-600" /> No email required
              </li>
            </ul>
          </div>

          <div className="space-y-3">
          <Button
  href="https://vetdecks.gumroad.com/l/ch-7-dyce"
  className="w-full"
  target="_blank"
  rel="noopener noreferrer"
>
  Get Chapter 7 free (.apkg)
</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold">VetDecks</div>
            <p className="text-slate-600 mt-2">
              High-yield vet flashcards directly from core textbooks —
              structured for fast recall and real exam prep.
            </p>
            <p className="text-xs text-sky-700 mt-2">
              More decks are being added. This project is new.
            </p>
          </div>

          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li>
                <a href="mailto:hello@vetdecks.com" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Stay in touch</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li>
                <a
                  href="mailto:hello@vetdecks.com"
                  className="hover:underline"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vetdecks/vetdecks-site"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </li>
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
