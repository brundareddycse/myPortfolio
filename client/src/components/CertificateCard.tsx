import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function CertificateCard({
  certificate,
  index,
}: {
  certificate: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="cert-card"
    >
      <img
        src={certificate.imageUrl}
        alt={certificate.title}
        className="cert-image"
      />

      <div className="cert-content">
        <h3 className="cert-title">{certificate.title}</h3>

        <p className="cert-description">
          {certificate.issuer} • {certificate.date}
        </p>

        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
          View Certificate <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default CertificateCard;
