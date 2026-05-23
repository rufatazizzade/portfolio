import SectionHeading from "./SectionHeading";

import { Code2, Terminal, Globe2, Cpu, Wrench } from "lucide-react";

interface SkillProps {
  skills: {
    id: string;
    name: string;
    category: string;
    icon: string | null;
  }[];
}

export default function Skills({ skills }: SkillProps) {
  // Group skills by category
  const categoriesMap = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  const skillCategories = Object.keys(categoriesMap).map((category) => {
    // Pick an icon based on category name roughly, or default to Code2
    let icon = <Code2 className="w-5 h-5" />;
    if (category.toLowerCase().includes("tool")) icon = <Wrench className="w-5 h-5" />;
    if (category.toLowerCase().includes("lang")) icon = <Globe2 className="w-5 h-5" />;
    if (category.toLowerCase().includes("tech")) icon = <Cpu className="w-5 h-5" />;
    if (category.toLowerCase().includes("sys")) icon = <Terminal className="w-5 h-5" />;

    return {
      title: category,
      icon,
      skills: categoriesMap[category],
    };
  });
  return (
    <section id="skills">
      <div className="section-container">
        <SectionHeading
          title="Skills"
          subtitle="Technologies, tools, and languages I work with"
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-surface text-slate-700 text-sm font-medium border border-border hover:border-blue-200 hover:bg-blue-50 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
