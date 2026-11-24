import { PageShell } from "@/components/layout/PageShell";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { NavBar } from "@/components/navigation/NavBar";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProficiencySection } from "@/components/sections/ProficiencySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

export default function Home() {
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
        <ContactSection />
      </SectionWrapper>
    </PageShell>
  );
}