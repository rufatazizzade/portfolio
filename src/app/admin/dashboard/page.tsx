import { prisma } from "@/lib/prisma";
import { Briefcase, Code2, Award, GraduationCap } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [projectsCount, skillsCount, experienceCount, educationCount] = await Promise.all([
    prisma.project.count(),
    prisma.skill.count(),
    prisma.experience.count(),
    prisma.education.count(),
  ]);

  const stats = [
    { name: "Total Projects", value: projectsCount, icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "Skills", value: skillsCount, icon: Code2, color: "text-emerald-600", bg: "bg-emerald-100" },
    { name: "Experience Items", value: experienceCount, icon: Award, color: "text-amber-600", bg: "bg-amber-100" },
    { name: "Education", value: educationCount, icon: GraduationCap, color: "text-purple-600", bg: "bg-purple-100" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.name}</p>
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Welcome to your Admin Panel</h2>
        <p className="text-slate-600">
          Use the sidebar to navigate through different sections of your portfolio. You can add, edit, and delete items dynamically. Changes will be reflected on your public landing page instantly.
        </p>
      </div>
    </div>
  );
}
