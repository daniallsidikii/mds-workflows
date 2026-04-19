import { useState, type FormEvent } from "react";
import { Facebook, Globe, Instagram, Send, Youtube } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent",
        description: "Thanks for reaching out — I'll reply within 24 hours.",
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary/40">
      <div className="container-narrow grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Contact</p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Let's work together
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Available for clinic and healthcare brand projects. Tell me about your goals and I'll get
            back to you within 24 hours.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 hover:border-facebook/40 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-facebook-soft text-facebook">
                <Facebook className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 hover:border-instagram/40 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-instagram-soft text-instagram">
                <Instagram className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 hover:border-youtube/40 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-youtube-soft text-youtube">
                <Youtube className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">YouTube</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 hover:border-web/40 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-web-soft text-web">
                <Globe className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">Website</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4"
        >
          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@clinic.com"
              className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project…"
              className="mt-1.5 block w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background hover:opacity-90 disabled:opacity-60 transition"
          >
            <Send className="h-4 w-4" />
            {loading ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
