'use client';
import ProductShowcase from "@/app/components/layout/home/ProductDemo";
import PrimaryCTA from "@/app/components/ui/buttons/PrimaryCTA";
import SecondaryCTA from "@/app/components/ui/buttons/SecondaryCTA";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex py-8 px-48 items-center min-h-fit h-screen">
      <header className="w-2xl flex flex-col gap-2">
        <h1 className="text-6xl font-primary leading-tight">Free, Real-World API Security Training</h1>
        <h2 className="text-slate-400 text-4xl">
          Free courses from industry experts—plus tools to secure your APIs in production
        </h2>
        <div className="mt-2 flex items-center gap-4">
          <PrimaryCTA>Start Learning Now!</PrimaryCTA>
          <SecondaryCTA>Free API Scans</SecondaryCTA>
        </div>
        <Link 
          href="#content-tabs" 
          className="mt-12 flex flex-col items-center gap-1 text-xl text-slate-400 hover:text-slate-200 
            transition-all duration-300 ease-in-out">
          Explore Features
          <ArrowDown size={24} className="animate-bounce" />
        </Link>
      </header>
      <ProductShowcase />
    </section>
  );
}