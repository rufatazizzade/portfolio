import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Systems Programming",
    description: "Passionate about Rust, embedded systems, and low-level software architecture.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Hardware-Software Integration",
    description: "Building MVP-stage products that bridge firmware, sensors, and real-time data processing.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud & Edge Solutions",
    description: "Interested in scalable cloud architectures, edge computing, and application design.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Cross-Functional Collaboration",
    description: "Experienced in working with electronics engineers, product teams, and stakeholders.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-surface">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Building practical engineering solutions at the intersection of software and hardware"
        />

        {/* About text */}
        <div className="max-w-3xl mx-auto mb-14">
          <p className="text-slate-600 leading-relaxed text-base md:text-lg text-center">
            I&apos;m a motivated Software Engineering student at{" "}
            <span className="font-semibold text-slate-800">Czech Technical University in Prague</span>.
            My interests lie in{" "}
            <span className="font-semibold text-primary">Rust</span>, systems programming,
            embedded systems, and real-time software-hardware integration. I have experience building
            MVP-stage products, working with cross-functional technical teams, and contributing to
            practical engineering solutions. I&apos;m especially interested in cloud and edge solutions,
            application design, and scalable technical systems.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
