import SectionHeading from "./SectionHeading";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Technical Assistant",
    company: "Czech Technical University",
    period: "February 2026 – Present",
    current: true,
    bullets: [
      "Managed live streaming and recording systems for university lectures and academic events.",
      "Provided on-site technical support to professors and students, resolving AV and system issues during sessions.",
      "Operated lecture hall control panels, audiovisual equipment, and presentation systems.",
      "Ensured smooth technical execution and organization of academic lectures and seminars.",
      "Worked independently in fast-paced environments while handling multiple technical responsibilities under time pressure.",
    ],
  },
  {
    role: "Software Developer / Co-founder",
    company: "VerseTech",
    period: "January 2024 – March 2026",
    bullets: [
      "Engineered software modules for MVP-stage hardware products, integrating embedded logic with real-time data processing.",
      "Collaborated closely with electronics engineers to develop stable firmware for circuit prototypes, ensuring accurate sensor data acquisition and responsive system performance.",
      "Designed, implemented, and tested prototype applications for device control, diagnostics, and performance monitoring.",
      "Contributed to key product features used in early-stage demonstrations and technical presentations for stakeholders.",
      "Coordinated with cross-functional teams to align software components with hardware architecture, improving system stability and reliability.",
      "Debugged, optimized, and refined software functionality to prepare MVP products for incubation and pilot deployment.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <SectionHeading
          title="Work Experience"
          subtitle="Professional roles where I've contributed to real engineering work"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  {exp.current && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium border border-emerald-100">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      Current
                    </span>
                  )}
                  <span className="text-slate-400 text-sm whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, i) => (
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
