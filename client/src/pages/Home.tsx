import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Layout, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useSkills } from "@/hooks/use-portfolio";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
           Welcome to my portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6">
          Hi, I'm <br />
          <span className="text-gradient">Brunda Reddy</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
         Computer Science Student | Problem Solver | Tech Enthusiast
Passionate about developing innovative software solutions using modern technologies, with a strong focus on learning, collaboration, and real-world impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <Button size="lg" className="rounded-full px-8 text-base h-12">
              View My Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-12">
              Get in Touch
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const SkillsPreview = () => {
  const { data: skills } = useSkills();
  
  // Static icons for visual appeal
  const features = [
    { icon: <Layout className="w-6 h-6" />, title: "Frontend", desc: " HTML, CSS, Javascript" },
    { icon: <Database className="w-6 h-6" />, title: "Backend", desc: " SQL, MySql" },
    { icon: <Terminal className="w-6 h-6" />, title: "Tools & Concepts", desc: "Data structures, Git, Github, Replit, Notion AI" },
    { icon: <Code2 className="w-6 h-6" />, title: "Languages", desc: "Python, Java, JS" },
  ];

  return (
    <section className="py-20 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-display mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground">A snapshot of my technical toolkit</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
    
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to work together?</h2>
      <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
        I'm currently looking for internships and entry-level opportunities. 
        Let's build something amazing.
      </p>
      <Link href="/contact">
        <Button size="lg" variant="secondary" className="rounded-full px-10 text-primary font-bold h-14">
          Say Hello
        </Button>
      </Link>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <SkillsPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
