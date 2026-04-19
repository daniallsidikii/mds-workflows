import { Facebook, Globe, Instagram, Mail, Phone, Youtube } from "lucide-react";

const PHONE_DISPLAY = "+92 311 3450134";
const PHONE_HREF = "+923113450134";
const EMAIL = "daniyal.siddiqui.workplace@gmail.com";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary/40">
      <div className="container-narrow grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Contact</p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Let's work together
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Available for automation, social media and static website projects. Reach out directly
            and I'll get back to you within 24 hours.
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

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4">
          <h3 className="font-display text-xl font-semibold">Get in touch</h3>
          <p className="text-sm text-muted-foreground">
            Prefer a direct line? Call, WhatsApp, or email me anytime.
          </p>

          <a
            href={`tel:${PHONE_HREF}`}
            className="flex items-start gap-4 rounded-xl border border-border bg-background p-4 hover:border-primary/40 transition"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Phone / WhatsApp
              </div>
              <div className="mt-0.5 text-sm font-semibold text-foreground break-all">
                {PHONE_DISPLAY}
              </div>
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex items-start gap-4 rounded-xl border border-border bg-background p-4 hover:border-primary/40 transition"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Email
              </div>
              <div className="mt-0.5 text-sm font-semibold text-foreground break-all">
                {EMAIL}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
