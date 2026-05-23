import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Proposal from "@/components/Proposal";

import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [projects, education, experience, skills, settingsData] = await Promise.all([
    prisma.project.findMany({
      where: { visible: true },
      orderBy: { order: "asc" },
    }),
    prisma.education.findMany({
      where: { visible: true },
      orderBy: { order: "asc" },
    }),
    prisma.experience.findMany({
      where: { visible: true },
      orderBy: { order: "asc" },
    }),
    prisma.skill.findMany({
      where: { visible: true },
      orderBy: { order: "asc" },
    }),
    prisma.setting.findMany(),
  ]);

  const settings = settingsData.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {} as Record<string, string>);

  return (
    <>
      <Hero settings={settings} />
      <About settings={settings} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />
      <Proposal />
    </>
  );
}
