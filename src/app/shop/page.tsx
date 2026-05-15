import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

import books from "@/assets/books.jpg";
import apparel from "@/assets/apparel.jpg";
import journal from "@/assets/journal.jpg";
import course from "@/assets/course.jpg";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "The full Pavulum catalogue: books, courses, apparel, and objects for an intentional life.",
  openGraph: {
    title: "Shop — Pavulum",
    description: "Books, courses, apparel and objects for an intentional life.",
  },
};

const items = [
  { tag: "Reading", title: "The Library", img: books, count: "24 titles", href: "/books" },
  { tag: "Learning", title: "Courses", img: course, count: "8 cohorts", href: "/courses" },
  { tag: "Wear", title: "Apparel", img: apparel, count: "12 pieces", href: "#" },
  { tag: "Write", title: "Journals & Goods", img: journal, count: "15 objects", href: "#" },
];

export default function ShopPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pt-48">
        <p className="eyebrow">The Shop</p>
        <h1 className="mt-3 max-w-3xl text-balance text-5xl md:text-7xl">
          A small, deliberate catalogue.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Every object earns its place. Browse the full collection — chosen for the way it changes
          the temperature of a room.
        </p>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group block overflow-hidden bg-secondary"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="img-cinematic object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="flex items-baseline justify-between p-5">
                <div>
                  <p className="eyebrow">{c.tag}</p>
                  <h3 className="serif mt-1 text-2xl">{c.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground">{c.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
