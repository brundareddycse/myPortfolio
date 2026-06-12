import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import CertificateCard from "@/components/CertificateCard";

// Keep your localCertificates array exactly as it is

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
            <div className="cert-grid">
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

      <style>{`
        .cert-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:32px;
        }

        .cert-card{
          position:relative;
          height:260px;
          border-radius:16px;
          overflow:hidden;
          cursor:pointer;
          background:linear-gradient(-45deg,#f89b29 0%,#ff0f7b 100%);
          transition:all .6s cubic-bezier(0.23,1,0.320,1);
        }

        .cert-image{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:all .6s cubic-bezier(0.23,1,0.320,1);
        }

        .cert-content{
          position:absolute;
          inset:0;
          padding:24px;
          background:#fff;
          transform:translate(-50%,-50%) rotate(-45deg);
          left:50%;
          top:50%;
          width:100%;
          height:100%;
          opacity:0;
          transition:all .6s cubic-bezier(0.23,1,0.320,1);

          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .cert-card:hover{
          transform:rotate(-5deg) scale(1.08);
          box-shadow:0 20px 40px rgba(0,0,0,.25);
        }

        .cert-card:hover .cert-content{
          transform:translate(-50%,-50%) rotate(0deg);
          opacity:1;
        }

        .cert-card:hover .cert-image{
          transform:scale(0) rotate(-45deg);
        }

        .cert-title{
          font-size:1.3rem;
          font-weight:700;
          margin-bottom:12px;
          color:#111827;
        }

        .cert-description{
          color:#6b7280;
          line-height:1.6;
          margin-bottom:20px;
        }

        .cert-link{
          display:inline-flex;
          align-items:center;
          gap:8px;
          color:#ff0f7b;
          font-weight:600;
          text-decoration:none;
        }

        .cert-link:hover{
          opacity:.8;
        }
      `}</style>
    </div>
  );
}
