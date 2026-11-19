import { PageShell } from "@/components/layout/PageShell";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { NavBar } from "@/components/navigation/NavBar";
import { ContactSection, type GithubProfile } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProficiencySection } from "@/components/sections/ProficiencySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

const fallbackGithub: GithubProfile = {
  avatar_url: "https://avatars.githubusercontent.com/levi-x00",
  bio: "Available for freelance",
  location: "Indonesia",
  html_url: "https://github.com/levi-x00",
  login: "levi-x00",
};

async function getGithubProfile(): Promise<GithubProfile> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };
    // CI runners share IPs, so unauthenticated GitHub API calls get rate-limited.
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch("https://api.github.com/users/levi-x00", {
      headers,
      cache: "force-cache",
    });

    if (!res.ok) return fallbackGithub;

    const data = (await res.json()) as Partial<GithubProfile>;
    return {
      avatar_url: data.avatar_url || fallbackGithub.avatar_url,
      bio: data.bio ?? fallbackGithub.bio,
      location: data.location ?? fallbackGithub.location,
      html_url: data.html_url || fallbackGithub.html_url,
      login: data.login || fallbackGithub.login,
    };
  } catch {
    return fallbackGithub;
  }
}

export default async function Home() {
  const github = await getGithubProfile();

  return (
    <PageShell>
      <NavBar />
      <HeroSection />
      <SectionWrapper id="skills" num="02">
        <SkillsSection />
      </SectionWrapper>
      <SectionWrapper id="proficiency" num="03">
        <ProficiencySection />
      </SectionWrapper>
      {education.length > 0 ? (
        <SectionWrapper id="education" num="04">
          <EducationSection />
        </SectionWrapper>
      ) : null}
      {experience.length > 0 ? (
        <SectionWrapper id="experience" num="05">
          <ExperienceSection />
        </SectionWrapper>
      ) : null}
      {projects.length > 0 ? (
        <SectionWrapper id="projects" num="06">
          <ProjectsSection />
        </SectionWrapper>
      ) : null}
      <SectionWrapper id="contact" num="06">
        <ContactSection github={github} />
      </SectionWrapper>
    </PageShell>
  );
}