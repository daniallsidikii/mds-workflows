import { Briefcase, CalendarCheck, LineChart, Rocket } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Healthcare experience",
    text: "Specific experience working with clinics and medical brands.",
  },
  {
    icon: CalendarCheck,
    title: "Regular posting",
    text: "Consistent scheduling so your channels never go quiet.",
  },
  {
    icon: LineChart,
    title: "Reports for managers",
    text: "Clear monthly analytics that decision-makers can act on.",
  },
  {
    icon: Rocket,
    title: "Fast website delivery",
    text: "Lightweight static sites shipped quickly without bloat.",
  },
];

const WhyMe = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Why hire me</p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Reliable. Strategic. Easy to work with.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
