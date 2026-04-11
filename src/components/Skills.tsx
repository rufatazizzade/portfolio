import SectionHeading from "./SectionHeading";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Technical Skills",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["Rust", "C/C++ (OOP)", "Embedded Systems", "Machine Learning", "Node.js", "Microservices", "Python (Pandas, PyTorch)"],
  },
  {
    title: "Tools",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.384-3.11A1 1 0 015 11.18V5.82a1 1 0 01.537-.886l5.384-3.11a1 1 0 01.958 0l5.384 3.11A1 1 0 0118 5.82v5.36a1 1 0 01-.537.886l-5.384 3.11a1 1 0 01-.958 0z" />
      </svg>
    ),
    skills: ["Git", "Linux", "Hardware Prototyping", "Arduino", "BASYS3", "Docker", "Kubernetes"],
  },
  {
    title: "Languages",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    skills: ["English (Fluent)", "Azerbaijani (Fluent)", "Turkish (Fluent)", "Portuguese (Beginner)"],
  },
];

export default function Skills() {
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
