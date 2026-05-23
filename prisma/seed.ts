import { prisma } from "../src/lib/prisma";

async function main() {
  // Add initial projects
  await prisma.project.createMany({
    data: [
      {
        title: "SpecDeaf",
        description: "Built a wearable speech-to-text system for hearing-impaired individuals. Implemented real-time transcription using AI-based speech recognition and designed hardware-software integration for wearable display systems.",
        category: "1st Place – HealthTech Entrepreneurship, World Robotics Olympiad",
        techStack: "AI, Accessibility, Wearable Tech, Speech-to-Text, Hardware Integration",
        featured: true,
        visible: true,
        order: 1,
      },
      {
        title: "Pmesh",
        description: "Developed Pmesh, an early leak detection system that uses acoustic sensing and intelligent analysis to detect industrial leaks at an early stage and improve safety and operational efficiency.",
        category: "2x 1st Place – Teknofest",
        techStack: "Industrial Safety, Acoustic Sensing, Intelligent Monitoring, MVP, Embedded Systems",
        featured: true,
        visible: true,
        order: 2,
      },
    ],
  });

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
