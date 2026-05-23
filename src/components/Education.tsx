import SectionHeading from "./SectionHeading";

interface EducationProps {
  education: {
    id: string;
    degree: string;
    school: string;
    startDate: string;
    endDate: string | null;
    description: string | null;
  }[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="bg-surface">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Academic background and learning experiences"
        />

        <div className="max-w-2xl mx-auto space-y-5">
          {education.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.degree}</h3>
                  <p className="text-primary font-medium text-sm">{item.school}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  {(!item.endDate || item.endDate.toLowerCase() === "present") && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium border border-emerald-100">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      Current
                    </span>
                  )}
                  <span className="text-slate-400 text-sm whitespace-nowrap">
                    {item.startDate} {item.endDate ? `– ${item.endDate}` : ""}
                  </span>
                </div>
              </div>
              <p className="text-slate-500 text-sm">{item.description}</p>

              {/* Accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
