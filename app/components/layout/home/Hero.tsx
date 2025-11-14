'use client';
import ProductShowcase from "@/app/components/layout/home/ProductDemo";

export default function Hero() {
  return (
    <section className="flex py-8 px-48 items-center min-h-fit h-screen">
      <header className="w-2xl flex flex-col gap-2">
        <h1 className="text-slate-300 text-6xl">Free, Real-World API Security Training</h1>
        <h2 className="text-slate-400 text-4xl">
          Free courses from industry experts—plus tools to secure your APIs in production
        </h2>
      </header>
      <ProductShowcase />
    </section>
  );
}