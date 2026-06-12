import { useState } from "react";
import { motion } from "framer-motion";
import { Folder, FolderOpen, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EasyRide",
    url: "https://kadimisettijaswanth.github.io/coderush2k25/",
    color: "bg-red-500",
  },
  {
    title: "MediSafe",
    url: "https://medisafe-sahayak.lovable.app/",
    color: "bg-amber-400",
  },
  {
    title: "SQL Analytics",
    url: "https://github.com/brundareddycse/Transaction-User-Behavior-Analytics",
    color: "bg-sky-500",
  },
  {
    title: "Stranger Things",
    url: "https://strangerthings033.lovable.app/",
    color: "bg-blue-600",
  },
];

export default function ProjectFolder() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold font-display">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-2">
            Click the folder to explore my work
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-[320px] h-[260px]">

            {/* Project Cards */}
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                animate={{
                  y: open ? -(index + 1) * 35 : 0,
                  rotate: open ? (index - 1.5) * 6 : 0,
                  scale: open ? 1 : 0.95,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className={`
                  absolute left-6 right-6 h-28 rounded-2xl
                  shadow-2xl cursor-pointer text-white
                  ${project.color}
                `}
                style={{
                  top: `${40 + index * 12}px`,
                  zIndex: 10 - index,
                }}
              >
                <div className="flex justify-between items-start p-5">
                  <div>
                    <h3 className="font-bold text-lg">
                      {project.title}
                    </h3>

                    <span className="text-xs opacity-80">
                      Click to Open
                    </span>
                  </div>

                  <ExternalLink size={18} />
                </div>
              </motion.a>
            ))}

            {/* Folder */}
            <motion.div
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(!open)}
              className="
                absolute bottom-0 left-0 right-0
                h-40 cursor-pointer
              "
            >
              {/* Folder Tab */}
              <div className="absolute left-6 top-0 w-28 h-10 bg-blue-700 rounded-t-2xl" />

              {/* Folder Body */}
              <div
                className="
                  absolute bottom-0 w-full h-36
                  rounded-3xl
                  bg-gradient-to-b
                  from-blue-500
                  to-blue-700
                  shadow-2xl
                "
              >
                <div className="absolute left-5 top-4">
                  {open ? (
                    <FolderOpen className="text-white" size={28} />
                  ) : (
                    <Folder className="text-white" size={28} />
                  )}
                </div>

                <div className="absolute right-5 top-5 text-white text-sm font-semibold">
                  PROJECTS {projects.length}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
