import Link from "next/link";

export default function Hero({ settings = {} }: { settings?: Record<string, string> }) {
  const [firstName, ...lastNameParts] = (settings.hero_title || "Rufat Azizzade").split(" ");
  const lastName = lastNameParts.join(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl animate-pulse-slow delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl" />
      </div>

      <div className="section-container text-center">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-primary text-xs font-medium border border-blue-100">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {settings.about_location || "Based in Prague"}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 text-accent text-xs font-medium border border-sky-100">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            Software Engineering Student
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to Opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up">
          <span className="text-slate-900">{firstName} </span>
          {lastName && <span className="gradient-text">{lastName}</span>}
        </h1>

        {/* Headline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto mb-6 animate-fade-in-up delay-100">
          {settings.hero_headline || "Software Engineering Student · Rust & Systems Programming Enthusiast"}
        </p>

        {/* Short Intro */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          {settings.hero_intro || "Motivated Software Engineering student..."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fade-in-up delay-300">
          <Link
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white text-primary text-sm font-semibold border border-blue-200 hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Me
          </Link>
          <Link
            href="#proposal"
            className="px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300"
          >
            Send Proposal
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-in delay-600">
          <Link
            href="#about"
            className="inline-flex flex-col items-center text-slate-300 hover:text-primary transition-colors"
          >
            <span className="text-xs mb-2">Scroll down</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
