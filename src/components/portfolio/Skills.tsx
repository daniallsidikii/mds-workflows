const skills = [
  "HTML",
  "CSS",
  "Facebook Business Suite",
  "Meta Ads",
  "Instagram Creator Studio",
  "YouTube Studio",
  "Canva",
  "Google Analytics",
  "Buffer / Hootsuite",
  "Notion",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-secondary/40">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Skills &amp; tools</p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Tools I work with every day
          </h2>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2.5">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
