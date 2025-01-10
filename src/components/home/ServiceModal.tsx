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
    plomb: {
      title: 'Diagnostic Plomb',
      description:
        "Le diagnostic plomb (CREP) est obligatoire pour la vente ou la location d'un logement construit avant 1949.",
      details: [
        'Repérage des revêtements contenant du plomb',
        'Mesure de la concentration en plomb',
        'Évaluation des risques',
        'Préconisations pour éliminer les risques',
      ],
    },
    metrage: {
      title: 'Diagnostic Métrage',
      description:
        "La loi Carrez impose le mesurage de la surface privative pour toute vente d'un lot en copropriété.",
      details: [
        'Mesure précise de la surface habitable',
        'Calcul de la surface Carrez',
        'Plan détaillé du bien',
        'Document obligatoire pour les actes de vente',
      ],
    },
    assainissement: {
      title: 'Diagnostic Assainissement',
      description:
        "Le diagnostic assainissement est obligatoire pour toute vente d'un bien non raccordé au réseau public d'assainissement.",
      details: [
        'Contrôle des installations',
        'Vérification de la conformité',
        'Identification des dysfonctionnements',
        'Préconisations de mise aux normes',
      ],
    },
    gaz: {
      title: 'Diagnostic Gaz',
      description:
        "Le diagnostic gaz est obligatoire pour la vente d'un logement équipé d'une installation de gaz de plus de 15 ans.",
      details: [
        "Vérification de l'installation",
        'Contrôle des équipements',
        'Détection des anomalies',
        'Conseils de sécurité',
      ],
    },
    electricite: {
      title: 'Diagnostic Électricité',
      description:
        "Le diagnostic électrique est obligatoire pour la vente d'un logement dont l'installation électrique a plus de 15 ans.",
      details: [
        "Vérification de l'installation électrique",
        'Contrôle du tableau électrique',
        'Identification des anomalies',
        'Recommandations de mise en sécurité',
      ],
    },
    termites: {
      title: 'Diagnostic Termites',
      description:
        "Le diagnostic termites est obligatoire pour la vente d'un bien situé dans une zone déclarée à risque par la préfecture.",
      details: [
        'Inspection des bois et matériaux',
        'Détection des termites',
        'Évaluation des dommages',
        'Préconisations de traitement',
      ],
    },
    energetique: {
      title: 'Audit Énergétique',
      description:
        "L'audit énergétique est obligatoire pour la vente des maisons et immeubles classés F ou G au DPE.",
      details: [
        'Analyse complète du bâtiment',
        'Évaluation des performances',
        "Scénarios d'amélioration",
        'Estimation des coûts de rénovation',
      ],
    },
    thermographie: {
      title: 'Diagnostic Thermographie',
      description:
        "La thermographie infrarouge permet de détecter les défauts d'isolation et les ponts thermiques d'un bâtiment.",
      details: [
        'Imagerie thermique',
        'Détection des déperditions',
        'Analyse des points faibles',
        "Recommandations d'amélioration",
      ],
    },
    ppt: {
      title: 'Plan Pluriannuel de Travaux (PPT)',
      description:
        'Le PPT est obligatoire pour les copropriétés de plus de 15 ans, il projette les travaux nécessaires sur 10 ans.',
      details: [
        "Analyse de l'état de l'immeuble",
        'Planification des travaux',
        'Estimation des coûts',
        'Priorisation des interventions',
      ],
    },
    dtg: {
      title: 'Diagnostic Technique Global (DTG)',
      description:
        "Le DTG permet d'avoir une vision globale de l'état d'un immeuble et des travaux à prévoir.",
      details: [
        'Analyse technique complète',
        'Évaluation énergétique',
        'Plan de travaux',
        'Estimation budgétaire',
      ],
    },
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
