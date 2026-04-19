import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container-narrow flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold">
            s
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">sikaty</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition"
        >
          Hire me
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="container-narrow py-4 flex flex-col gap-3 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-background"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
