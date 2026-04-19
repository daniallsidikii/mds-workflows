import { BarChart3, Code2, Facebook, Instagram, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "web" | "facebook" | "instagram" | "youtube" | "muted";
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Static Website Development",
    description: "Fast, SEO-friendly HTML/CSS websites built to plug into your automation stack.",
    accent: "web",
  },
  {
    icon: Facebook,
    title: "Facebook Management",
    description: "Page setup, automated posting, stories and ad boosting that grows your reach.",
    accent: "facebook",
  },
  {
    icon: Instagram,
    title: "Instagram Management",
    description: "Feed design, reels, stories and automated scheduling tailored to your niche.",
    accent: "instagram",
  },
  {
    icon: Youtube,
    title: "YouTube Management",
    description: "Channel setup, thumbnails, video SEO and an automated upload workflow.",
    accent: "youtube",
  },
  {
    icon: BarChart3,
    title: "Analytics & Automated Reporting",
    description: "Automated monthly reports with insights and recommendations for managers.",
    accent: "muted",
  },
];

const accentMap: Record<Service["accent"], string> = {
  web: "bg-web-soft text-web",
  facebook: "bg-facebook-soft text-facebook",
  instagram: "bg-instagram-soft text-instagram",
  youtube: "bg-youtube-soft text-youtube",
  muted: "bg-secondary text-foreground",
};

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Services</p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Everything you need to grow &amp; automate online
          </h2>
          <p className="mt-4 text-muted-foreground">
            From building your website to automating your social channels — I handle the full
            digital workflow so you can focus on running your business.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, accent }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 transition-colors"
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accentMap[accent]}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
