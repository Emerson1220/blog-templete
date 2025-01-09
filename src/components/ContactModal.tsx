'use client';

import { useState } from 'react';
import styles from './ContactModal.module.scss';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TransactionType = 'vente' | 'location' | 'autre' | null;
type PropertyType = 'maison' | 'appartement' | 'autre' | null;

interface FormData {
  transactionType: TransactionType;
  propertyType: PropertyType;
  nom: string;
  prenom: string;
  entreprise: string;
  adresse: string;
  telephone: string;
  email: string;
  message: string;
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    transactionType: null,
    propertyType: null,
    nom: '',
    prenom: '',
    entreprise: '',
    adresse: '',
    telephone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    onClose();
  };

  const showPersonalInfo =
    formData.transactionType && formData.propertyType;

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <h2>Contactez-nous</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formSection}>
            <h3>Vous réalisez :</h3>
            <div className={styles.buttonGroup}>
              <button
                type='button'
                className={`${styles.choiceButton} ${
                  formData.transactionType === 'vente'
                    ? styles.active
                    : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    transactionType: 'vente',
                  }))
                }
              >
                Une vente
              </button>
              <button
                type='button'
                className={`${styles.choiceButton} ${
                  formData.transactionType === 'location'
                    ? styles.active
                    : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    transactionType: 'location',
                  }))
                }
              >
                Une location
              </button>
              <button
                type='button'
                className={`${styles.choiceButton} ${
                  formData.transactionType === 'autre'
                    ? styles.active
                    : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    transactionType: 'autre',
                  }))
                }
              >
                Autre
              </button>
            </div>
          </div>

          <div className={styles.formSection}>
            <h3>Votre type de bien :</h3>
            <div className={styles.buttonGroup}>
              <button
                type='button'
                className={`${styles.choiceButton} ${
                  formData.propertyType === 'maison'
                    ? styles.active
                    : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    propertyType: 'maison',
                  }))
                }
              >
                Maison
              </button>
              <button
                type='button'
                className={`${styles.choiceButton} ${
                  formData.propertyType === 'appartement'
                    ? styles.active
                    : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    propertyType: 'appartement',
                  }))
                }
              >
                Appartement
              </button>
              <button
                type='button'
                className={`${styles.choiceButton} ${
                  formData.propertyType === 'autre'
                    ? styles.active
                    : ''
                }`}
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    propertyType: 'autre',
                  }))
                }
              >
                Un autre bien
              </button>
            </div>
          </div>

          {showPersonalInfo && (
            <div
              className={`${styles.formSection} ${styles.personalInfo}`}
            >
              <h3>Vos informations</h3>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor='nom'>Nom*</label>
                  <input
                    type='text'
                    id='nom'
                    required
                    value={formData.nom}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        nom: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor='prenom'>Prénom*</label>
                  <input
                    type='text'
                    id='prenom'
                    required
                    value={formData.prenom}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        prenom: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor='entreprise'>Entreprise</label>
                  <input
                    type='text'
                    id='entreprise'
                    value={formData.entreprise}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        entreprise: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor='adresse'>Adresse*</label>
                  <input
                    type='text'
                    id='adresse'
                    required
                    value={formData.adresse}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        adresse: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor='telephone'>Téléphone*</label>
                  <input
                    type='tel'
                    id='telephone'
                    required
                    value={formData.telephone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        telephone: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor='email'>Email*</label>
                  <input
                    type='email'
                    id='email'
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
                <div
                  className={`${styles.formGroup} ${styles.fullWidth}`}
                >
                  <label htmlFor='message'>Message</label>
                  <textarea
                    id='message'
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <button type='submit' className={styles.submitButton}>
                Envoyer
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
