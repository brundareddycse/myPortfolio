import React from 'react';
import styled from 'styled-components';
import { Certification } from "@shared/schema";
import { ExternalLink, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function CertificateCard({ certificate, index }: { certificate: Certification | any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <StyledWrapper>
        <div className="card">
          {/* Default State: Show Image icon with rotation transitions */}
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
          </svg>
          
          {/* Hover State: Revealed Content Container */}
          <div className="card__content">
            <h3 className="card__title truncate-title">{certificate.title}</h3>
            
            <p className="card__issuer">
              <span className="font-semibold">{certificate.issuer}</span>
              {certificate.date ? ` • ${certificate.date}` : null}
            </p>

            <div className="card__tags">
              {(certificate.tags || []).map((t: string) => (
                <Badge key={t} variant="secondary" className="bg-secondary/60 text-secondary-foreground text-[11px] px-2 py-0">
                  {t}
                </Badge>
              ))}
            </div>

            {certificate.link && (
              <div className="card__footer">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  View Certificate <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </StyledWrapper>
    </motion.div>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    height: 240px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card svg {
    width: 54px;
    height: 54px;
    fill: #fff;
    opacity: 0.85;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover {
    transform: rotate(-3deg) scale(1.03);
    box-shadow: 0 15px 30px rgba(255, 15, 123, 0.25);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 24px;
    box-sizing: border-box;
    background-color: var(--background, #fff);
    border: 1px solid var(--border);
    border-radius: 12px;
    opacity: 0;
    display: flex;
    flex-direction: column;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 18px;
    color: var(--foreground, #333);
    font-weight: 700;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card__issuer {
    margin: 8px 0 0;
    font-size: 13px;
    color: var(--muted-foreground, #666);
  }

  .card__tags {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    overflow: hidden;
    max-height: 55px;
  }

  .card__footer {
    margin-top: auto;
    padding-top: 8px;
    border-top: 1px solid var(--border, #eee);
  }

  .card:hover svg {
    scale: 0;
    transform: rotate(-45deg);
  }
`;

export default CertificateCard;
