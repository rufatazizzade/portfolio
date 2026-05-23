import SectionHeading from "./SectionHeading";

interface ProjectProps {
  projects: {
    id: string;
    title: string;
    description: string;
    category: string | null;
    techStack: string | null;
  }[];
}

export default function Projects({ projects }: ProjectProps) {

  return (
    <section id="projects" className="bg-surface">
      <div className="section-container">
        <SectionHeading
          title="Projects"
          subtitle="Hands-on engineering projects from competitions and real-world challenges"
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Project icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 shadow-md shadow-blue-200/50">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Achievement / Category */}
              {project.category && (
                <div className="flex items-start gap-2 mb-5 bg-amber-50 rounded-xl px-4 py-3 border border-amber-100">
                  <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium text-amber-800">
                    {project.category}
                  </span>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.techStack?.split(",").map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-blue-50 text-primary text-xs font-medium border border-blue-100"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon placeholder */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center">
            <svg className="w-10 h-10 text-slate-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p className="text-slate-400 font-medium text-sm">More projects coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
