"use client";

import React from "react";
// ⬇️ use relative paths instead of "@/..."
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Check, BookOpen, GraduationCap, Layers, Brain, Zap, Star, Shield, Github, Mail } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <SiteHeader />
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Showcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-sky-600 text-white grid place-items-center font-bold">VD</div>
            <span className="font-semibold tracking-tight">VetDecks</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-sky-700">Features</a>
            <a href="#how" className="hover:text-sky-700">How it works</a>
            <a href="#showcase" className="hover:text-sky-700">Subjects</a>
            <a href="#pricing" className="hover:text-sky-700">Pricing</a>
            <a href="#faq" className="hover:text-sky-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" href="#pricing">Get decks</Button>
            <Button className="bg-sky-600 hover:bg-sky-700" href="#cta">Try a free sample</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-200 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-200 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Anki decks for veterinary students —
              <span className="text-sky-700"> crafted from the most-used textbooks</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              VetDecks turns dense chapters into clean, exam-ready flashcards. Get fundamentals, species differences, and higher-order questions — with diagrams — so you learn faster and remember longer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="bg-sky-600 hover:bg-sky-700" href="#pricing">Browse decks</Button>
              <Button variant="outline" href="#cta">Download a free sample</Button>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-slate-600">
              {[
                "Directly mapped to popular vet texts",
                "Basic facts ➝ clinical reasoning",
                "Images & labeled diagrams included",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-sky-600" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:justify-self-end">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <Card className="w-full max-w-xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl">Sample Deck Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-xl border bg-white p-4">
          <div className="text-sm text-slate-500 mb-2">Front</div>
          <div className="rounded-lg border p-4">
            <p className="font-medium">
              Identify the major branches of the <span className="underline decoration-sky-400 underline-offset-4">celiac artery</span> in the dog and note a key species difference vs. the horse.
            </p>
          </div>
          <div className="my-4 h-px bg-slate-100" />
          <div className="text-sm text-slate-500 mb-2">Back</div>
          <div className="rounded-lg border p-4">
            <ul className="space-y-1">
              <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-emerald-600"/><span><strong>Dog:</strong> Hepatic, left gastric, splenic.</span></li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-emerald-600"/><span><strong>Horse:</strong> Similar trunks with enlarged splenic branches; extensive anastomoses.</span></li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-emerald-600"/><span><em>Source:</em> Standard vet anatomy texts; labeled diagram included.</span></li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TrustBar() {
  const items = [
    { icon: BookOpen, text: "Textbook-aligned" },
    { icon: Brain, text: "Spaced-repetition ready" },
    { icon: Layers, text: "Basic → advanced" },
    { icon: Shield, text: "Quality-checked" },
  ];
  return (
    <section className="border-y bg-white/60">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8 lg:py-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3">
            <Icon className="h-5 w-5 text-slate-700" />
            <span className="text-sm text-slate-600">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: GraduationCap, title: "Built for vet curricula", body: "Organized by course & species with anatomy, physiology, medicine, surgery and more." },
    { icon: Zap, title: "Active recall, done right", body: "Mix of basic facts, clinical pearls, and higher-order prompts that mirror exam thinking." },
    { icon: Layers, title: "Tiered difficulty", body: "Start simple, then climb. Cards are tagged Basic, Core, Challenge for smart filtering." },
    { icon: BookOpen, title: "Directly mapped to chapters", body: "Each deck cites the source chapter so you can cross-check and dive deeper fast." },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">Study smarter, retain longer</h2>
        <p className="mt-3 text-slate-600">
          Purpose-built Anki decks so you can move through content efficiently and keep it for finals, boards, and clinics.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, body }) => (
          <Card key={title}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-sky-700" />
                <CardTitle className="text-base">{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">{body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: 1, title: "Choose your subject", body: "Pick anatomy, physiology, medicine, surgery, or systems." },
    { n: 2, title: "Download the deck", body: "Import into Anki in seconds — tags & media included." },
    { n: 3, title: "Study with purpose", body: "Filter by difficulty, species, or textbook chapter." },
  ];
  return (
    <section id="how" className="bg-slate-50/60 border-y">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">How VetDecks works</h2>
          <p className="mt-3 text-slate-600">Get from chapter → cards → mastery without the busywork.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.n}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{s.n}. {s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{s.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const subjects = [
    { title: "Anatomy", blurb: "Region- and system-based decks with labeled diagrams.", tag: "Core" },
    { title: "Physiology", blurb: "Mechanisms first, then clinical correlations.", tag: "Core" },
    { title: "Pharmacology", blurb: "Drug classes, mechanisms, contraindications, and red flags.", tag: "Core" },
    { title: "Medicine & Surgery", blurb: "Problem-based cards that drive pattern recognition.", tag: "Clinical" },
    { title: "Pathology", blurb: "Gross ↔ histo with key differentials and images.", tag: "Core" },
    { title: "Repro & Theriogenology", blurb: "Species differences and protocols at a glance.", tag: "Clinical" },
  ];
  return (
    <section id="showcase" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold">Subjects & deck lines</h2>
          <p className="mt-2 text-slate-600">Curated collections organized by course and species. New decks added regularly.</p>
        </div>
        <Button variant="outline" href="#pricing">See pricing</Button>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((s) => (
          <Card key={s.title}>
            <CardHeader className="pb-1">
              <CardTitle className="flex items-center justify-between text-base">
                <span>{s.title}</span>
                <span className="text-xs rounded-full bg-slate-100 px-2 py-0.5">{s.tag}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">{s.blurb}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Single Deck",
      price: "$9",
      desc: "One subject chapter-aligned deck (lifetime access).",
      features: ["Anki .apkg", "Media & diagrams", "Free updates for that deck"],
      highlight: false,
    },
    {
      name: "Course Bundle",
      price: "$39",
      desc: "Anatomy / Physio / Pathology bundle for one term.",
      features: ["Multiple decks", "Smart tags", "Email support"],
      highlight: true,
    },
    {
      name: "All-Access",
      price: "$99",
      desc: "Everything we make this year, plus new releases.",
      features: ["All current decks", "All updates for 12 months", "Priority support"],
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="bg-slate-50/60 border-y">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Simple, student-friendly pricing</h2>
          <p className="mt-3 text-slate-600">Start small or go all-in — your call.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <Card key={t.name} className={t.highlight ? "ring-1 ring-sky-600" : ""}>
              <CardHeader>
                <CardTitle className="text-xl">{t.name}</CardTitle>
                <div className="mt-2 text-4xl font-extrabold">{t.price}<span className="text-base font-normal text-slate-500"> USD</span></div>
                <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-sky-600 hover:bg-sky-700" href="#cta">Choose {t.name}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Final-year DVM student", quote: "These decks saved me hours rebuilding content that already exists in the textbook. Exact enough for exams, clear enough for clinics." },
    { name: "1st-year student", quote: "I finally get spaced repetition. The tags make it easy to focus just on what we covered this week." },
    { name: "Anatomy TA", quote: "The images and species differences are the secret sauce. Students actually *remember* them." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">What students are saying</h2>
        <p className="mt-3 text-slate-600">Real feedback from early users.</p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {items.map((t, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <Star className="h-5 w-5" />
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-500">— {t.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const qas = [
    {
      q: "Do I need Anki to use VetDecks?",
      a: "Yes. Our downloads are standard .apkg files that import directly into Anki on desktop or mobile.",
    },
    {
      q: "What textbooks are you aligned to?",
      a: "We build from the most-used veterinary texts; each deck cites chapter sources inside the cards.",
    },
    {
      q: "Can I request a topic?",
      a: "Absolutely — use the contact form below and we’ll prioritize high-demand subjects.",
    },
    {
      q: "Do updates cost extra?",
      a: "Single decks include lifetime updates for that deck. All-Access includes all updates for 12 months.",
    },
  ];
  return (
    <section id="faq" className="bg-slate-50/60 border-y">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Quick answers about formats, updates, and requests.</p>
        </div>
        <div className="mt-10 grid gap-4">
          {qas.map((qa) => (
            <Card key={qa.q} className="border-slate-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{qa.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{qa.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  // paths to the real files we bundled in /public/downloads
  const SAMPLE_APKG = "/downloads/Ch-7-Cardiovascular-System-Dyce.apkg";
  const SAMPLE_ZIP = "/downloads/Ch-7-Cardiovascular-System-Dyce.zip";
  return (
    <section id="cta" className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Grab a free sample deck</h3>
          <p className="mt-3 text-slate-600">Kick the tires: import, study a few cards, and see how it feels.</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/>Fully tagged cards</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/>Images included</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600"/>No email required</li>
          </ul>
        </div>
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg">Get your sample</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button className="w-full bg-sky-600 hover:bg-sky-700" href={SAMPLE_APKG}>
                Download .apkg (Anki)
              </Button>
              <Button variant="outline" className="w-full" href={SAMPLE_ZIP}>
                Download .zip (backup)
              </Button>
              <p className="text-xs text-slate-500">Having trouble? Email <a className="underline" href="mailto:hello@vetdecks.com">hello@vetdecks.com</a>.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-2xl bg-sky-600 text-white grid place-items-center font-bold">VD</div>
              <span className="font-semibold">VetDecks</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Questions tailored directly from the most used veterinary textbooks — from basic concepts to higher-level thinking, with diagrams included.</p>
          </div>
          <div>
            <p className="font-medium">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-sky-700">About</a></li>
              <li><a href="#" className="hover:text-sky-700">Contact</a></li>
              <li><a href="#" className="hover:text-sky-700">Privacy</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#faq" className="hover:text-sky-700">FAQ</a></li>
              <li><a href="#showcase" className="hover:text-sky-700">Subjects</a></li>
              <li><a href="#pricing" className="hover:text-sky-700">Pricing</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Stay in touch</p>
            <div className="mt-3 flex items-center gap-2">
              <Button variant="outline" size="sm" href="mailto:hello@vetdecks.com"><Mail className="h-4 w-4"/> Email</Button>
              <Button variant="outline" size="sm" href="#"><Github className="h-4 w-4"/> GitHub</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} VetDecks. All rights reserved.</div>
      </div>
    </footer>
  );
}