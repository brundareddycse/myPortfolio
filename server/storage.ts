import {
  projects,
  skills,
  experience,
  contacts,
  certifications,
  type InsertContact,
  type InsertProject,
  type Project,
  type Skill,
  type Experience,
  type Certification,
  type Contact
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getExperience(): Promise<Experience[]>;
  getCertifications(): Promise<Certification[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  seedData(): Promise<void>;
}

export class MemStorage implements IStorage {
  private projects: Project[] = [];
  private skills: Skill[] = [];
  private experience: Experience[] = [];
  private certifications: Certification[] = [];
  private contacts: Contact[] = [];
  private nextId = 1;

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getSkills(): Promise<Skill[]> {
    return this.skills;
  }

  async getExperience(): Promise<Experience[]> {
    return this.experience;
  }

  async getCertifications(): Promise<Certification[]> {
    return this.certifications;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contact: Contact = { ...insertContact, id: this.nextId++ };
    this.contacts.push(contact);
    return contact;
  }

  async seedData(): Promise<void> {
    if (this.projects.length === 0) {
      this.projects = [
        {
          id: this.nextId++,
          title: "EasyRide",
          description: "A responsive, multi-page ride-sharing service concept. Features clean UI/UX designed with HTML5, CSS3, and JavaScript for client-side interactions and form validation.",
          techStack: ["HTML", "CSS", "JavaScript"],
          githubLink: "http://github.com/brundareddycse/EasyRide",
          imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000",
        },
        {
          id: this.nextId++,
          title: "Transaction & User Analytics",
          description: "Financial data analysis project. Designed relational schemas, analyzed revenue trends using SQL, and built performance monitoring views.",
          techStack: ["SQL", "Data Analysis", "Database Design"],
          githubLink: "http://github.com/brundareddycse/Transaction-Analytics",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
        },
        {
          id: this.nextId++,
          title: "JP Morgan Chase Simulation",
          description: "Virtual experience program. Configured Java Spring application with H2 database and Kafka streaming. Integrated REST APIs for data processing.",
          techStack: ["Java", "Spring Boot", "Kafka", "REST API"],
          githubLink: null,
          imageUrl: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000",
        },
      ];

      this.skills = [
        { id: this.nextId++, name: "Python", category: "Languages", proficiency: 90 },
        { id: this.nextId++, name: "Java", category: "Languages", proficiency: 85 },
        { id: this.nextId++, name: "SQL", category: "Languages", proficiency: 85 },
        { id: this.nextId++, name: "HTML/CSS", category: "Frontend", proficiency: 95 },
        { id: this.nextId++, name: "JavaScript", category: "Frontend", proficiency: 85 },
        { id: this.nextId++, name: "Git & GitHub", category: "Tools", proficiency: 90 },
        { id: this.nextId++, name: "MySQL", category: "Tools", proficiency: 85 },
      ];

      this.experience = [
        {
          id: this.nextId++,
          role: "BTech Student (CSE)",
          company: "Mohan Babu University",
          period: "2023 - Present",
          description: "Pursuing Bachelor of Technology in Computer Science. CGPA: 9.46. Developing strong foundation in algorithms, data structures, and software engineering.",
        },
        {
          id: this.nextId++,
          role: "Hackathon Finalist",
          company: "Code Rush 2K25",
          period: "2025",
          description: "Top 20 Team out of 100. Developed 'Smart Transport System' showcasing web development skills and teamwork.",
        },
      ];

      this.certifications = [
        {
          id: this.nextId++,
          name: "Advanced Software Engineering Virtual Experience",
          issuer: "J.P. Morgan Chase & Co. (via Forage)",
          link: "#",
          date: "2024",
        },
        {
          id: this.nextId++,
          name: "Introduction To Front-End Development",
          issuer: "Meta / Coursera",
          link: "#",
          date: "2023",
        }
      ];
    }
  }
}

export const storage = new MemStorage();
