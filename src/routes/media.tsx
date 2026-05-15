import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import conversation from "@/assets/conversation.jpg";
import journal from "@/assets/journal.jpg";
import hero from "@/assets/hero.jpg";
import course from "@/assets/course.jpg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media — Pavulum" },
      { name: "description", content: "Conversations, essays, podcasts, and short films from the Pavulum studio." },
      { property: "og:title", content: "Media — Pavulum" },
      { property: "og:description", content: "Conversations and essays from the Pavulum studio." },
    ],
  }),
  component: MediaPage,
});

const media = [
  { kind: "Conversation", title: "On staying soft in a hard decade.", duration: "47 min", img: conversation },
  { kind: "Essay", title: "The discipline of slowness.", duration: "9 min read", img: journal },
  { kind: "Podcast", title: "What we owe the people we love.", duration: "1 hr 12", img: hero },
  { kind: "Film", title: "Rooms that taught us to think.", duration: "12 min", img: course },
  { kind: "Essay", title: "Notes on quiet ambition.", duration: "7 min read", img: journal },
  { kind: "Conversation", title: "On parenting toward attention.", duration: "52 min", img: conversation },
];

function MediaPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pt-48">
        <p className="eyebrow">Studio</p>
        <h1 className="mt-3 max-w-3xl text-balance text-5xl md:text-7xl">Conversations & essays.</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          A growing library of long-form thinking — film, audio, and writing from the Pavulum studio.
        </p>
        <div className="mt-20 grid gap-10 md:grid-cols-2 md:gap-12">
          {media.map((m) => (
            <a key={m.title} href="#" className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-beige">
                <img src={m.img} alt={m.title} loading="lazy" className="img-cinematic h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]" />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <p className="eyebrow">{m.kind}</p>
                <span className="text-xs text-muted-foreground">{m.duration}</span>
              </div>
              <h3 className="serif mt-2 text-2xl leading-tight md:text-3xl">{m.title}</h3>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
