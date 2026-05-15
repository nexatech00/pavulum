import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import books from "@/assets/books.jpg";
import apparel from "@/assets/apparel.jpg";
import journal from "@/assets/journal.jpg";
import course from "@/assets/course.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Pavulum" },
      { name: "description", content: "The full Pavulum catalogue: books, courses, apparel, and objects for an intentional life." },
      { property: "og:title", content: "Shop — Pavulum" },
      { property: "og:description", content: "Books, courses, apparel and objects for an intentional life." },
    ],
  }),
  component: ShopPage,
});

const items = [
  { tag: "Reading", title: "The Library", img: books, count: "24 titles" },
  { tag: "Learning", title: "Courses", img: course, count: "8 cohorts" },
  { tag: "Wear", title: "Apparel", img: apparel, count: "12 pieces" },
  { tag: "Write", title: "Journals & Goods", img: journal, count: "15 objects" },
];

function ShopPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pt-48">
        <p className="eyebrow">The Shop</p>
        <h1 className="mt-3 max-w-3xl text-balance text-5xl md:text-7xl">A small, deliberate catalogue.</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Every object earns its place. Browse the full collection — chosen for the way it changes the temperature of a room.
        </p>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {items.map((c) => (
            <a key={c.title} href="#" className="group block overflow-hidden bg-secondary">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="img-cinematic h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]" />
              </div>
              <div className="flex items-baseline justify-between p-5">
                <div>
                  <p className="eyebrow">{c.tag}</p>
                  <h3 className="serif mt-1 text-2xl">{c.title}</h3>
                </div>
                <span className="text-xs text-muted-foreground">{c.count}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
