import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <h3 className="text-xl font-bold mb-2">
            Rufat <span className="text-primary-light">Azizzade</span>
          </h3>

          {/* Tagline */}
          <p className="text-slate-400 text-sm max-w-md mb-8">
            Building real-world systems with software, hardware, and practical engineering.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4 mb-8">
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/rufatazizzade"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>

            {/* Email */}
            <Link
              href="mailto:rufatazizzade@gmail.com"
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors duration-200"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-slate-800 pt-6">
            <p className="text-slate-500 text-xs">
              © {currentYear} Rufat Azizzade. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
