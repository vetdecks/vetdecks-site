"use client";
import Button from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Check, Star } from "lucide-react";

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen text-slate-900">
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
              VetDecks turns dense chapters into clean, exam-ready flashcards:
              fundamentals, species differences, and higher-order questions —
              with diagrams — so you learn faster and remember longer.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#subjects">Browse decks</Button>
              <Button variant="outline" href="#sample">Download a free sample</Button>
            </div>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Directly mapped to popular vet texts</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Basic facts → clinical reasoning</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Images & labeled diagrams included</li>
            </ul>
          </div>
          <Card className="shadow-xl">
            <CardHeader><CardTitle>Sample Deck Preview</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border p-4">
                <div className="text-xs uppercase text-slate-500 mb-2">Front</div>
                <p className="text-slate-900">
                  Identify the major branches of the <strong>celiac artery</strong> in the dog and
                  note a key species difference vs. the horse.
                </p>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-xs uppercase text-slate-500 mb-2">Back</div>
                <ul className="space-y-2">
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> <strong>Dog:</strong> Hepatic, left gastric, splenic.</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> <strong>Horse:</strong> Similar trunks with enlarged splenic branches.</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> <strong>Source:</strong> Standard vet anatomy texts; labeled diagram included.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature bullets */}
      <section id="features" className="py-16 border-t bg-white scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Study smarter, retain longer</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              ["Built for vet curricula", "Organized by course & species with anatomy, physiology, medicine, surgery, and more."],
              ["Active recall, done right", "Mix of basic facts, clinical applications, and higher-order prompts that mirror exam thinking."],
              ["Tiered difficulty", "Cards are tagged Basic, Concept, Higher-Order, Clinical Application and Species Differences for smart filtering."],
              ["Directly mapped to chapters", "Each deck cites the source chapter so you can cross-check and dive deeper quickly and efficiently."]
            ].map(([title, body]) => (
              <Card key={title as string}>
                <CardHeader><CardTitle className="text-lg">{title}</CardTitle></CardHeader>
                <CardContent className="text-slate-700">{body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 bg-slate-50 border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">How VetDecks works</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ["1. Choose your subject", "Pick anatomy, physiology, medicine, surgery, or systems."],
              ["2. Download the deck", "Import into Anki in seconds — tags & media included."],
              ["3. Study with purpose", "Filter by difficulty, species, or textbook chapter."]
            ].map(([t, b]) => (
              <Card key={t as string}>
                <CardHeader><CardTitle>{t}</CardTitle></CardHeader>
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
          <p className="text-slate-700 mt-2">Curated collections organized by course and species. New decks added regularly.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ["Anatomy", "Region- and system-based decks with labeled diagrams.", "Core"],
              ["Physiology", "Mechanisms first, then clinical correlations.", "Core"],
              ["Pharmacology", "Drug classes, mechanisms, contraindications, and red flags.", "Core"],
              ["Medicine & Surgery", "Problem-based cards that drive pattern recognition.", "Clinical"],
              ["Pathology", "Gross ↔ histo with key differentials and images.", "Core"],
              ["Repro & Theriogenology", "Species differences and protocols at a glance.", "Clinical"],
            ].map(([title, blurb, tag]) => (
              <Card key={title as string}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{title}</CardTitle>
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-100">{tag}</span>
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

      {/* Pricing (All-Access removed) */}
      <section id="pricing" className="py-20 bg-slate-50 border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Simple, student-friendly pricing</h2>
          <p className="text-center text-slate-700 mt-2">
            Buy just the chapters you need, or the complete book.
          </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Single Chapter */}
          <Card>
            <CardHeader><CardTitle>Single Chapter</CardTitle></CardHeader>
            <CardContent>
              <div className="text-5xl font-extrabold">$5 <span className="text-base font-medium">each</span></div>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Anki .apkg with media</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Tags & labeled diagrams</li>
              </ul>
              <Button href="https://vetdecks.gumroad.com/l/ch-7-dyce" target="_blank" rel="noopener noreferrer" className="w-full mt-6">
                Choose a chapter
              </Button>
            </CardContent>
          </Card>

          {/* Complete Book */}
          <Card className="ring-2 ring-sky-600">
            <CardHeader><CardTitle>Complete Book</CardTitle></CardHeader>
            <CardContent>
              <div className="text-5xl font-extrabold">
                From $39 <span className="text-base font-medium">(varies by book)</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> All chapters included</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Smart tags for filtering</li>
              </ul>
              <Button href="https://vetdecks.gumroad.com/l/dyce-complete" target="_blank" rel="noopener noreferrer" className="w-full mt-6">
                Choose a book
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">What students are saying</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "“These decks saved me hours rebuilding content that already exists in the textbook. Exact enough for exams, clear enough for clinics.” — Final-year DVM student",
              "“I finally get spaced repetition. The tags make it easy to focus just on what we covered this week.” — 1st-year student",
              "“The images and species differences are the secret sauce. Students actually *remember* them.” — Anatomy TA",
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
          <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            <Card><CardContent className="pt-6"><strong>Do I need Anki to use VetDecks?</strong><br />Yes. Our downloads are standard .apkg files that import directly into Anki on desktop or mobile.</CardContent></Card>
            <Card><CardContent className="pt-6"><strong>What textbooks are you aligned to?</strong><br />We build from the most-used veterinary texts; each deck cites chapter sources inside the cards.</CardContent></Card>
            <Card><CardContent className="pt-6"><strong>Can I request a topic?</strong><br />Absolutely — use the contact link below and we’ll prioritize high-demand subjects.</CardContent></Card>
            <Card><CardContent className="pt-6"><strong>Do updates cost extra?</strong><br />Single chapters include lifetime updates; complete books include updates for 12 months.</CardContent></Card>
          </div>
        </div>
      </section>

      {/* Free sample */}
      <section id="sample" className="py-16 bg-white border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Grab a free sample deck</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Fully tagged cards</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Images included</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> No email required</li>
            </ul>
          </div>
          <div className="space-y-3">
            <Button href="/downloads/Ch-7-Cardiovascular-System-Dyce.apkg" className="w-full">Download .apkg (Anki)</Button>
            <Button variant="outline" href="/downloads/Ch-7-Cardiovascular-System-Dyce.zip" className="w-full">Download .zip (backup)</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold">VetDecks</div>
            <p className="text-slate-600 mt-2">
              Questions tailored directly from the most-used veterinary textbooks — from basic concepts
              to higher-level thinking, with diagrams included.
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
              <li><a href="https://github.com/vetdecks/vetdecks-site" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 mt-8">© {new Date().getFullYear()} VetDecks. All rights reserved.</div>
      </footer>
    </main>
  );
}
