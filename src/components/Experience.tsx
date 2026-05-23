import SectionHeading from "./SectionHeading";

interface ExperienceProps {
  experience: {
    id: string;
    position: string;
    company: string;
    startDate: string;
    endDate: string | null;
    description: string;
  }[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience">
      <div className="section-container">
        <SectionHeading
          title="Work Experience"
          subtitle="Professional roles where I've contributed to real engineering work"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {exp.position}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  {(!exp.endDate || exp.endDate.toLowerCase() === "present") && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium border border-emerald-100">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      Current
                    </span>
                  )}
                  <span className="text-slate-400 text-sm whitespace-nowrap">
                    {exp.startDate} {exp.endDate ? `– ${exp.endDate}` : ""}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {exp.description.split("\n").filter(Boolean).map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Left accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
