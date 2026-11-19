import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";

import nextConfig from "../next.config";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { hero } from "../data/hero";
import { proficiency } from "../data/proficiency";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import { socialLinks } from "../data/social";
import { testimonials } from "../data/testimonials";

describe("Portfolio requirements", () => {
  it("uses static export settings required by Next.js deployment", () => {
    expect(nextConfig.output).toBe("export");
    expect(nextConfig.trailingSlash).toBe(true);
    expect(nextConfig.images?.unoptimized).toBe(true);
  });

  it("centralizes all portfolio content in data files", () => {
    expect(hero.name).toBe("LEVI");
    expect(socialLinks.github).toBe("https://github.com/levi-x00");
    expect(skillGroups.map((group) => group.title)).toEqual([
      "Cloud & DevOps",
      "CI/CD & Automation",
      "Security & Observability",
    ]);
    expect(
      skillGroups.flatMap((group) =>
        group.softwareSkills.map((skill) => skill.skillName),
      ),
    ).toEqual(
      expect.arrayContaining([
        "AWS",
        "Lambda",
        "Serverless",
        "Terraform",
        "Docker",
        "Kubernetes",
        "Argo CD",
        "Python",
        "Bash",
        "PowerShell",
        "GitLab",
        "CodePipeline",
        "Datadog",
        "Grafana",
      ]),
    );
    expect(proficiency).toEqual([
      { label: "Cloud & Infrastructure", percentage: 90 },
      { label: "CI/CD & Automation", percentage: 90 },
      { label: "Scripting & Programming", percentage: 85 },
      { label: "Security & Observability", percentage: 80 },
    ]);
    for (const collection of [education, experience, projects, testimonials]) {
      expect(Array.isArray(collection)).toBe(true);
    }
  });

  it("keeps visual defaults brutalist and unrounded", async () => {
    const css = await import("node:fs/promises").then((fs) =>
      fs.readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    );

    expect(css).toContain("--terminal-signal: #FF3D00");
    expect(css).toContain("--radius: 0px");
    expect(css).toContain(".grid-overlay::before");
    expect(css).toContain(".glitch:hover::before");
    expect(css).toContain(".progress-brutalist");
  });

  it("uses consistent vertical rhythm between skill groups", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../components/sections/SkillsSection.tsx", import.meta.url),
        "utf8",
      ),
    );

    expect(source).toContain("space-y-12 md:space-y-16");
  });

  it("stacks proficiency bars below the section heading in two columns", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../components/sections/ProficiencySection.tsx", import.meta.url),
        "utf8",
      ),
    );

    expect(source).toContain('className="space-y-12"');
    expect(source).toContain('className="grid gap-8 md:grid-cols-2"');
    expect(source).not.toContain("md:grid-cols-[0.8fr_1.2fr]");
  });

  it("stretches project cards to consistent row heights", async () => {
    const [sectionSource, cardSource] = await Promise.all([
      import("node:fs/promises").then((fs) =>
        fs.readFile(
          new URL("../components/sections/ProjectsSection.tsx", import.meta.url),
          "utf8",
        ),
      ),
      import("node:fs/promises").then((fs) =>
        fs.readFile(
          new URL("../components/cards/ProjectCard.tsx", import.meta.url),
          "utf8",
        ),
      ),
    ]);

    expect(sectionSource).toContain('className="h-full"');
    expect(cardSource).toContain('className="flex h-full flex-col"');
  });

  it("keeps the contact avatar aligned responsively", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../components/sections/ContactSection.tsx", import.meta.url),
        "utf8",
      ),
    );

    expect(source).toContain("md:items-center");
    expect(source).toContain("mx-auto");
    expect(source).toContain("md:ml-auto");
    expect(source).toContain("aspect-square");
    expect(source).toContain("sm:w-48");
    expect(source).toContain("md:w-56");
    expect(source).toContain("lg:w-64");
  });

  it("centers mobile hero text vertically without changing desktop alignment", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../components/sections/HeroSection.tsx", import.meta.url),
        "utf8",
      ),
    );

    expect(source).toContain("justify-start");
    expect(source).toContain("my-auto");
    expect(source).toContain("pt-20");
    expect(source).toContain("md:min-h-screen");
    expect(source).toContain("md:justify-end");
    expect(source).toContain("md:my-0");
    expect(source).toContain("md:pt-24");
  });

  it("keeps decorative section wrapper numbers out of the content start area", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../components/layout/SectionWrapper.tsx", import.meta.url),
        "utf8",
      ),
    );

    expect(source).toContain("top-3");
    expect(source).toContain("text-[48px]");
    expect(source).toContain("md:top-2");
    expect(source).toContain("md:text-[80px]");
    expect(source).toContain("aria-hidden");
  });

  it("keeps software skill badges focused and readable", () => {
    const badgeNames = skillGroups.flatMap((group) =>
      group.softwareSkills.map((skill) => skill.skillName),
    );
    const capabilityText = skillGroups
      .flatMap((group) => group.capabilities)
      .join(" ");

    expect(
      skillGroups.every((group) => group.softwareSkills.length <= 7),
    ).toBe(true);
    expect(badgeNames).not.toEqual(
      expect.arrayContaining(["Podman", "CI/CD", "DevSecOps", "TrueWatch"]),
    );
    expect(capabilityText).toContain("Podman");
    expect(capabilityText).toContain("CI/CD");
    expect(capabilityText).toContain("DevSecOps");
    expect(capabilityText).toContain("TrueWatch");
  });

  it("ships a logo file for every experience entry", () => {
    for (const item of experience) {
      expect(
        existsSync(new URL(`../public${item.companyLogo}`, import.meta.url)),
      ).toBe(true);
    }
  });
});