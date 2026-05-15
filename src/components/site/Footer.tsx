export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="serif text-3xl tracking-[0.3em]">PAVULUM</div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A curated space for books, learning, apparel, and meaningful conversations on the
            intentional life.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Shop</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="underline-grow">Books</a></li>
            <li><a href="#" className="underline-grow">Courses</a></li>
            <li><a href="#" className="underline-grow">Apparel</a></li>
            <li><a href="#" className="underline-grow">Journals</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Studio</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="underline-grow">Conversations</a></li>
            <li><a href="#" className="underline-grow">Essays</a></li>
            <li><a href="#" className="underline-grow">Founder</a></li>
            <li><a href="#" className="underline-grow">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Pavulum. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Objects · Ideas · Stories</p>
        </div>
      </div>
    </footer>
  );
}
