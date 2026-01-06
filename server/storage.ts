import { db } from "./db";
import {
  projects,
  skills,
  experience,
  contacts,
  type InsertContact,
  type InsertProject,
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<typeof projects.$inferSelect[]>;
  getSkills(): Promise<typeof skills.$inferSelect[]>;
  getExperience(): Promise<typeof experience.$inferSelect[]>;
  createContact(contact: InsertContact): Promise<typeof contacts.$inferSelect>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProjects() {
    return await db.select().from(projects);
  }

  async getSkills() {
    return await db.select().from(skills);
  }

  async getExperience() {
    return await db.select().from(experience);
  }

  async createContact(contact: InsertContact) {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }

  async seedData() {
    const existingProjects = await this.getProjects();
    if (existingProjects.length === 0) {
      await db.insert(projects).values([
        {
          title: "EasyRide",
          description: "A responsive, multi-page ride-sharing service concept. Features clean UI/UX designed with HTML5, CSS3, and JavaScript for client-side interactions and form validation.",
          techStack: ["HTML", "CSS", "JavaScript"],
          githubLink: "http://github.com/brundareddycse/EasyRide",
          imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000",
        },
        {
          title: "Transaction & User Analytics",
          description: "Financial data analysis project. Designed relational schemas, analyzed revenue trends using SQL, and built performance monitoring views.",
          techStack: ["SQL", "Data Analysis", "Database Design"],
          githubLink: "http://github.com/brundareddycse/Transaction-Analytics",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        },
        {
          title: "JP Morgan Chase Simulation",
          description: "Virtual experience program. Configured Java Spring application with H2 database and Kafka streaming. Integrated REST APIs for data processing.",
          techStack: ["Java", "Spring Boot", "Kafka", "REST API"],
          imageUrl: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000",
        },
      ]);

      await db.insert(skills).values([
        { name: "Python", category: "Languages", proficiency: 90 },
        { name: "Java", category: "Languages", proficiency: 85 },
        { name: "SQL", category: "Languages", proficiency: 85 },
        { name: "HTML/CSS", category: "Frontend", proficiency: 95 },
        { name: "JavaScript", category: "Frontend", proficiency: 85 },
        { name: "Git & GitHub", category: "Tools", proficiency: 90 },
        { name: "MySQL", category: "Tools", proficiency: 85 },
      ]);

      await db.insert(experience).values([
        {
          role: "BTech Student (CSE)",
          company: "Mohan Babu University",
          period: "2023 - Present",
          description: "Pursuing Bachelor of Technology in Computer Science. CGPA: 9.46. Developing strong foundation in algorithms, data structures, and software engineering.",
        },
        {
          role: "Virtual Intern",
          company: "J.P. Morgan Chase & Co.",
          period: "Certification",
          description: "Advanced Software Engineering Virtual Experience. Worked on banking software simulation, backend configuration, and API integration.",
        },
        {
          role: "Hackathon Finalist",
          company: "Code Rush 2K25",
          period: "2025",
          description: "Top 20 Team out of 100. Developed 'Smart Transport System' showcasing web development skills and teamwork.",
        },
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
