import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { SectionTitle } from "@/components/primitives/SectionTitle";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const oddCount = experience.length > 1 && experience.length % 2 === 1;

  return (
    <div>
      <SectionLabel num="05" />
      <SectionTitle>EXPERIENCE.</SectionTitle>
      <div
        className={cn(
          "grid gap-4",
          experience.length > 1 && "md:grid-cols-2",
          oddCount && "[&>*:last-child]:md:col-span-2",
        )}
      >
        {experience.map((item) => (
          <ExperienceCard key={`${item.company}-${item.role}`} {...item} />
        ))}
      </div>
    </div>
  );
}
