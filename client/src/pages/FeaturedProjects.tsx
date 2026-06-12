import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "EasyRide",
    url: "https://kadimisettijaswanth.github.io/coderush2k25/",
    type: "Live Demo",
  },
  {
    name: "Transaction & User Analytics",
    url: "https://github.com/brundareddycse/Transaction-User-Behavior-Analytics",
    type: "GitHub",
  },
  {
    name: "MediSafe",
    url: "https://medisafe-sahayak.lovable.app/",
    type: "Live Demo",
  },
  {
    name: "Stranger Things Fan Page",
    url: "https://strangerthings033.lovable.app/",
    type: "Live Demo",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold font-display mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Open a project directly from my portfolio.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">📁</div>
            <div>
              <h3 className="font-bold text-xl">PROJECTS</h3>
              <p className="text-sm text-muted-foreground">
                {projects.length} Files
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-3 rounded-xl border border-border p-4 hover:bg-muted transition-all"
              >
                <FileText className="w-5 h-5 text-primary" />

                <span className="font-medium">
                  {project.name}
                </span>

                <span className="ml-auto text-xs text-muted-foreground">
                  {project.type}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
