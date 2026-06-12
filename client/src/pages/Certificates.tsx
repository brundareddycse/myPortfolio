// import { Award } from "lucide-react";
// import CertificateCard from "@/components/CertificateCard";

// export default function Certificates() {
//   const certs = [
//     {
//       id: 1,
//       title: "SQL for Data Science",
//       issuer: "Coursera / UC Davis",
//       date: "2023",
//       link: "#",
//       tags: ["SQL", "Data"],
//       imageUrl: null,
//     },
//     {
//       id: 2,
//       title: "Transaction & User Analytics",
//       issuer: "FinTech Academy",
//       date: "2024",
//       link: "#",
//       tags: ["Analytics", "SQL"],
//       imageUrl: null,
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-24 pb-12 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center gap-3 mb-8">
//             <Award className="w-8 h-8 text-primary" />
//             <h1 className="text-4xl font-bold">Certifications</h1>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certs.map((cert, index) => (
//               <CertificateCard key={cert.id} certificate={cert} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";

const localCertificates = [
  {
    id: 1,
    title: "ServiceNow Certified Application Developer (CAD)",
    issuer: "ServiceNow",
    date: "Apr 2026",
    link: "/servicenow CAD.pdf",
    imageUrl: "/cad.png",
    tags: ["ServiceNow", "CAD", "Development"]
  },
  {
    id: 2,
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    date: "Apr 2026",
    link: "/servicenow-csa.pdf",
    imageUrl: "/csa.png",
    tags: ["ServiceNow", "CSA", "Administration"]
  },
  {
    id: 3,
    title: "Gen AI Academy 2.0",
    issuer: "Hack2Skill",
    date: "Dec 2025",
    link: "https://certificate.hack2skill.com/user/genai2completion1/2025H2S10GENAI-C100135",
    imageUrl: "/genai.png",
    tags: ["Generative AI", "AI Academy"]
  },
  {
    id: 4,
    title: "JPMorganChase - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "Oct 2025",
    link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68eca6eb11e4527acf52b6cd_1760641074935_completion_certificate.pdf",
    imageUrl: "/forage.png",
    tags: ["Software Engineering", "Job Simulation"]
  },
  {
    id: 5,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
    link: "/oracleai.pdf",
    imageUrl: "https://download.logo.wine/logo/Oracle_Corporation/Oracle_Corporation-Logo.wine.png",
    tags: ["Oracle Cloud", "OCI AI", "Foundations"]
  },
  {
    id: 6,
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "2026",
    link: "/anthropic.pdf",
    imageUrl: "https://aragonresearch.com/wp-content/uploads/2025/11/1965614-anthropic-announces-enhancements-to-claude-ai-models.webp",
    tags: ["Anthropic", "Claude AI", "Foundations"]
  },
  {
    id: 7,
    title: "Introduction To Front End Development",
    issuer: "SimpliLearn | Skillup",
    date: "June 2025",
    link: "/simplilearn.pdf",
    imageUrl: "data:image/png;base64,...",
    tags: ["Front-End", "Web Dev", "UI Layouts"]
  },
  {
    id: 8,
    title: "Code Rush 2K25 Hackathon – Certificate of Participation",
    issuer: "FACE Prep Campus",
    date: "Sept 2025",
    link: "/coderush.pdf",
    imageUrl: "https://i.pinimg.com/1200x/98/c9/83/98c983f54fe9c4ef9a218df6e925c793.jpg",
    tags: ["Hackathon", "Coding Contest"]
  },
];

export default function Certificates() {
  const certificates = localCertificates;
  const isLoading = false;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold font-display mb-6"
            >
              My Certifications
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Validating my expertise through global standards.
            </motion.p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <CertificateCard 
                  key={cert.id} 
                  certificate={cert} 
                  index={index} 
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
