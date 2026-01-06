import { z } from "zod";

export const insertProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  techStack: z.array(z.string()),
  link: z.string().optional().nullable(),
  githubLink: z.string().optional().nullable(),
  imageUrl: z.string().optional(),
});

export const insertSkillSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  proficiency: z.number().min(0).max(100).optional(),
});

export const insertExperienceSchema = z.object({
  role: z.string().min(1, "Role is required"),
  company: z.string().min(1, "Company is required"),
  period: z.string().min(1, "Period is required"),
  description: z.string().min(1, "Description is required"),
});

export const insertCertificationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  issuer: z.string().min(1, "Issuer is required"),
  date: z.string().min(1, "Date is required"),
  link: z.string().optional().nullable(),
});

export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export type Project = z.infer<typeof insertProjectSchema> & { id: number };
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Skill = z.infer<typeof insertSkillSchema> & { id: number };
export type Experience = z.infer<typeof insertExperienceSchema> & { id: number };
export type Certification = z.infer<typeof insertCertificationSchema> & { id: number };
export type Contact = z.infer<typeof insertContactSchema> & { id: number; createdAt?: Date };
export type InsertContact = z.infer<typeof insertContactSchema>;
