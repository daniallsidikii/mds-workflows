const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-narrow py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MDSworflows. All rights reserved.
        </p>
        <ul className="flex items-center gap-6 text-sm text-muted-foreground">
          <li>
            <a href="#work" className="hover:text-foreground transition">Work</a>
          </li>
          <li>
            <a href="#services" className="hover:text-foreground transition">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
