'use client';

import { useEffect } from 'react';
import styles from './ServiceModal.module.scss';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: string;
}

export default function ServiceModal({
  isOpen,
  onClose,
  service,
}: ServiceModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const serviceContent = {
    amiante: {
      title: 'Diagnostic Amiante',
      description:
        "Le diagnostic amiante est obligatoire pour toute vente d'un bien immobilier dont le permis de construire a été délivré avant le 1er juillet 1997.",
      details: [
        "Repérage des matériaux contenant de l'amiante",
        "Évaluation de l'état de conservation",
        'Recommandations de travaux si nécessaire',
        "Validité illimitée si absence d'amiante",
      ],
    },
    // Ajoutez d'autres services ici
  };

  const content =
    serviceContent[service as keyof typeof serviceContent];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>{content?.title}</h2>
        <p className={styles.description}>{content?.description}</p>
        {content?.details && (
          <ul className={styles.detailsList}>
            {content.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
