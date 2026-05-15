import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User } from "lucide-react";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base =
    "fixed inset-x-0 top-0 z-50 transition-all duration-500";
  const surface = scrolled
    ? "bg-ivory/85 backdrop-blur-md border-b border-border/60 text-charcoal shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
    : "bg-gradient-to-b from-charcoal/40 to-transparent text-ivory";

  return (
    <header className={`${base} ${surface}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <div className="flex-1">
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] md:flex">
            <Link to="/shop" className="underline-grow" activeProps={{ className: "underline-grow font-medium" }}>Shop</Link>
            <Link to="/books" className="underline-grow" activeProps={{ className: "underline-grow font-medium" }}>Books</Link>
            <Link to="/courses" className="underline-grow" activeProps={{ className: "underline-grow font-medium" }}>Courses</Link>
            <Link to="/media" className="underline-grow" activeProps={{ className: "underline-grow font-medium" }}>Media</Link>
          </nav>
        </div>
        <Link
          to="/"
          className="serif text-xl tracking-[0.4em] md:text-2xl"
        >
          PAVULUM
        </Link>
        <div className="flex flex-1 items-center justify-end gap-5">
          <button aria-label="Search" className="hidden md:block">
            <Search className="h-4 w-4" />
          </button>
          <button aria-label="Account" className="hidden md:block">
            <User className="h-4 w-4" />
          </button>
          <button
            aria-label="Cart"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart (0)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
