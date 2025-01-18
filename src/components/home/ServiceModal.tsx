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
    service1: {
      title: 'Service 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      details: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description',
        'Feature 4 description',
      ],
    },
    service2: {
      title: 'Service 2',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      details: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description',
        'Feature 4 description',
      ],
    },
    service3: {
      title: 'Service 3',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      details: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description',
        'Feature 4 description',
      ],
    },
    service4: {
      title: 'Service 4',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      details: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description',
        'Feature 4 description',
      ],
    },
    service5: {
      title: 'Service 5',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      details: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description',
        'Feature 4 description',
      ],
    },
    service6: {
      title: 'Service 6',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
      details: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description',
        'Feature 4 description',
      ],
    },
    service7: {
      title: 'Service 7',
      description:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      details: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description',
        'Feature 4 description',
      ],
    },
    service8: {
      title: 'Service 8',
      description:
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      details: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description',
        'Feature 4 description',
      ],
    },
    service9: {
      title: 'Service 9',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
      details: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description',
        'Feature 4 description',
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
