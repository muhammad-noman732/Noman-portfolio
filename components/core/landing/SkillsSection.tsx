import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/constants/skills";
import { getTechSvgIcon } from "@/constants/tech-icons";

const skills = Object.values(skillCategories).flat();

export function SkillsSection() {
  const marqueeSkills = [...skills, ...skills];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[980px]">
        <div className="marquee-shell">
          <div className="marquee-track">
            {marqueeSkills.map((skill, index) => {
              const normalizedSkill = skill.trim();

              return (
                <Badge
                  key={`${normalizedSkill}-${index}`}
                  className="mx-1 rounded-full border border-border/70 bg-[#c1bebe2d] px-3 py-1.5 text-[11px] text-foreground dark:bg-[#a8a29e12]"
                  techIcon={getTechSvgIcon(normalizedSkill)}
                  techIconAlt={normalizedSkill}
                >
                  {normalizedSkill}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
