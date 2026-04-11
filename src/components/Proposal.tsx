"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "./SectionHeading";

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

const proposalTypes = [
  "Internship Offer",
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Partnership",
  "Consulting",
  "Other",
];

const budgetRanges = [
  "Not Applicable",
  "< $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "To be discussed",
];

export default function Proposal() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      proposalType: formData.get("proposalType") as string,
      budgetRange: formData.get("budgetRange") as string,
      timeline: formData.get("timeline") as string,
      message: formData.get("message") as string,
      honeypot: formData.get("company_url") as string,
    };

    try {
      const res = await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setFormState({
        status: "success",
        message: "Proposal submitted successfully! I'll review it and get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormState({
        status: "error",
        message: error instanceof Error ? error.message : "Failed to send proposal.",
      });
    }
  };

  return (
    <section id="proposal" className="bg-surface">
      <div className="section-container">
        <SectionHeading
          title="Send a Proposal"
          subtitle="Have a business inquiry, collaboration idea, or project offer? Let's talk."
        />

        <div className="max-w-2xl mx-auto">
          {/* Info banner */}
          <div className="mb-8 p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-slate-600">
              This form is for <strong>business inquiries</strong>, <strong>collaboration requests</strong>,{" "}
              <strong>internship offers</strong>, <strong>freelance projects</strong>, and{" "}
              <strong>partnership proposals</strong>. For general messages, use the{" "}
              <a href="#contact" className="text-primary hover:underline font-medium">
                contact form
              </a>
              .
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm space-y-5"
          >
            {/* Honeypot */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="company_url">Company URL</label>
              <input type="text" id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="proposal-fullname" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="proposal-fullname"
                  name="fullName"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="proposal-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="proposal-company"
                  name="company"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div>
              <label htmlFor="proposal-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="proposal-email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="your@company.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="proposal-type" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Proposal Type <span className="text-red-400">*</span>
                </label>
                <select
                  id="proposal-type"
                  name="proposalType"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                >
                  <option value="">Select type</option>
                  {proposalTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="proposal-budget" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Budget Range
                </label>
                <select
                  id="proposal-budget"
                  name="budgetRange"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
                >
                  <option value="">Select range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="proposal-timeline" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Timeline
                </label>
                <input
                  type="text"
                  id="proposal-timeline"
                  name="timeline"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="e.g., 3 months"
                />
              </div>
            </div>

            <div>
              <label htmlFor="proposal-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                Message / Details <span className="text-red-400">*</span>
              </label>
              <textarea
                id="proposal-message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                placeholder="Describe your proposal, project scope, expectations..."
              />
            </div>

            {/* Status messages */}
            {formState.status === "success" && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 text-emerald-700 text-sm border border-emerald-100">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {formState.message}
              </div>
            )}
            {formState.status === "error" && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-700 text-sm border border-red-100">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {formState.message}
              </div>
            )}

            <button
              type="submit"
              disabled={formState.status === "loading"}
              className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {formState.status === "loading" ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Proposal"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
