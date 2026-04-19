import { Quote } from "lucide-react";

const testimonials = [
  {
    initials: "AR",
    name: "Ayesha Rahman",
    role: "Clinic Manager",
    quote:
      "Daniyal manages our social pages reliably every month. The reports make it easy to share results with our doctors.",
  },
  {
    initials: "SK",
    name: "Saad Khan",
    role: "Practice Owner",
    quote:
      "Our new clinic website was delivered fast and loads instantly on mobile. Patients now book through the appointment page.",
  },
  {
    initials: "MN",
    name: "Maryam Nadeem",
    role: "Marketing Lead",
    quote:
      "Consistent posting, clean visuals and clear analytics. Exactly what we needed without the overhead of an agency.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-semibold leading-tight">
            What clients say
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
