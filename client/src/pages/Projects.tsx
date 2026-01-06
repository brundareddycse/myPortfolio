import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useProjects } from "@/hooks/use-portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";



const localProjects = [
  {
    id: 1,
    title: "EasyRide",
    description: "A responsive multi-page ride-sharing service concept.",
    link: "https://kadimisettijaswanth.github.io/coderush2k25/",
    techStack: [],
    githubLink: "https://github.com/brundareddycse/EasyRide",
    // preview: "https://brundareddycse.github.io/EasyRide/",
    imageUrl: "/easyride2.png",
  },
  {
    id: 2,
    title: "Transaction & User Analytics",
    description: "Financial data analysis project using SQL.",
    link: null,
    techStack: [],
    githubLink: "https://github.com/brundareddycse/Transaction-User-Behavior-Analytics",
    imageUrl: "/sql1.png",
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

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
