import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { NewsletterForm } from "@/components/site/NewsletterForm";

import hero from "@/assets/hero.jpg";
import books from "@/assets/books.jpg";
import apparel from "@/assets/apparel.jpg";
import journal from "@/assets/journal.jpg";
import conversation from "@/assets/conversation.jpg";
import course from "@/assets/course.jpg";
import founder from "@/assets/founder.jpg";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";

export const metadata: Metadata = {
  title: "Pavulum — Objects, ideas & stories for a more conscious life",
  description:
    "A curated space for books, courses, apparel, and meaningful conversations on intentional living, philosophy, and modern culture.",
  openGraph: {
    title: "Pavulum — A more conscious life",
    description:
      "Books, courses, apparel and conversations for the intentional life. Curated by Pavulum.",
  },
};

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Collections />
      <Books />
      <Courses />
      <Media />
      <Apparel />
      <FounderStory />
      <Newsletter />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <Image
        src={hero}
        alt="A reader caught in golden window light"
        fill
        priority
        className="img-cinematic object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/10 to-charcoal/70" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
        <p className="eyebrow reveal text-ivory/80">Volume 01 · The Quiet Issue</p>
        <h1 className="reveal reveal-delay-1 mt-6 max-w-4xl text-balance text-5xl leading-[1.02] text-ivory md:text-7xl lg:text-[5.5rem]">
          Objects, ideas, and stories for a more conscious life.
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
          A curated space for books, learning, apparel, and meaningful conversations — gathered for
          those who choose intention over noise.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
          <Link
            href="#collections"
            className="group inline-flex items-center gap-2 bg-ivory px-7 py-4 text-xs uppercase tracking-[0.22em] text-charcoal transition hover:bg-gold"
          >
            Shop the collection{" "}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <Link
            href="/books"
            className="inline-flex items-center gap-2 border border-ivory/40 px-7 py-4 text-xs uppercase tracking-[0.22em] text-ivory transition hover:bg-ivory/10"
          >
            Explore books
          </Link>
          <Link
            href="/media"
            className="inline-flex items-center gap-2 px-2 py-4 text-xs uppercase tracking-[0.22em] text-ivory underline-grow"
          >
            <Play className="h-3 w-3" /> Watch conversations
          </Link>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "Books",
    "Courses",
    "Apparel",
    "Journals",
    "Conversations",
    "Essays",
    "Philosophy",
  ];
  const row = [...words, ...words, ...words];
  return (
    <div className="overflow-hidden border-y border-border/60 bg-secondary/30 py-6">
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="serif text-2xl text-espresso/70">
            {w} <span className="mx-8 text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const collections = [
  { tag: "Reading", title: "The Library", img: books, count: "24 titles", href: "/books" },
  { tag: "Learning", title: "Courses", img: course, count: "8 cohorts", href: "/courses" },
  { tag: "Wear", title: "Apparel", img: apparel, count: "12 pieces", href: "/shop" },
  { tag: "Write", title: "Journals & Goods", img: journal, count: "15 objects", href: "/shop" },
];

function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">The Collection</p>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl md:text-6xl">
            A small, deliberate catalogue.
          </h2>
        </div>
        <Link href="/shop" className="text-xs uppercase tracking-[0.22em] underline-grow">
          View everything
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {collections.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group relative block overflow-hidden bg-secondary"
          >
            <div className="aspect-[3/4] overflow-hidden">
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
  );
}

const bestsellers = [
  { title: "The Quiet Mind", author: "M. Aldea", price: "$32", tag: "New", img: book1 },
  { title: "On Tenderness", author: "I. Rauch", price: "$28", tag: "Bestseller", img: book2 },
  { title: "Slow Hours", author: "J. Vermeer", price: "$36", tag: "Limited", img: book3 },
];

