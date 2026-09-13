import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt=""
              className="size-11 rounded-[0.65rem]"
            />
            <p className="font-display text-xl text-fg">Agulhas Current Energy</p>
          </div>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            Harvesting a highly consistent ocean current for clean, reliable
            power in South Africa.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            Founder
          </p>
          <p className="text-fg">Duncan Clements</p>
          <a
            href="mailto:Duncan.c@agulhas.energy"
            className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <Mail className="size-4" />
            Duncan.c@agulhas.energy
          </a>
          <a
            href="tel:+27823188865"
            className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <Phone className="size-4" />
            +27 82 318 8865
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Agulhas Current Energy</p>
          <p>September 2026 briefing</p>
        </div>
      </div>
    </footer>
  );
}
