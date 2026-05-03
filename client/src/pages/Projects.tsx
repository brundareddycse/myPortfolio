import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const localProjects = [
  {
    id: 1,
    title: "EasyRide",
    description: "A responsive multi-page ride-sharing service concept built with HTML, CSS and JavaScript.",
    link: "https://kadimisettijaswanth.github.io/coderush2k25/",
    techStack: [],
    githubLink: "https://github.com/brundareddycse/EasyRide",
    imageUrl: "/easyride2.png",
  },
  {
    id: 2,
    title: "Transaction & User Analytics",
    description: "Financial data analysis project using SQL — designing schemas, analyzing trends and building views for performance monitoring.",
    link: null,
    techStack: [],
    githubLink: "https://github.com/brundareddycse/Transaction-User-Behavior-Analytics",
    imageUrl: "/sql1.png",
  },
  {
    id: 3,
    title: "MediSafe — Work in Progress",
    description: "A healthcare support web app for managing medical assistance and safety. Currently under active development — more features coming soon!",
    link: "https://medisafe-sahayak.lovable.app/",
    techStack: [],
    githubLink: "https://github.com/brundareddycse/medisafe-sahayak",
    imageUrl: "/medisafe.png",
  },
  {
    id: 4,
    title: "Stranger Things Fan Page",
    description: "Built just for fun — a fan website for Stranger Things with a nostalgic 80s feel. Because why not.",
    link: "https://strangerthings033.lovable.app/",
    techStack: [],
    githubLink: "https://github.com/brundareddycse/strangerthings033",
    imageUrl: "/strangerthings.png",
  },
];

export default function Projects() {
  const projects = localProjects;
  const isLoading = false;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold font-display mb-6"
            >
              My Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              A collection of ideas turned into reality.
            </motion.p>
          </div>

          {/* Loader */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
