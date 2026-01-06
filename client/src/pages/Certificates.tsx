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
import { Award, Loader2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const localCertificates = [
  {
    id: 1,
    title: "Gen AI Academy 2.0",
    issuer: "Hack2Skill",
    date: "Dec 2025",
    link: "https://certificate.hack2skill.com/user/genai2completion1/2025H2S10GENAI-C100135",
    imageUrl: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2022-04-14T12%3A22%3A27.833Z-RyWgduZR_400x400.jpg", // Make sure this is in your public folder
  },
  {
    id: 2,
    title: "JPMorganChase - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "Oct 2025",
    link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68eca6eb11e4527acf52b6cd_1760641074935_completion_certificate.pdf",
    imageUrl: "https://www.wpunj.edu/dA/0e455dd196/30659_Website_Blocks_2.rev.1722361639.png?language_id=1",
  },

  {
    id: 3,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=10C399EDD9DF7125945A55F88A7CBFEBD2FA6E388FAA166D27A4DE5896AB2BF9",
    imageUrl: "data:image/png;base64,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",
  },
  {
    id: 4,
    title: "AWS Student Community Day – Tirupati 2025 (Participation)",
    issuer: "AWS Cloud Club Mohan Babu University",
    date: "2025",
    link: "/aws.pdf",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D12AQGqe_XwQ_Qmtw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1686370763629?e=2147483647&v=beta&t=mNRhLLq9f0Xng5LCO_CIku4f6O2QVuNQlQOJZvPHZhQ",
  },
  {
    id: 5,
    title: "Introduction To Front End Development",
    issuer: "SimpliLearn | Skillup",
    date: "June 2025",
    link: "/simplilearn.pdf",
    imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8Al9b6phoAktT6ogAAldX6oQD6pA791aiGwOX/+Ov6pxv6qiv+7M+a0+32+/37vVsAntn+8t78yH76rTL8zIQ0p9yq2O/7s0Pv+v394sP6ryl2vuVes+Ha8PkAjtP/+/b7uVLG5vX816BErt+HxujS6/f+7dL5lwD7uUz93rb6sTwAidH8zI+z3/Ikotr8xnT7vmP806P94LppueN+xOe84fP805Tk9fvQ7fiU1O793a38yXlZteH8yIj80Zp/PP+ZAAAHYElEQVR4nO2aeVfqOheHO6X1tExlFIG2THJAoXBErRf1fP9v9e6kBdKC4NLe96rr9/yhdCftykOm3aiiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCDsW86nc4kFWq5oTv+j5rzL2AXLEsrpkIlnem//qPm/AvYBU1zsobqVzC0iVye82UNO5eX/WoOz/m6hqZlFX64oabVf7bhb8P44X24rNUaeSw1X9cwL2D4/yUI5M/iKvkVf8gUy9d2sViciPikWEwVnDcsCw5aUy5nCgZEFBddP/zTVpSIAtcnnpBmctHo9/urxuYqnn2/TdOpKkWr40xtxb6oUHbpTBt3ceXqfOqYVKFysZ2qf+iyrwR3fcPkBcvZuw2vSyPX9311VGpLdQbjF5dR2HdH40FirPr+bYu8SiPm67ekVrr1/bCttNYhVWVh1zvlV9EMwyIMQyvUAmW7WxRNzbqsPhYMSyOotELrq7104msKOMNAPODC0KxK9TKJU0G9+C7D9r2qM6aqKmO629rW8Josjoo464qeK7tM1VvtriuKfE88iDWfwqSmqqvdN/vxjrJj3n5DaN7YsqFWn9IPUURNNwq2fWPwyqYZB5ZbQ61eSJ5iCcfhOwyjJjWX6QS1kumlbQ+qSTSJj9qJIVtvbxB9qKuq6/IaHFHxDcEiCRqd5d/hcDhfdsyMoUaFTu3vcF7hTbf6N/znang3m08NrljbGgqvm9rrfFXntxmbs4aRSo1m64X31FqrvGOSXhwwPVyXFk/eYtzkjqLlZeFCGs3uuLRYtGPDONLr9UJRcX3c8NKiJm9nlH23yhhSP4m9P5jVuRxVdoqBCAxFL052hlZdzOLAfuQFjn3GsNyjYRY+xNGHkFoYxivJYPQQJZXbY947+kNiqDJ33JYexCPhQ5vWmajE+1gdHBO0abJNg0xQ7sPGNlgtiHlW373RbqxknApDo7F7ysbgl2cM+TzStypKRCr6kTdj7sF62z50r9MlKhttjT3qRXZ0nG5MzXjMBveG1uU+OrN2wy9mTisMH9Xc0HqV7m9QQd2WDe1qtRqkDPkIK+1vGZOweti8ci/u3NhwkXV399ctPtDbBw9QlKGhJcvCUUPzTgrXybAT7K+p/zVnEq+lN1JcFBhXsmHDcqyNbLjwaSmUGuSRgv902D7e1dR1wjDMFNDqur+OmnS9yN4eG1qVtw3rcnpaoVn4LNezYpGLg2fwmivZsGZoZspwTaPyXrqjPKJASTngQRfzS6yl3ax6GEmB3vFxrtzxobjKpNnSfpgxNP7I9TrUyUcNZzRuO6cMo5C+8dTCwBu4TwV2KY1kmP4CxH4oj8p19jtICMRyYqwu4hXyrOHFuwyL1LumbPhsGilDj0+rrsR9KBk+3DdVnqiMxot/9qNUHpNHDO8p0Du26z8aSYJS6DcmQV6GDpVUJcMr2m6rkuHAV5O9eoe6NfRGbJfqiF+h9x7D7luGNBPNbRpmVIr5GFZJzbRP7BYt/cCQJceMXqgnKVuSkH3aUAk2lMskyefvTS6GE96HxTOGbjNDyCdaOe4+nbmUk/kicfu0IWFfPde1eLhO8jAU87B6xrAZtdNEvH1jvs+xUSkivMGYlthcDEWrXh2++q/yMLyjb8sMThhe8yXyWHMinr8xadX38zOMlz6tHuRguOQ5rLyWDvuV/lAy9EjQv1YOEYvsixTI1VB5NeIk5dOG4g0ktR+altmQDNvNN/ZnvsimVPI1nH3YULPk9I7vQOmsjXZ8QzYUeagrpyQJfIKmUoF8DXlTC/bHDAv7+XZFK6lIyU8Yen5mNCZc8z7cJy9lvo/nZxjQ+63VVz5kSK+O86Tuhh8amHzWnTBUXnhnrVMt4hd8grLRLtzVP71bzGc7h+qKD667DxryQ47VcDJ5nIpzjMvgjGHUFFtdS2wR5XbkjZtiXq55ODH3ejnkNK9mZzkfiiMMhy/x4uTlQ32oSQc4liVStFOGykCkZLrb+/XrV2/k6nq88lzf8vytV3oatLq8Pz9vaFjxKRRvmeHEL8MfMLzpxx0Z9+ZN/FePk4aKJ45hxNESz9BYsraW4nMl3+dR9vLpHX9T0Axx2EaezjL5c8xbhoZlpgwdw9jvFrXC9kyy8Bwo7zBUojHPzpKclKnN5NBm4SZRXW0uPJ8xVxiyjKHP9Iwh04+vNMW/q369M63MZ7s/N6VOhPfUpv3pTL61UavxLyXZD+0/z/1+v/K6n9k2PyLOGN76t/u3uPaiOwopAW2+jFv7F/xyqzsiuq0Bn66j0UuklJuuq6YMW1QjtVC16B2s9NZamj6kPzzVl+LHbt/v+EduiAM7w4Mj+OOH8vtY8umw0jvO8nPjMKc5YGf4PYGhAsMvDwwVGH55YKh8f0Pzxxs6nc7qdJVvbvgOYPj9geH3Z2mav5/PV/vG8P9UyOVfxwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD35n+eTbfgFvNSBwAAAABJRU5ErkJggg==",
  },
  {
    id: 6,
    title: "Code Rush 2K25 Hackathon – Certificate of Participation",
    issuer: "FACE Prep Campus",
    date: "Sept 2025",
    link: "/coderush.pdf",
    imageUrl: "https://i.pinimg.com/1200x/98/c9/83/98c983f54fe9c4ef9a218df6e925c793.jpg", // Make sure this is in your public folder
  },
];

export default function Certificates() {
  const certificates = localCertificates;
  const isLoading = false;

  return (
    <div className="min-h-screen bg-background">
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
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group hover:shadow-lg transition-all border-border/40">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={cert.imageUrl} 
                        alt={cert.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Award className="text-white w-12 h-12" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-muted-foreground mb-4">{cert.issuer} • {cert.date}</p>
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        View Certificate <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}