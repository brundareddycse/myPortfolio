import { Certification } from "@shared/schema";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function CertificateCard({ certificate, index }: { certificate: Certification | any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
        <img
          src={certificate.imageUrl || "https://placehold.co/600x400"}
          alt={certificate.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-3 left-4 z-20">
          <h3 className="text-xl font-bold text-white font-display">{certificate.title}</h3>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <p className="text-muted-foreground mb-4 text-sm">
          <span className="font-medium">{certificate.issuer}</span>
          {certificate.date ? ` • ${certificate.date}` : null}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {(certificate.tags || []).map((t: string) => (
            <Badge key={t} variant="secondary" className="bg-secondary/50 text-secondary-foreground font-normal">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-2 border-t border-border/50">
          {certificate.link && (
            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              View Certificate <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default CertificateCard;
