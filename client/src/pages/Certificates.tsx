import React from 'react';
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
    imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8Al9b6phoAktT6ogAAldX6oQD6pA791aiGwOX/+Ov6pxv6qiv+7M+a0+32+/37vVsAntn+8t78yH76rTL8zIQ0p9yq2O/7s0Pv+v394sP6ryl2vuVes+Ha8PkAjtP/+/b7uVLG5vX816BErt+HxujS6/f+7dL5lwD7uUz93rb6sTwAidH8zI+z3/Ikotr8xnT7vmP806P94LppueN+xOe84fP805Tk9fvQ7fiU1O793a38yXlZteH8yIj80Zp/PP+ZAAAHYElEQVR4nO2aeVfqOheHO6X1tExlFIG2THJAoXBErRf1fP9v9e6kBdKC4NLe96rr9/yhdCftykOm3aiiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCDsW86nc4kFWq5oTv+j5rzL2AXLEsrpkIlnem//qPm/AvYBU1zsobqVzC0iVye82UNO5eX/WoOz/m6hqZlFX64oabVf7bhb8P44X24rNUaeSw1X9cwL2D4/yUI5M/iKvkVf8gUy9d2sViciPikWEwVnDcsCw5aUy5nCgZEFBddP/zTVpSIAtcnnpBmctHo9/urxuYqnn2/TdOpKkWr40xtxb6oUHbpTBt3ceXqfOqYVKFysZ2qf+iyrwR3fcPkBcvZuw2vSyRX9311VGpLdQbjF5dR2HdH40FirPr+bYu8SiPm67ekVrr1/bCttNYhVWVh1zvlV9EMwyIMQyvUAmW7WxRNzbqsPhYMSyOotELrq7104msKOMNAPODC0KxK9TKJU0G9+C7D9r2qM6aqKmO629rW8Josjoo464qeK7tM1VvtriuKfE88iDWfwqSmqqvdN/vxjrJj3n5DaN7YsqFWn9IPUURNNwq2fWPwyqYZB5ZbQ61eSJ5iCcfhOwyjJjWX6QS1kumlbQ+qSTSJj9qJIVtvbxB9qKuq6/IaHFHxDcEiCRqd5d/hcDhfdsyMoUaFTu3vcF7hTbf6N/znang3m08NrljbGgqvm9rrfFXntxmbs4aRSo1m64X31FqrvGOSXhwwPVyXFk/eYtzkjqLlZeFCGs3uuLRYtGPDONLr9UJRcX3c8NKiJm9nlH23yhhSP4m9P5jVuRxVdoqBCAxFL052hlZdzOLAfuQFjn3GsNyjYRY+xNGHkFoYxivJYPQQJZXbY947+kNiqDJ33JYexCPhQ5vWmajE+1gdHEAP06bJNg0xQ7sPGNlgtiHlW373RbqxknApDo7F7ysbgl2cM+TzStypKRCr6kTdj7sF62z50r9MlKhttjT3qRXZ0nG5MzXjMBveG1uU+OrN2wy9mTisMH9Xc0HqV7m9QQd2WDe1qtRqkDPkIK+1vGZOweti8ci/u3NhwkXV399ctPtDbBw9QlKGhJcvCUUPzTgrXybAT7K+p/zVnEq+lN1JcFBhXsmHDcqyNbLjwaSmUGuSRgv902D7e1dR1wjDMFNDqur+OmnS9yN4eG1qVtw3rcnpaoVn4LNezYpGLg2fwmivZsGZoZspwTaPyXrqjPKJASTngQRfzS6yl3ax6GEmB3vFxrtzxobjKpNnSfpgxNP7I9TrUyUcNZzRuO6cMo5C+8dTCwBu4TwV2KY1kmP4CxH4oj8p19jtICMRyYqwu4hXyrOHFuwyL1LumbPhsGilDj0+rrsR9KBk+3DdVnqiMxot/9qNUHpNHDO8p0Du26z8aSYJS6DcmQV6GDpVUJcMr2m6rkuHAV5O9eoe6NfRGbJfqiF+h9x7D7luGNBPNbRpmVIr5GFZJzbRP7BYt/cCQJceMXqgnKVuSkH3aUAk2lMskyefvTS6GE96HxTOGbjNDyCdaOe4+nbmUk/kicfu0IWFfPde1eLhO8jAU87B6xrAZtdNEvH1jvs+xUSkivMGYlthcDEWrXh2++q/yMLyjb8sMThhe8yXyWHMinr8xadX38zOMlz6tHuRguOQ5rLyWDvuV/lAy9EjQv1YOEYvsixTI1VB5NeIk5dOG4g0ktR+altmQDNvNN/ZnvsimVPI1nH3YULPk9I7vQOmsjXZ8QzYUeagrpyQJfIKmUoF8DXlTC/bHDAv7+XZFK6lIyU8Yen5mNCZc8z7cJy候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",
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
