import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, User } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold font-display mb-6"
            >
              About Me
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              A passionate developer, lifelong learner, and problem solver.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="md:col-span-7 space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <User className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold font-display">Personal Story</h2>
                </div>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                  <p>
                    Hello! I'm Brunda Reddy, an aspiring Computer Science Engineer with a deep passion for technology 
                    and innovation. My journey into the world of programming began with curiosity about how things 
                    work behind the scenes, which quickly evolved into a love for building software.
                  </p>
                  <p>
                    I specialize in Full-Stack Development with a strong foundation in Python and Java. 
                    I enjoy tackling complex problems and turning them into simple, elegant solutions. 
                    Currently, I'm focused on expanding my knowledge in modern web technologies and 
                    contributing to open-source projects.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold font-display">Achievements</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">Code Rush 2K25 Finalist</h3>
                      <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">2025</span>
                    </div>
                    <p className="text-muted-foreground">Demonstrated exceptional coding skills and problem-solving abilities in a competitive environment.</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">JP Morgan Chase Virtual Experience</h3>
                      <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">2024</span>
                    </div>
                    <p className="text-muted-foreground">Gained practical insights into financial technology and enterprise software development practices.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar / Timeline */}
            <div className="md:col-span-5 space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold font-display">Education</h2>
                </div>
                
                <div className="relative border-l-2 border-border ml-3 space-y-10 pl-8 py-2">
                  <div className="relative">
                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                    <h3 className="font-bold text-lg">B.Tech in Computer Science</h3>
                    <p className="text-primary font-medium mb-1">MBU • 9.46 CGPA</p>
                    <p className="text-sm text-muted-foreground">Current</p>
                  </div>
                  
                  <div className="relative">
                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground" />
                    <h3 className="font-bold text-lg">Intermediate Education</h3>
                    <p className="text-primary font-medium mb-1">Sri Chaitanya • 95.2%</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-muted-foreground" />
                    <h3 className="font-bold text-lg">Secondary Education</h3>
                    <p className="text-primary font-medium mb-1">Sri Chaitanya • 10 GPA</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold font-display">Interests</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Web Development", "Data Analysis", "Artificial Intelligence", "System Design", "Open Source", "UI/UX Design"].map(interest => (
                    <span key={interest} className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                      {interest}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
