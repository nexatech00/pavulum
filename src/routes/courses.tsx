import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Pavulum" },
      { name: "description", content: "Long-form, cohort-based courses on love, attention, parenting, and the work of becoming." },
      { property: "og:title", content: "Courses — Pavulum" },
      { property: "og:description", content: "Cohort-based courses on the things that quietly shape a life." },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  { num: "01", title: "On Loving Well", topic: "Relationships", weeks: "6 weeks" },
  { num: "02", title: "Raising Quiet Children", topic: "Parenting", weeks: "4 weeks" },
  { num: "03", title: "The Examined Self", topic: "Self-awareness", weeks: "8 weeks" },
  { num: "04", title: "Letters to a Younger Reader", topic: "Writing", weeks: "5 weeks" },
  { num: "05", title: "The Discipline of Slowness", topic: "Practice", weeks: "6 weeks" },
];

function CoursesPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pt-48">
        <p className="eyebrow">Courses</p>
        <h1 className="mt-3 max-w-3xl text-balance text-5xl md:text-7xl">Learning that asks something of you.</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Long-form, cohort-based courses on love, attention, parenting, and the work of becoming.
        </p>
        <div className="mt-20 divide-y divide-border/70 border-y border-border/70">
          {courses.map((c) => (
            <a key={c.num} href="#" className="group grid grid-cols-12 items-center gap-4 py-8 transition hover:bg-secondary/40 md:py-10">
              <span className="col-span-2 serif text-3xl text-taupe md:col-span-1">{c.num}</span>
              <div className="col-span-10 md:col-span-6">
                <h3 className="serif text-2xl md:text-4xl">{c.title}</h3>
              </div>
              <div className="col-span-6 text-sm text-muted-foreground md:col-span-3">{c.topic}</div>
              <div className="col-span-6 flex items-center justify-end gap-3 md:col-span-2">
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{c.weeks}</span>
                <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
