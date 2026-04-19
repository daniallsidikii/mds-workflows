import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-narrow">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for hire
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-foreground">
          Muhammad Daniyal <br className="hidden sm:block" />
          <span className="text-primary">Siddiqui</span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl font-medium text-foreground/80">
          Social Media Manager &amp; Static Website Developer
        </p>

        <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          I help small businesses streamline their online presence with smart automations,
          social media management, and clean static websites.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition"
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {[
            { label: "Facebook", color: "bg-facebook-soft text-facebook" },
            { label: "Instagram", color: "bg-instagram-soft text-instagram" },
            { label: "YouTube", color: "bg-youtube-soft text-youtube" },
            { label: "Web", color: "bg-web-soft text-web" },
          ].map((p) => (
            <div key={p.label} className="bg-card p-5 text-center">
              <div className={`mx-auto mb-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${p.color}`}>
                {p.label}
              </div>
              <div className="text-sm text-muted-foreground">Specialist</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
