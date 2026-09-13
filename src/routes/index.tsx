import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from "react";
import {
  ArrowRight,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Waves,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";

export const Route = createFileRoute("/")({ component: Home });

const STATS = [
  { value: "2nd", label: "Strongest ocean current on Earth" },
  { value: "1.4 m/s", label: "Average speed, peaks above 2.5 m/s" },
  { value: "70–80 Sv", label: "Volume transport, year-round" },
  { value: "70–80%", label: "Estimated capacity factor" },
];

const INTRO = [
  "South Africa is currently experiencing an energy crisis, with loadshedding and an aging coal fleet threatening economic growth.",
  "Renewable energy sources like solar and wind are being implemented, but they are intermittent and require expensive storage solutions.",
  "The Agulhas Current, one of the world’s strongest ocean currents, presents a unique opportunity to generate clean, reliable power from a highly consistent ocean current.",
];

const CURRENT_FACTS = [
  {
    k: "Path",
    v: "Eastern boundary current flowing south along South Africa’s east coast.",
  },
  { k: "Width", v: "40–100 km across the core of the flow." },
  { k: "Depth", v: "Energetic from the surface to 2,000 m." },
  {
    k: "Consistency",
    v: "A highly consistent, year-round flow — not weather-dependent generation.",
  },
];

const SWOT = [
  {
    title: "Strengths",
    tone: "ok" as const,
    items: [
      "Clean, renewable energy from a highly consistent ocean current",
      "High capacity factor (70–80%)",
      "Low visual impact — turbines sit underwater",
      "Job creation and local economic development",
    ],
  },
  {
    title: "Weaknesses",
    tone: "warn" as const,
    items: [
      "High initial capital costs",
      "Deployment and maintenance in deep water",
      "Environmental impact assessments required",
      "Natal Pulses can divert the current up to twice a year",
    ],
  },
  {
    title: "Opportunities",
    tone: "accent" as const,
    items: [
      "Growing demand for renewable energy",
      "Government support for energy diversification",
      "Potential for hydrogen production",
      "Export expertise to the Gulf Stream and Kuroshio",
    ],
  },
  {
    title: "Threats",
    tone: "danger" as const,
    items: [
      "Regulatory hurdles and permitting delays",
      "Competition from other renewable sources",
      "Potential environmental opposition",
    ],
  },
];

function Home() {
  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Current />
        <Energy />
        <NatalPulses />
        <Location />
        <Opportunity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
      <img
        src="/hero-coast.jpg"
        alt="The Agulhas Current flowing along the east coast of South Africa"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/25" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
          September 2026 · Duncan Clements, Founder
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,5.2rem)] font-medium leading-[1.05] tracking-[-0.03em] text-fg">
          Highly consistent ocean power for South Africa
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-fg/85 sm:text-lg">
          Agulhas Current Energy harvests a highly consistent ocean current —
          one of the world’s strongest — for clean power, independent of wind
          or sun.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#contact">
              Speak with the founder
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#energy">How the resource works</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Introduction
          </p>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight sm:text-4xl">
            A highly consistent answer to an energy crisis
          </h2>
        </div>
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
          {INTRO.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="text-fg">
            This site sets out the case for Agulhas Current Energy (ACE) as a
            sustainable contribution to South Africa’s power mix.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-bg px-4 py-8 sm:px-6">
              <dt className="font-display text-2xl tracking-tight text-fg sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Current() {
  return (
    <section id="current" className="scroll-mt-20 bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            The Agulhas Current
          </p>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight sm:text-4xl">
            An eastern boundary current, running year-round
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
            Second only to the Gulf Stream, the Agulhas Current carries 70–80
            million cubic metres of water every second. That volume, at average
            speeds of 1.4 m/s and peaks above 2.5 m/s, is the resource.
          </p>
          <ul className="mt-8 space-y-4">
            {CURRENT_FACTS.map((f) => (
              <li key={f.k} className="flex gap-4 border-t border-border pt-4">
                <span className="w-16 shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                  {f.k}
                </span>
                <span className="text-sm leading-relaxed text-fg">{f.v}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="overflow-hidden rounded-xl border border-border">
          <img
            src="/current-map.jpg"
            alt="Satellite view of the Agulhas Current along South Africa’s east coast, showing southward flow and retroflection"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="bg-surface-2 px-4 py-3 text-xs text-muted">
            The current core hugs the shelf before retroflecting into the Indian
            Ocean.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Energy() {
  return (
    <section id="energy" className="scroll-mt-20 bg-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <figure className="order-2 overflow-hidden rounded-xl border border-border lg:order-1">
          <img
            src="/turbine.jpg"
            alt="Submerged ocean-current turbine in the Agulhas flow"
            className="aspect-[16/10] w-full object-cover"
          />
        </figure>
        <div className="order-1 lg:order-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Agulhas Current Energy
          </p>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight sm:text-4xl">
            Underwater turbines. Highly consistent output.
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
            By deploying underwater turbines in the Agulhas Current, ACE
            generates electricity from a highly consistent ocean current. Unlike
            wind and solar, this energy is not dependent on weather. The machines
            are cousins of tidal turbines — with a consistent flow, they offer a
            much higher capacity factor, estimated at 70–80%.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <FactCard
              icon={<Zap className="size-4" />}
              title="1 MW turbine"
              body="Enough electricity for about 1,000 homes."
            />
            <FactCard
              icon={<Gauge className="size-4" />}
              title="Tens of GW"
              body="Potential large enough to meet a significant share of national demand."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FactCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <div className="flex size-9 items-center justify-center rounded-md bg-surface-2 text-accent">
        {icon}
      </div>
      <p className="mt-3 font-medium text-fg">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}

function NatalPulses() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Operating reality
          </p>
          <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight">
            Natal Pulses
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
            Natal Pulses are large-scale meanders in the Agulhas Current. They
            can shift the flow offshore and pause generation for a short period.
          </p>
        </div>
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-bg p-5">
              <dt className="font-display text-2xl tracking-tight text-fg">
                Up to twice a year
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                The current diverts at most twice in a year.
              </dd>
            </div>
            <div className="rounded-lg border border-border bg-bg p-5">
              <dt className="font-display text-2xl tracking-tight text-fg">
                About 10 days
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                Each diversion lasts around ten days.
              </dd>
            </div>
            <div className="rounded-lg border border-border bg-bg p-5">
              <dt className="font-display text-2xl tracking-tight text-fg">
                Some years, none
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                Sometimes there is no diversion in a year.
              </dd>
            </div>
          </dl>
        </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="scroll-mt-20 bg-bg">
      <div className="relative overflow-hidden">
        <img
          src="/wild-coast.jpg"
          alt="The east coast of South Africa, looking toward the offshore current"
          className="h-[42vh] min-h-64 w-full object-cover sm:h-[52vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Strategic positioning
        </p>
        <div className="mt-3 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            The east coast of South Africa — where the current is closest and strongest
          </h2>
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              The optimal deployment band sits roughly 10–20 km off the east
              coast of South Africa, with access to existing grid
              infrastructure.
            </p>
            <p>
              ACE would follow a phased path: a small-scale demonstration —
              around 10 MW — to prove the technology in these waters, then
              commercial-scale arrays. The work creates jobs, can stimulate
              local manufacturing, and adds to national energy security.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: <MapPin className="size-4" />,
              t: "10–20 km offshore",
              d: "Current core within reach of the shelf and the grid.",
            },
            {
              icon: <Waves className="size-4" />,
              t: "10 MW demonstration",
              d: "Prove the machines in Agulhas conditions before scale-up.",
            },
            {
              icon: <Gauge className="size-4" />,
              t: "Then commercial arrays",
              d: "Build out once the resource and operations are de-risked.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <div className="text-accent">{c.icon}</div>
              <p className="mt-3 font-medium text-fg">{c.t}</p>
              <p className="mt-1 text-sm text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Opportunity() {
  const toneClass = {
    ok: "text-ok",
    warn: "text-warn",
    accent: "text-accent",
    danger: "text-danger",
  };
  return (
    <section id="opportunity" className="scroll-mt-20 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          S.W.O.T.
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl leading-tight tracking-tight sm:text-4xl">
          A clear-eyed view of the opportunity
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SWOT.map((col) => (
            <article
              key={col.title}
              className="rounded-xl border border-border bg-bg p-6 sm:p-7"
            >
              <h3
                className={`text-xs font-medium uppercase tracking-[0.18em] ${toneClass[col.tone]}`}
              >
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-border pt-3 text-sm leading-relaxed text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-10 rounded-xl border border-border bg-surface p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Direct line
            </p>
            <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight sm:text-4xl">
              Talk to Duncan Clements
            </h2>
            <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-muted">
              Founder, Agulhas Current Energy. For briefings, partnership
              discussions, and the 10 MW demonstration programme.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <a
              href="mailto:Duncan.c@agulhas.energy"
              className="flex min-h-11 items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3 transition-colors hover:border-accent/50"
            >
              <Mail className="size-4 text-accent" />
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-subtle">
                  Email
                </span>
                <span className="text-fg">Duncan.c@agulhas.energy</span>
              </span>
            </a>
            <a
              href="tel:+27823188865"
              className="flex min-h-11 items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3 transition-colors hover:border-accent/50"
            >
              <Phone className="size-4 text-accent" />
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-subtle">
                  Mobile
                </span>
                <span className="text-fg">+27 82 318 8865</span>
              </span>
            </a>
            <Button asChild size="lg" className="mt-2 w-full sm:w-auto">
              <a href="mailto:Duncan.c@agulhas.energy?subject=Agulhas%20Current%20Energy">
                Email the founder
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
