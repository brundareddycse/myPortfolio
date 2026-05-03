import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, User, Code2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold font-display mb-6"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              A passionate developer, lifelong learner, and problem solver.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-6xl mx-auto">

            {/* Main Content */}
            <div className="md:col-span-7 space-y-12">

              {/* Personal Story */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-2 bg-primary/10 rounded-lg text-primary">
                    <User className="w-6 h-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold font-display">Personal Story</h2>
                </div>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                  <p>
                    Hello! I'm Brunda Reddy, an aspiring Computer Science Engineer currently pursuing my B.Tech
                    at Mohan Babu University with a CGPA of 9.32. I have a deep passion for technology and
                    innovation, and my journey into programming began with curiosity about how things work
                    behind the scenes — which quickly evolved into a love for building software.
                  </p>
                  <p>
                    I am a logic-driven problem solver with a strong foundation in Python, Java, SQL, and
                    Front-End Development. I enjoy building efficient systems and am always open to learning
                    new technologies. I'm proficient with tools like Git, GitHub, MySQL, and Firebase, and
                    familiar with agile methodologies — always aiming to deliver innovative solutions that
                    make a real impact.
                  </p>
                </div>
              </motion.section>

              {/* Achievements */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Award className="w-6 h-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold font-display">Achievements</h2>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: "ServiceNow Certified System Administrator (CSA)",
                      date: "Apr 2026",
                      desc: "Earned the globally recognized ServiceNow CSA certification, validating expertise in administering and configuring the ServiceNow platform.",
                    },
                    {
                      title: "Code Rush 2K25 Hackathon Finalist",
                      date: "Sept 2025",
                      desc: "Selected among Top 20 Teams out of 100 at Mohan Babu University for developing a Smart Transport System in the domain of Web Development.",
                    },
                    {
                      title: "JP Morgan Chase – Advanced Software Engineering",
                      date: "Oct 2025",
                      desc: "Completed a 5-hour virtual simulation involving Java Spring, H2 database, Kafka streaming, and REST API integration via Forage.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      className="bg-card p-6 rounded-xl border border-border shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded shrink-0 ml-2">{item.date}</span>
                      </div>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

            </div>

            {/* Sidebar */}
            <div className="md:col-span-5 space-y-12">

              {/* Education */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold font-display">Education</h2>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: "B.Tech in Computer Science & Engineering",
                      institution: "Mohan Babu University",
                      grade: "9.32 CGPA",
                      year: "2023 – Present",
                      active: true,
                    },
                    {
                      title: "Intermediate (MPC)",
                      institution: "Sri Chaitanya Junior College",
                      grade: "95.2%",
                      year: "2021 – 2023",
                      active: false,
                    },
                    {
                      title: "Secondary Education (10th)",
                      institution: "Sri Chaitanya High School",
                      grade: "10 CGPA",
                      year: "Completed 2021",
                      active: false,
                    },
                  ].map((edu, index) => (
                    <motion.div
                      key={edu.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.15 }}
                      whileHover={{ y: -3 }}
                      className="bg-card p-5 rounded-xl border border-border shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`mt-1 h-3 w-3 rounded-full shrink-0 ${edu.active ? "bg-primary" : "bg-muted-foreground"}`} />
                        <div>
                          <h3 className="font-bold text-base leading-snug">{edu.title}</h3>
                          <p className="text-primary font-medium text-sm mt-0.5">{edu.institution}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm text-muted-foreground">{edu.grade}</span>
                            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">{edu.year}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Interests */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-2 bg-primary/10 rounded-lg text-primary">
                    <BookOpen className="w-6 h-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold font-display">Interests</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Web Development", "Data Analysis", "Artificial Intelligence", "Cloud Computing", "System Design", "Open Source"].map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.08 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground cursor-default"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </motion.section>

              {/* Skills */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Code2 className="w-6 h-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold font-display">Skills</h2>
                </div>
                <div className="space-y-5">
                  {Object.entries({
                    Languages: ["Python", "Java", "SQL"],
                    Frontend: ["HTML", "CSS", "JavaScript"],
                    Tools: ["Git", "GitHub", "MySQL", "Firebase"],
                  }).map(([category, items], catIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + catIndex * 0.1 }}
                    >
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + catIndex * 0.1 + index * 0.05 }}
                            whileHover={{ scale: 1.08, y: -2 }}
                            className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
