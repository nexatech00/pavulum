import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";

export const metadata: Metadata = {
  title: "Books",
  description:
    "A small, returning library — books on attention, love, parenting, and the examined life.",
  openGraph: {
    title: "Books — Pavulum",
    description: "Books we return to, gathered by Pavulum.",
  },
};

const library = [
  { title: "The Quiet Mind", author: "M. Aldea", price: "$32", tag: "New", img: book1 },
  { title: "On Tenderness", author: "I. Rauch", price: "$28", tag: "Bestseller", img: book2 },
  { title: "Slow Hours", author: "J. Vermeer", price: "$36", tag: "Limited", img: book3 },
  { title: "The Examined Self", author: "A. Holt", price: "$30", tag: "New", img: book1 },
  { title: "On Loving Well", author: "C. Marin", price: "$26", tag: "—", img: book2 },
  { title: "Rooms That Taught Us", author: "E. Sato", price: "$34", tag: "Limited", img: book3 },
];

export default function BooksPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pt-48">
        <p className="eyebrow">The Library</p>
        <h1 className="mt-3 max-w-3xl text-balance text-5xl md:text-7xl">Books we return to.</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Each title is chosen for the way it changes the temperature of a room — slower thinking,
          warmer attention.
        </p>
        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
          {library.map((b) => (
            <article key={b.title} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  className="img-cinematic object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {b.tag !== "—" && (
                  <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-charcoal">
                    {b.tag}
                  </span>
                )}
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="serif text-2xl leading-tight">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.author}</p>
                </div>
                <span className="serif text-xl text-espresso">{b.price}</span>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] underline-grow">
                Add to cart <ArrowRight className="h-3 w-3" />
              </button>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
