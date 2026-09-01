"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Check, Star, X } from "lucide-react";

export default function Page() {
  // --- DATA -----------------------------------------------------------------

  const plumbsSections = [
    { title: "01 – Systemic Antihistamines", url: "https://vetdecks.gumroad.com/l/antihistamines", desc: "H1 inverse agonists, CNS penetration & mast cell stabilization" },
    { title: "02 – Central Nervous System", url: "https://vetdecks.gumroad.com/l/CNS", desc: "Sedatives, anesthetics, anticonvulsants & neuroleptanalgesia" },
    { title: "03 – Skeletal Muscle Relaxants", url: "https://vetdecks.gumroad.com/l/muscle-skeletal-relaxants", desc: "Spasmolytics, malignant hyperthermia & neuromuscular blockers" },
    { title: "04 – Euthanasia Agents", url: "https://vetdecks.gumroad.com/l/euthanasia-agents", desc: "AVMA humane staging & oxybarbiturate pharmacology" },
    { title: "05 – Cardiovascular Agents", url: "https://vetdecks.gumroad.com/l/cardiovascular-agents", desc: "Inotropes, antiarrhythmics, ACE inhibitors & vasodilators" },
    { title: "06 – Respiratory Agents", url: "https://vetdecks.gumroad.com/l/respiratory-agents", desc: "Beta-2 bronchodilators, inhaled steroids & antitussives" },
    { title: "07 – Renal & Urinary Tract Agents", url: "https://vetdecks.gumroad.com/l/renal-urinary-agents", desc: "Diuretics, urethral tone modulators & USMI therapies" },
    { title: "08 – GIT & Hepatic Agents", url: "https://vetdecks.gumroad.com/l/GIT-hepatic-agnets", desc: "Antiemetics, PPIs, motility agents & hepatoprotectants" },
    { title: "09 – Hormones & Reproduction", url: "https://vetdecks.gumroad.com/l/hormones-reproduction-agents", desc: "Insulins, thyroid/adrenal regulators & reproductive steroids" },
    { title: "10 – Anti-infective Agents", url: "https://vetdecks.gumroad.com/l/antiinfective-agents", desc: "Antibacterials, antifungals, antivirals & antiparasitics" },
    { title: "11 – Antineoplastic Agents", url: "https://vetdecks.gumroad.com/l/antineoplastic-agents", desc: "Alkylators, RTK inhibitors, antimetabolites & vesicant safety" },
    { title: "12 – Immunomodulators", url: "https://vetdecks.gumroad.com/l/immunomodulators-immunostimulants", desc: "Calcineurin inhibitors, JAK inhibitors & monoclonal antibodies" },
    { title: "13 – Antidotes & Reversal Agents", url: "https://vetdecks.gumroad.com/l/antidotes-reversal-agents", desc: "Targeted receptor antagonists, chelators & lipid sink rescue" },
    { title: "14 – Bone & Joint Agents", url: "https://vetdecks.gumroad.com/l/bone-joints", desc: "Chondroprotectants, bisphosphonates & joint therapies" },
    { title: "15 – Vitamins, Minerals & Nutrients", url: "https://vetdecks.gumroad.com/l/vitamins-minerals-nutrients", desc: "Electrolyte replenishers, hematinics & parenteral additives" },
    { title: "16 – Cholinergic & Autonomic Agents", url: "https://vetdecks.gumroad.com/l/cholinergic-autonomic-agents", desc: "Parasympathomimetics, anticholinergics & autonomic modulators" },
    { title: "17 – Acidifying & Alkalinizing Agents", url: "https://vetdecks.gumroad.com/l/acidifying-alkalinizing-agents", desc: "Systemic/urinary pH modifiers & urolithiasis management" },
    { title: "18 – Other Systemic Agents", url: "https://vetdecks.gumroad.com/l/other-systemic-agents", desc: "Miscellaneous systemic therapeutics & specialized compendiums" },
  ];

  const plumbsFull = {
    title: "Plumb's Veterinary Drug Handbook — Full Series (Sections 1–18)",
    url: "https://vetdecks.gumroad.com/l/antihistamines", // Update if full bundle slug is created
  };

  const dyceChapters = [
    { title: "Ch. 1 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-1-dyce" },
    { title: "Ch. 2 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-2-dyce" },
    { title: "Ch. 3 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-3-dyce" },
    { title: "Ch. 4 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-4-dyce" },
    { title: "Ch. 5 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-5-dyce" },
    { title: "Ch. 6 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-6-dyce" },
    { title: "Ch. 7 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-7-dyce" },
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
    { title: "Ch. 32 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-32-dyce" },
    { title: "Ch. 33 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-33-dyce" },
    { title: "Ch. 34 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-34-dyce" },
    { title: "Ch. 35 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-35-dyce" },
    { title: "Ch. 36 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-36-dyce" },
    { title: "Ch. 37 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-37-dyce" },
    { title: "Ch. 38 – Dyce", url: "https://vetdecks.gumroad.com/l/ch-38-dyce" },
  ];

  const dyceFull = {
    title: "Dyce Anatomy — full textbook (Ch. 1–38)",
    url: "https://vetdecks.gumroad.com/l/dyce1-38",
  };

  const wheaterParts = [
    { title: "Part 1 – Wheater", url: "https://vetdecks.gumroad.com/l/part-1-wheater" },
    { title: "Part 2 – Wheater", url: "https://vetdecks.gumroad.com/l/Part-2-wheater" },
    { title: "Part 3 – Wheater", url: "https://vetdecks.gumroad.com/l/Part-3-wheater" },
  ];

  const wheaterFull = {
    title: "Wheater’s Functional Histology — full (Parts 1–3)",
    url: "https://vetdecks.gumroad.com/l/Part-1-3-wheater",
  };

  const cunninghamSections = [
    { title: "Section 1 – Cunningham", url: "https://vetdecks.gumroad.com/l/section-1-cunningham" },
    { title: "Section 2 – Cunningham", url: "https://vetdecks.gumroad.com/l/section-2-cunningham" },
    { title: "Section 3 – Cunningham", url: "https://vetdecks.gumroad.com/l/section-3-cunningham" },
    { title: "Section 4 – Cunningham", url: "https://vetdecks.gumroad.com/l/section-4-cunningham" },
    { title: "Section 5 – Cunningham", url: "https://vetdecks.gumroad.com/l/section-5-cunningham" },
    { title: "Section 6 – Cunningham", url: "https://vetdecks.gumroad.com/l/section-6-cunningham" },
    { title: "Section 7 – Cunningham", url: "https://vetdecks.gumroad.com/l/section-7-cunningham" },
    { title: "Section 8 – Cunningham", url: "https://vetdecks.gumroad.com/l/section-8-cunningham" },
    { title: "Section 9 – Cunningham", url: "https://vetdecks.gumroad.com/l/section-9-cunningham" },
    { title: "Section 10 – Cunningham", url: "https://vetdecks.gumroad.com/l/section-10-cunningham" },
  ];

  const cunninghamFull = {
    title: "Cunningham’s Veterinary Physiology — full textbook (Sections 1–10)",
    url: "https://vetdecks.gumroad.com/l/sections-1-10-cunningham",
  };

  const millerChapters = [
    { title: "Ch. 1 – Miller", url: "https://vetdecks.gumroad.com/l/ch-1-miller" },
    { title: "Ch. 2 – Miller", url: "https://vetdecks.gumroad.com/l/ch-2-miller" },
    { title: "Ch. 3 – Miller", url: "https://vetdecks.gumroad.com/l/ch-3-miller" },
    { title: "Ch. 4 – Miller", url: "https://vetdecks.gumroad.com/l/ch-4-miller" },
    { title: "Ch. 5 – Miller", url: "https://vetdecks.gumroad.com/l/ch-5-miller" },
    { title: "Ch. 6 – Miller", url: "https://vetdecks.gumroad.com/l/ch-6-miller" },
    { title: "Ch. 7 – Miller", url: "https://vetdecks.gumroad.com/l/ch-7-miller" },
  ];

  const zacharySections = [
    { title: "Section 1 – Zachary", url: "https://vetdecks.gumroad.com/l/section-1-zachary" },
    { title: "Section 2 – Zachary", url: "https://vetdecks.gumroad.com/l/section-2-zachary" },
    { title: "Section 3 – Zachary", url: "https://vetdecks.gumroad.com/l/Section-3-zachary" },
  ];

  const zacharyFull = {
    title: "Zachary — full bundle (Sections 1–3)",
    url: "https://vetdecks.gumroad.com/l/Section-1-3-zachary",
  };

  const dunlopChapters = [
    { title: "Ch. 1 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-1-dunlop" },
    { title: "Ch. 2 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-2-dunlop" },
    { title: "Ch. 3 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-3-dunlop" },
    { title: "Ch. 4 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-4-dunlop" },
    { title: "Ch. 5 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-5-dunlop" },
    { title: "Ch. 6 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-6-dunlop" },
    { title: "Ch. 7 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-7-dunlop" },
    { title: "Ch. 8 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-8-dunlop" },
    { title: "Ch. 9 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-9-dunlop" },
    { title: "Ch. 10 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-10-dunlop" },
    { title: "Ch. 11 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-11-dunlop" },
    { title: "Ch. 12 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-12-dunlop" },
    { title: "Ch. 13 – Dunlop", url: "https://vetdecks.gumroad.com/l/ch-13-dunlop" },
  ];

  const dunlopFull = {
    title: "Dunlop — full bundle (Ch. 1–13)",
    url: "https://vetdecks.gumroad.com/l/ch-1-13-dunlop",
  };

  const fossumChapters = [
    { title: "Ch. 1 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-1-fossum" },
    { title: "Ch. 2 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-2-fossum" },
    { title: "Ch. 3 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-3-fossum" },
    { title: "Ch. 4 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-4-fossum" },
    { title: "Ch. 5 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-5-fossum" },
    { title: "Ch. 6 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-6-fossum" },
    { title: "Ch. 7 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-7-fossum" },
    { title: "Ch. 8 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-8-fossum" },
    { title: "Ch. 9 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-9-fossum" },
    { title: "Ch. 10 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-10-fossum" },
    { title: "Ch. 11 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-11-fossum" },
    { title: "Ch. 12 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-12-fossum" },
    { title: "Ch. 13 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-13-fossum" },
    { title: "Ch. 14 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-14-fossum" },
    { title: "Ch. 15 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-15-fossum" },
    { title: "Ch. 16 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-16-fossum" },
    { title: "Ch. 17 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-17-fossum" },
    { title: "Ch. 18 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-18-fossum" },
    { title: "Ch. 19 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-19-fossum" },
    { title: "Ch. 20 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-20-fossum" },
    { title: "Ch. 21 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-21-fossum" },
    { title: "Ch. 22 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-22-fossum" },
    { title: "Ch. 23 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-23-fossum" },
    { title: "Ch. 24 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-24-fossum" },
    { title: "Ch. 25 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-25-fossum" },
    { title: "Ch. 26 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-26-fossum" },
    { title: "Ch. 27 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-27-fossum" },
    { title: "Ch. 28 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-28-fossum" },
    { title: "Ch. 29 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-29-fossum" },
    { title: "Ch. 30–31 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-30-31-fossum" },
    { title: "Ch. 32 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-32-fossum" },
    { title: "Ch. 33 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-33-fossum" },
    { title: "Ch. 34 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-34-fossum" },
    { title: "Ch. 35 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-35-fossum" },
    { title: "Ch. 36 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-36-fossum" },
    { title: "Ch. 37 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-37-fossum" },
    { title: "Ch. 38 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-38-fossum" },
    { title: "Ch. 39 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-39-fossum" },
    { title: "Ch. 40 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-40-fossum" },
    { title: "Ch. 41 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-41-fossum" },
    { title: "Ch. 42 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-42-fossum" },
    { title: "Ch. 43 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-43-fossum" },
    { title: "Ch. 44 – Fossum", url: "https://vetdecks.gumroad.com/l/ch-44-fossum" },
  ];

  const fossumFull = {
    title: "Fossum’s Small Animal Surgery — full textbook (Ch. 1–44)",
    url: "https://vetdecks.gumroad.com/l/ch-1-44-fossum",
  };

  const freeStarters = [
    {
      label: "Dyce — Ch. 3 (Free)",
      sub: "Start anatomy with a real chapter deck",
      url: "https://vetdecks.gumroad.com/l/ch-3-dyce",
    },
    {
      label: "Wheater — Part 1 (Free)",
      sub: "Histology starter set",
      url: "https://vetdecks.gumroad.com/l/part-1-wheater",
    },
    {
      label: "Cunningham — Section 2 (Free)",
      sub: "Physiology starter set",
      url: "https://vetdecks.gumroad.com/l/section-2-cunningham",
    },
    {
      label: "Dunlop — Ch. 4 (Free)",
      sub: "Pathophysiology starter deck",
      url: "https://vetdecks.gumroad.com/l/ch-4-dunlop",
    },
  ];

  const [show2026Popup, setShow2026Popup] = useState(false);

  useEffect(() => {
    try {
      const key = "vetdecks_2026_popup_seen";
      const seen = window.localStorage.getItem(key);
      if (!seen) {
        setShow2026Popup(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const close2026Popup = () => {
    setShow2026Popup(false);
    try {
      window.localStorage.setItem("vetdecks_2026_popup_seen", "true");
    } catch {
      // ignore
    }
  };

  const fullOptionBtnClass =
    "w-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50";

  return (
    <main className="min-h-screen text-slate-900">
      {show2026Popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40" onClick={close2026Popup} />
          <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between gap-4 p-5 border-b">
              <div>
                <div className="text-sm text-slate-500">VetDecks</div>
                <h3 className="text-xl font-bold">Happy & productive 2026 🎉</h3>
              </div>
              <button
                onClick={close2026Popup}
                className="p-2 rounded-lg hover:bg-slate-100"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <p className="text-slate-700">Wishing you a happy and productive 2026.</p>
              <p className="text-slate-700">
                Imagine how much more productive 2026 could be with ready-made Anki decks mapped directly to your veterinary textbooks and drug guides.
              </p>
              <div className="pt-2">
                <Button href="#free-starters" className="w-full">
                  Grab the free starter decks
                </Button>
              </div>
              <p className="text-xs text-slate-500">(You’ll only see this once.)</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-center text-sm py-2 px-4">
        VetDecks is live 🎉 Plumb’s Veterinary Drug Handbook (18 classes) is fully released!
      </div>

      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">VetDecks</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">Features</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#subjects" className="hover:opacity-80">Subjects</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#custom" className="hover:opacity-80">Custom decks</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" href="#pricing">Get decks</Button>
            <Button href="#free-starters" className="bg-sky-600 hover:bg-sky-700">
              Get free starter decks
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Anki decks for veterinary students —{" "}
              <span className="text-sky-700">crafted from the most-used textbooks</span>
            </h1>
            <p className="mt-5 text-lg text-slate-700">
              VetDecks turns dense chapters and clinical drug handbooks into high-yield, exam-ready flashcards: fundamentals, species differences,
              toxicities, and clinical reasoning — so you learn faster and retain longer.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#subjects">Browse decks</Button>
              <Button variant="outline" href="#free-starters">Download free starter decks</Button>
            </div>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Mapped directly to Plumb’s, Fossum, Dyce & Cunningham</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Tagged by species differences, mechanisms & clinical emergencies</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-sky-600" /> Copyright-safe, text-first Anki cards ready for instant import</li>
            </ul>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Sample Deck Preview (Pharmacology)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border p-4 bg-slate-50/50">
                <div className="text-xs uppercase font-semibold text-slate-500 mb-2">Front</div>
                <p className="text-slate-900 font-medium">
                  Why is systemic acyclovir contraindicated in feline patients with FHV-1, and what is the primary dose-limiting toxicity of enrofloxacin in cats?
                </p>
              </div>
              <div className="rounded-xl border p-4 bg-slate-50/50">
                <div className="text-xs uppercase font-semibold text-slate-500 mb-2">Back</div>
                <ul className="space-y-2 text-sm text-slate-800">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /> <strong>Acyclovir:</strong> Poor feline bioavailability; causes fatal bone marrow suppression and hepatic/renal necrosis.</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /> <strong>Enrofloxacin:</strong> Acute retinal degeneration and permanent blindness secondary to defective feline ABCG2 retinal transport.</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" /> <strong>Tags:</strong> <code>species_difference</code> <code>toxicology</code> <code>plumbs_pharmacology</code></li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="free-starters" className="py-16 bg-white border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Start free — first decks for each book</h2>
              <p className="text-slate-700 mt-2">
                Download a free starter deck for your current textbook. If you like the format, grab the next chapters instantly.
              </p>
            </div>
            <div className="text-sm text-slate-500">No email required. Instant Gumroad download.</div>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {freeStarters.map((item) => (
              <Card key={item.url} className="border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.label}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">{item.sub}</p>
                  <Button href={item.url} className="w-full">Download free</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-16 border-t bg-white scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Study smarter, retain longer</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              ["Built for vet curricula", "Organized strictly by course, species differences, and standard compendiums."],
              ["Exam-style prompts", "Higher-order clinical reasoning and active recall cards in every deck."],
              ["Buy only what you need", "Single chapters, therapeutic drug classes, or full textbook bundles."],
              ["Constantly expanding", "Covering anatomy, physiology, surgery, pathology, and now full pharmacology."],
            ].map(([title, body]) => (
              <Card key={title}>
                <CardHeader><CardTitle className="text-lg">{title}</CardTitle></CardHeader>
                <CardContent className="text-slate-700">{body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-slate-50 border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Simple, student-friendly pricing</h2>
          <p className="text-center text-slate-700 mt-2">
            Start with a free starter deck, then buy only what you need. Most decks range from <strong>$0–$10</strong> per chapter/section.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader><CardTitle>Single chapter / section</CardTitle></CardHeader>
              <CardContent>
                <div className="text-5xl font-extrabold">$0–$10 <span className="text-base font-medium">USD/EUR*</span></div>
                <p className="mt-2 text-slate-600 text-sm">*Final currency/price is set in Gumroad.</p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> One chapter / drug class</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Instant Anki .apkg download</li>
                  <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Keep it forever with lifetime updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Full textbook bundles</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <p className="text-slate-700 text-sm">Buy everything for that textbook or subject in one click:</p>

                <Button href={plumbsFull.url} variant="outline" className={fullOptionBtnClass}>{plumbsFull.title}</Button>
                <Button href={dyceFull.url} variant="outline" className={fullOptionBtnClass}>{dyceFull.title}</Button>
                <Button href={fossumFull.url} variant="outline" className={fullOptionBtnClass}>{fossumFull.title}</Button>
                <Button href={cunninghamFull.url} variant="outline" className={fullOptionBtnClass}>{cunninghamFull.title}</Button>
                <Button href={wheaterFull.url} variant="outline" className={fullOptionBtnClass}>{wheaterFull.title}</Button>
                <Button href={zacharyFull.url} variant="outline" className={fullOptionBtnClass}>{zacharyFull.title}</Button>
                <Button href={dunlopFull.url} variant="outline" className={fullOptionBtnClass}>{dunlopFull.title}</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="subjects" className="py-16 bg-white border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Subjects & deck lines</h2>
          <p className="text-slate-700">Open the textbook or subject you’re currently studying to grab your deck.</p>

          {/* Plumb's Pharmacology */}
          <details className="border rounded-xl overflow-hidden bg-slate-50" open>
            <summary className="cursor-pointer px-4 py-3 flex items-center justify-between gap-4 font-semibold text-sky-900 bg-sky-50/50 border-b">
              <span>Plumb’s Veterinary Drug Handbook (Therapeutic Classes 01–18)</span>
              <span className="text-sm text-sky-700">18 Decks Available</span>
            </summary>
            <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {plumbsSections.map((sec) => (
                <Card key={sec.url} className="flex flex-col justify-between">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm leading-snug">{sec.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-xs text-slate-600 min-h-[32px]">{sec.desc}</p>
                    <Button href={sec.url} className="w-full bg-sky-700 hover:bg-sky-800">
                      Get this deck
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </details>

          {/* Fossum Small Animal Surgery */}
          <details className="border rounded-xl overflow-hidden bg-slate-50">
            <summary className="cursor-pointer px-4 py-3 flex items-center justify-between gap-4">
              <span className="font-semibold">Fossum’s Small Animal Surgery (Ch. 1–44)</span>
              <span className="text-sm text-slate-500">Click to expand</span>
            </summary>
            <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {fossumChapters.map((ch) => (
                <Card key={ch.url}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">{ch.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button href={ch.url} className="w-full">Get this deck</Button>
                    {ch.url.includes("ch-1-fossum") && (
                      <div className="text-xs text-slate-600">Chapter 1: Principles of surgical asepsis</div>
                    )}
                    {ch.url.includes("ch-30-31-fossum") && (
                      <div className="text-xs text-slate-600">Combined deck: Chapters 30–31</div>
                    )}
                  </CardContent>
                </Card>
              ))}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{fossumFull.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button href={fossumFull.url} className="w-full">Get full textbook</Button>
                </CardContent>
              </Card>
            </div>
          </details>

          {/* Dyce Anatomy */}
          <details className="border rounded-xl overflow-hidden bg-slate-50">
            <summary className="cursor-pointer px-4 py-3 flex items-center justify-between gap-4">
              <span className="font-semibold">Dyce, Sack & Wensing’s Textbook of Veterinary Anatomy (Ch. 1–38)</span>
              <span className="text-sm text-slate-500">Click to expand</span>
            </summary>
            <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {dyceChapters.map((ch) => (
                <Card key={ch.url}>
                  <CardHeader className="pb-2"><CardTitle className="text-sm">{ch.title}</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    <Button href={ch.url} className="w-full">Get this deck</Button>
                    {ch.url.includes("ch-3-dyce") && <div className="text-xs text-emerald-700">Free starter deck</div>}
                  </CardContent>
                </Card>
              ))}
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-sm">{dyceFull.title}</CardTitle></CardHeader>
                <CardContent><Button href={dyceFull.url} className="w-full">Get full textbook</Button></CardContent>
              </Card>
            </div>
          </details>

          {/* Cunningham Physiology */}
          <details className="border rounded-xl overflow-hidden bg-slate-50">
            <summary className="cursor-pointer px-4 py-3 flex items-center justify-between gap-4">
              <span className="font-semibold">Cunningham’s Veterinary Physiology (Sections 1–10)</span>
              <span className="text-sm text-slate-500">Click to expand</span>
            </summary>
            <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cunninghamSections.map((sec) => (
                <Card key={sec.url}>
                  <CardHeader className="pb-2"><CardTitle className="text-sm">{sec.title}</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    <Button href={sec.url} className="w-full">Get this deck</Button>
                    {sec.url.includes("section-2-cunningham") && <div className="text-xs text-emerald-700">Free starter deck</div>}
                  </CardContent>
                </Card>
              ))}
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-sm">{cunninghamFull.title}</CardTitle></CardHeader>
                <CardContent><Button href={cunninghamFull.url} className="w-full">Get full textbook</Button></CardContent>
              </Card>
            </div>
          </details>

          {/* Wheater Histology */}
          <details className="border rounded-xl overflow-hidden bg-slate-50">
            <summary className="cursor-pointer px-4 py-3 flex items-center justify-between gap-4">
              <span className="font-semibold">Wheater’s Functional Histology (Parts 1–3)</span>
              <span className="text-sm text-slate-500">Click to expand</span>
            </summary>
            <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {wheaterParts.map((part) => (
                <Card key={part.url}>
                  <CardHeader className="pb-2"><CardTitle className="text-sm">{part.title}</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    <Button href={part.url} className="w-full">Get this deck</Button>
                    {part.url.includes("part-1-wheater") && <div className="text-xs text-emerald-700">Free starter deck</div>}
                  </CardContent>
                </Card>
              ))}
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-sm">{wheaterFull.title}</CardTitle></CardHeader>
                <CardContent><Button href={wheaterFull.url} className="w-full">Get full textbook</Button></CardContent>
              </Card>
            </div>
          </details>

          {/* Zachary Pathology */}
          <details className="border rounded-xl overflow-hidden bg-slate-50">
            <summary className="cursor-pointer px-4 py-3 flex items-center justify-between gap-4">
              <span className="font-semibold">Zachary’s Pathologic Basis of Veterinary Disease (Sections 1–3)</span>
              <span className="text-sm text-slate-500">Click to expand</span>
            </summary>
            <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {zacharySections.map((sec) => (
                <Card key={sec.url}>
                  <CardHeader className="pb-2"><CardTitle className="text-sm">{sec.title}</CardTitle></CardHeader>
                  <CardContent><Button href={sec.url} className="w-full">Get this deck</Button></CardContent>
                </Card>
              ))}
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-sm">{zacharyFull.title}</CardTitle></CardHeader>
                <CardContent><Button href={zacharyFull.url} className="w-full">Get full bundle</Button></CardContent>
              </Card>
            </div>
          </details>

          {/* Dunlop Pathophysiology */}
          <details className="border rounded-xl overflow-hidden bg-slate-50">
            <summary className="cursor-pointer px-4 py-3 flex items-center justify-between gap-4">
              <span className="font-semibold">Dunlop’s Veterinary Pathophysiology (Ch. 1–13)</span>
              <span className="text-sm text-slate-500">Click to expand</span>
            </summary>
            <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {dunlopChapters.map((ch) => (
                <Card key={ch.url}>
                  <CardHeader className="pb-2"><CardTitle className="text-sm">{ch.title}</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    <Button href={ch.url} className="w-full">Get this deck</Button>
                    {ch.url.includes("ch-4-dunlop") && <div className="text-xs text-emerald-700">Free starter deck</div>}
                    {ch.url.includes("ch-13-dunlop") && <div className="text-xs text-slate-600">Chapter 13: Homeostatic & toxic disorders</div>}
                  </CardContent>
                </Card>
              ))}
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-sm">{dunlopFull.title}</CardTitle></CardHeader>
                <CardContent><Button href={dunlopFull.url} className="w-full">Get full bundle</Button></CardContent>
              </Card>
            </div>
          </details>

          {/* Miller Canine Anatomy */}
          <details className="border rounded-xl overflow-hidden bg-slate-50">
            <summary className="cursor-pointer px-4 py-3 flex items-center justify-between gap-4">
              <span className="font-semibold">Miller’s Anatomy of the Dog (Ch. 1–7)</span>
              <span className="text-sm text-slate-500">Click to expand</span>
            </summary>
            <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {millerChapters.map((ch) => (
                <Card key={ch.url}>
                  <CardHeader className="pb-2"><CardTitle className="text-sm">{ch.title}</CardTitle></CardHeader>
                  <CardContent><Button href={ch.url} className="w-full">Get this deck</Button></CardContent>
                </Card>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section id="about" className="py-16 bg-white border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">About me</h2>
              <p className="mt-3 text-slate-700">
                Hey 👋 I’m a vet student who knows how overwhelming vet med can be. Between Dyce, Cunningham, Plumb&apos;s, and endless lecture slides, I felt like I was drowning. To keep up, I built my own high-yield Anki systems — and they completely transformed my grades.
              </p>
              <p className="mt-3 text-slate-700">
                My GPA jumped (ended up at <strong>4.51</strong> 🐾📚), and for the first time I actually felt confident walking into oral and written clinical exams. That’s how <strong>VetDecks</strong> was born.
              </p>
              <p className="mt-3 text-slate-700">
                I’ve wanted to be a vet since I was <strong>3</strong>. I study at the <strong>University of Veterinary Medicine Budapest</strong>, I’m currently a <strong>4th year</strong>, and I’m aiming for <strong>equine medicine</strong> or mixed clinical practice.
              </p>
              <p className="mt-3 text-slate-700">
                VetDecks turns the heaviest textbooks into ready-made, high-yield decks — packed with key mechanisms, species differences, and higher-order diagnostic questions — to save you hundreds of hours of card-making.
              </p>
            </div>

            <Card className="border-slate-200 overflow-hidden">
              <div className="relative w-full h-72">
                <Image
                  src="/about-me.jpeg"
                  alt="VetDecks founder with a donkey"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <CardContent className="pt-5 space-y-2">
                <div className="text-sm text-slate-500">Founder</div>
                <div className="text-lg font-semibold">Building VetDecks from real vet student life 🐾</div>
                <p className="text-sm text-slate-700">
                  If vet school feels overwhelming, you’re not alone — that’s exactly why I built these decks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="custom" className="py-16 bg-white border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Custom decks (made from your materials)</h2>
              <p className="mt-3 text-slate-700">
                Want Anki decks made from your lecture slides, faculty handouts, or digital notes? Send me your material and I’ll format it into structured, exam-tested cards for you.
              </p>
              <ul className="mt-5 space-y-2 text-slate-700">
                <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> You send the material (PDF, slides, notes)</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> I review scope + clinical complexity</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> You get a quote + turnaround timeline</li>
                <li className="flex gap-2"><Check className="h-5 w-5 text-emerald-600" /> Delivered as an import-ready Anki .apkg</li>
              </ul>
            </div>

            <Card className="border-slate-200">
              <CardHeader><CardTitle>Request a quote</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <p className="text-slate-700 text-sm">
                  Email <strong>info@vetdecks.com</strong> with:
                </p>
                <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Course + topic</li>
                  <li>Material type (slides/notes/PDF)</li>
                  <li>Rough size (pages or slide count)</li>
                  <li>Deadline (if any)</li>
                </ul>
                <Button
                  href="mailto:info@vetdecks.com?subject=Custom%20deck%20request%20(quote)&body=Hi%20VetDecks%2C%0A%0ACourse%3A%20%0ATopic%3A%20%0AMaterials%3A%20%0ASize%20(pages%2Fslides)%3A%20%0ADeadline%3A%20%0A%0AThanks!"
                  className="w-full"
                >
                  Email for a quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-slate-50 border-t scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently asked questions</h2>
          <div className="mt-8 space-y-4 max-w-3xl mx-auto">
            <Card><CardContent className="pt-6"><strong>Do I need Anki?</strong><br />Yes — downloads are standard <code>.apkg</code> files ready for instant import on desktop, iOS, or Android.</CardContent></Card>
            <Card><CardContent className="pt-6"><strong>Are diagrams included?</strong><br />Decks are text-first to remain copyright-safe and emphasize core mechanisms, receptor targets, and clinical dosages.</CardContent></Card>
            <Card><CardContent className="pt-6"><strong>Can I request another textbook?</strong><br />Yes — email <a className="underline text-sky-700 font-medium" href="mailto:info@vetdecks.com">info@vetdecks.com</a> with the book title and required chapters.</CardContent></Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">What students are saying...</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Clearer than reading the reference manual for rapid pre-exam cramming.",
              "The species differences and toxicity tags alone saved me on my pharmacology midterms.",
              "Super easy to filter — I can jump straight to autonomic drugs or GI motility without sorting through huge decks.",
            ].map((quote) => (
              <Card key={quote}>
                <CardContent className="pt-6 text-slate-800">
                  <Star className="inline h-5 w-5 mr-2 text-amber-500 fill-amber-500" />
                  {quote}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-50 border-t">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold">VetDecks</div>
            <p className="text-slate-600 mt-2">
              Textbook-aligned Anki decks for veterinary students.
            </p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="mailto:info@vetdecks.com" className="hover:underline">Contact</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#custom" className="hover:underline">Custom decks</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Stay in touch</div>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="mailto:info@vetdecks.com" className="hover:underline">Email</a></li>
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