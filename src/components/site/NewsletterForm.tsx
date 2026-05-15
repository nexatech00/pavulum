"use client";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto mt-10 flex max-w-md items-center gap-0 border-b border-charcoal/60 pb-2"
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 bg-transparent px-2 py-3 text-sm placeholder:text-muted-foreground focus:outline-none"
      />
      <button
        type="submit"
        className="px-3 py-3 text-xs uppercase tracking-[0.22em] underline-grow"
      >
        Subscribe
      </button>
    </form>
  );
}
