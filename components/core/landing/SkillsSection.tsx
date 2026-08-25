import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/constants/skills";
import { getTechSvgIcon } from "@/constants/tech-icons";

const skills = Object.values(skillCategories).flat();
const uniqueSkills = [...new Set(skills.map((skill) => skill.trim()))];

export function SkillsSection() {
  const marqueeSkills = [...uniqueSkills, ...uniqueSkills];

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
                  className="rounded-full border border-border/70 bg-[#c1bebe2d] px-3 py-1.5 text-[11px] text-foreground dark:bg-[#a8a29e12]"
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
