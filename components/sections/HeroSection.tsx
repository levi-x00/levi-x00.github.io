"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/primitives/ParticlesBackground";
import { SocialLink } from "@/components/primitives/SocialLink";
import { TerminalLine } from "@/components/primitives/TerminalLine";
import { hero } from "@/data/hero";
import { socialLinks } from "@/data/social";
import { useCountUp } from "@/hooks/use-count-up";
import { SectionLabel } from "../primitives/SectionLabel";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, count } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="border-r border-terminal-border px-4 py-6 last:border-r-0 md:px-8"
    >
      <div className="font-mono text-4xl font-bold text-terminal-text">
        {count}
        <span className="text-terminal-signal">{suffix}</span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-widest text-terminal-dim">
        {label}
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70svh] flex-col justify-start overflow-hidden px-6 pb-0 pt-20 md:min-h-[70vh] md:justify-end md:px-12 md:pt-24"
    >
      <ParticlesBackground />
      <div className="relative z-10 my-auto flex flex-col-reverse gap-10 pb-12 md:my-0 md:flex-row md:items-center md:justify-between md:gap-12 md:pb-16">
        <div className="max-w-5xl">
          <SectionLabel num="01" />
          <h1 className="font-mono text-[clamp(34px,6vw,80px)] font-bold leading-none text-terminal-text">
            <span className="block">{hero.greeting}</span>
            <span className="block">
              {"I'M "}
              <TerminalLine text={hero.name} cursor />
            </span>
          </h1>
          <p className="mt-8 max-w-xl whitespace-pre-line border-l-2 border-terminal-signal pl-4 text-sm leading-relaxed text-terminal-soft">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {hero.resumeLink ? (
              <Button asChild>
                <a href={hero.resumeLink} target="_blank" rel="noreferrer">
                  [ SEE MY RESUME ]
                </a>
              </Button>
            ) : (
              <Button asChild>
                <a href={socialLinks.email}>[ CONTACT ME ]</a>
              </Button>
            )}
            <SocialLink href={socialLinks.github} icon="mdi:github" label="GitHub" />
            <SocialLink
              href={socialLinks.linkedin}
              icon="mdi:linkedin"
              label="LinkedIn"
            />
          </div>
        </div>
        <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-full border-2 border-terminal-signal bg-terminal-surface shadow-[8px_8px_0_rgba(198,255,0,0.35)] sm:w-48 md:mr-4 md:w-60 lg:w-72">
          <Image
            src="/img/levi-photo.jpg"
            alt="Portrait of Levi"
            fill
            priority
            className="object-cover object-[50%_8%]"
            sizes="(min-width: 1024px) 288px, (min-width: 768px) 240px, (min-width: 640px) 192px, 160px"
          />
        </div>
      </div>
      {hero.stats.length > 0 ? (
        <div className="relative z-10 grid grid-cols-3 border-t border-terminal-border">
          {hero.stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