function Books() {
  return (
    <section id="books" className="bg-secondary/40 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">The Library</p>
            <h2 className="mt-3 text-balance text-4xl md:text-6xl">Books we return to.</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:justify-self-end">
            Each title is chosen for the way it changes the temperature of a room — slower thinking,
            warmer attention, a longer kind of patience.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {bestsellers.map((b) => (
            <article key={b.title} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  className="img-cinematic object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-charcoal">
                  {b.tag}
                </span>
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
      </div>
    </section>
  );
}

const coursesList = [
  { num: "01", title: "On Loving Well", topic: "Relationships", weeks: "6 weeks" },
  { num: "02", title: "Raising Quiet Children", topic: "Parenting", weeks: "4 weeks" },
  { num: "03", title: "The Examined Self", topic: "Self-awareness", weeks: "8 weeks" },
];

function Courses() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <Image
        src={course}
        alt=""
        aria-hidden
        fill
        className="object-cover opacity-[0.45]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/70 via-ivory/85 to-ivory" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Courses</p>
          <h2 className="mt-3 text-balance text-4xl md:text-6xl">
            Learning that asks something of you.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Long-form, cohort-based courses on the things that quietly shape a life — love,
            attention, parenting, and the work of becoming.
          </p>
        </div>

        <div className="mt-16 divide-y divide-border/70 border-y border-border/70">
          {coursesList.map((c) => (
            <Link
              key={c.num}
              href="/courses"
              className="group grid grid-cols-12 items-center gap-4 py-8 transition hover:bg-ivory/40 md:py-10"
            >
              <span className="col-span-2 serif text-3xl text-taupe md:col-span-1">{c.num}</span>
              <div className="col-span-10 md:col-span-6">
                <h3 className="serif text-2xl md:text-4xl">{c.title}</h3>
              </div>
              <div className="col-span-6 text-sm text-muted-foreground md:col-span-3">
                {c.topic}
              </div>
              <div className="col-span-6 flex items-center justify-end gap-3 md:col-span-2">
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {c.weeks}
                </span>
                <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const mediaItems = [
  {
    kind: "Conversation",
    title: "On staying soft in a hard decade.",
    duration: "47 min",
    img: conversation,
  },
  {
    kind: "Essay",
    title: "The discipline of slowness.",
    duration: "9 min read",
    img: journal,
  },
  {
    kind: "Podcast",
    title: "What we owe the people we love.",
    duration: "1 hr 12",
    img: hero,
  },
  {
    kind: "Film",
    title: "Rooms that taught us to think.",
    duration: "12 min",
    img: course,
  },
];

function Media() {
  return (
    <section id="media" className="bg-secondary/30 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Studio</p>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl md:text-6xl">
              Conversations & essays.
            </h2>
          </div>
          <Link href="/media" className="text-xs uppercase tracking-[0.22em] underline-grow">
            All media
          </Link>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 md:-mx-10 md:px-10">
          <div className="flex gap-6 pb-4 md:gap-8">
            {mediaItems.map((m) => (
              <Link
                key={m.title}
                href="/media"
                className="group block w-[78vw] flex-shrink-0 sm:w-[420px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    className="img-cinematic object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 78vw, 420px"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <p className="eyebrow">{m.kind}</p>
                  <span className="text-xs text-muted-foreground">{m.duration}</span>
                </div>
                <h3 className="serif mt-2 text-2xl leading-tight">{m.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Apparel() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5 md:pt-20">
          <p className="eyebrow">Apparel</p>
          <h2 className="mt-3 text-balance text-4xl md:text-6xl">
            Clothing made the way books are written.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Heavyweight cottons, undyed linens, quiet silhouettes — pieces designed to outlast the
            seasons that produced them.
          </p>
          <Link
            href="/shop"
            className="mt-10 inline-flex items-center gap-2 border border-charcoal px-7 py-4 text-xs uppercase tracking-[0.22em] text-charcoal transition hover:bg-charcoal hover:text-ivory"
          >
            Shop apparel <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:col-span-7 md:gap-6">
          <div className="relative overflow-hidden">
            <Image
              src={apparel}
              alt="Folded cream sweater"
              className="img-cinematic aspect-[3/4] w-full object-cover transition duration-700 hover:scale-[1.04]"
              width={600}
              height={800}
            />
          </div>
          <div className="relative mt-12 overflow-hidden">
            <Image
              src={journal}
              alt="Leather journal"
              className="img-cinematic aspect-[3/4] w-full object-cover transition duration-700 hover:scale-[1.04]"
              width={600}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderStory() {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-28 md:grid-cols-12 md:gap-16 md:px-10 md:py-40">
        <div className="md:col-span-5">
          <div className="relative overflow-hidden">
            <Image
              src={founder}
              alt="Founder portrait"
              className="img-cinematic aspect-[4/5] w-full object-cover"
              width={600}
              height={750}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:col-span-7">
          <p className="eyebrow text-ivory/60">A note from the founder</p>
          <blockquote className="serif mt-6 text-balance text-3xl leading-tight md:text-5xl">
            &ldquo;Pavulum began as a quieter shelf — a place to keep the books, ideas and objects
            that were teaching me how to be a person. It&apos;s still that. It&apos;s only larger
            now.&rdquo;
          </blockquote>
          <div className="mt-10 flex items-center gap-4 text-sm">
            <div className="h-px w-12 bg-ivory/40" />
            <span className="uppercase tracking-[0.22em] text-ivory/70">M. Aldea, Founder</span>
          </div>
          <Link
            href="/"
            className="mt-10 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.22em] text-ivory underline-grow"
          >
            Read the story <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="eyebrow">The Letter</p>
        <h2 className="mt-3 text-balance text-4xl leading-tight md:text-6xl">
          Join readers, listeners, and thinkers exploring a more intentional life.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          One quiet email each Sunday — a passage, a question, and what we&apos;re reading. No
          noise.
        </p>
        <NewsletterForm />
        <p className="mt-6 text-xs text-muted-foreground">
          By subscribing you agree to our quiet correspondence policy.
        </p>
      </div>
    </section>
  );
}
