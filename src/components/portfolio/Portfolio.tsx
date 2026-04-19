type Platform = "Web" | "FB" | "IG" | "YT";

type Project = {
  title: string;
  description: string;
  platform: Platform;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Clinic static website",
    description: "HTML/CSS website with services, doctors and an appointment page.",
    platform: "Web",
    tags: ["HTML", "CSS", "SEO"],
  },
  {
    title: "Facebook content calendar",
    description: "Monthly posting plan and visuals for a medical clinic page.",
    platform: "FB",
    tags: ["Strategy", "Content", "Scheduling"],
  },
  {
    title: "Instagram reels strategy",
    description: "Reels scripting, story templates and weekly posting cadence.",
    platform: "IG",
    tags: ["Reels", "Scripts", "Stories"],
  },
  {
    title: "YouTube channel setup",
    description: "Branding, thumbnails and SEO optimization for healthcare content.",
    platform: "YT",
    tags: ["Branding", "Thumbnails", "Video SEO"],
  },
  {
    title: "Social media brand kit",
    description: "Voice, tone and visual identity guidelines for a clinic brand.",
    platform: "IG",
    tags: ["Branding", "Guidelines", "Visuals"],
  },
  {
    title: "Monthly analytics report",
    description: "Performance dashboard and actionable insights for managers.",
    platform: "Web",
    tags: ["Analytics", "Reporting", "Insights"],
  },
];

const platformStyles: Record<Platform, string> = {
  Web: "bg-web-soft text-web",
  FB: "bg-facebook-soft text-facebook",
  IG: "bg-instagram-soft text-instagram",
  YT: "bg-youtube-soft text-youtube",
};

const platformBorder: Record<Platform, string> = {
  Web: "before:bg-web",
  FB: "before:bg-facebook",
  IG: "before:bg-instagram",
  YT: "before:bg-youtube",
};

const Portfolio = () => {
  return (
    <section id="work" className="py-20 sm:py-28 bg-secondary/40">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Selected work</p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-semibold leading-tight">
              Projects &amp; case studies
            </h2>
          </div>
          <p className="text-sm text-muted-foreground sm:max-w-sm">
            A snapshot of recent client work across web development and social media management.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`relative overflow-hidden rounded-2xl border border-border bg-card p-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 ${platformBorder[p.platform]}`}
            >
              <div className="flex items-center justify-between">
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${platformStyles[p.platform]}`}>
                  {p.platform}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
