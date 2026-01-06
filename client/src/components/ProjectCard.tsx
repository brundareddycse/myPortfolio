"use client"

import { Project } from "@shared/schema";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        {/* Descriptive alt text for Unsplash placeholder fallback */}
        {/* modern abstract technology background */}
        <img 
          src={project.imageUrl || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-xl font-bold text-white font-display">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary/50 text-secondary-foreground font-normal">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-3 pt-2 border-t border-border/50 mt-4 items-center">
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            )}
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors ml-auto"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {/* Preview dialog trigger */}
            <Dialog>
              {/* <DialogTrigger asChild>
                <button className="ml-auto bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium hover:opacity-95 transition">
                  Preview
                </button>
              </DialogTrigger> */}

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                  <img
                    src={project.imageUrl || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80"}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-md"
                  />

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50 text-secondary-foreground font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="px-4 py-2 bg-muted-foreground/10 rounded-md text-sm font-medium hover:underline">
                        View Code
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="px-4 py-2 bg-muted-foreground/10 rounded-md text-sm font-medium hover:underline">
                        Open Demo
                      </a>
                    )}
                  </div>
                </div>

                <DialogFooter />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
