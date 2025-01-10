'use client';

import { useState, useRef } from 'react';
import styles from './ServicesSection.module.scss';
import { GiChemicalDrop, GiWaterDrop } from 'react-icons/gi';
import { BiRuler } from 'react-icons/bi';
import {
  FaToilet,
  FaGasPump,
  FaBolt,
  FaBug,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { MdEnergySavingsLeaf } from 'react-icons/md';
import { TbTemperature } from 'react-icons/tb';
import ServiceModal from './ServiceModal';
import Image from 'next/image';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const ServiceCard = ({ icon, title, onClick }: ServiceCardProps) => (
  <div className={styles.serviceCard} onClick={onClick}>
    <div className={styles.cardImage}>
      <Image
        src='/images/placeholder.png'
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className={styles.cardContent}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
    </div>
  </div>
);

export default function ServicesSection() {
  const [modalService, setModalService] = useState<string | null>(
    null
  );
  const vendreRef = useRef<HTMLDivElement>(null);
  const louerRef = useRef<HTMLDivElement>(null);

  const scroll = (
    containerRef: React.MutableRefObject<HTMLDivElement | null>,
    direction: 'left' | 'right'
  ) => {
    if (containerRef.current) {
      const scrollAmount = 300 + 16; // card width + gap
      const newScrollLeft =
        containerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const openModal = (service: string) => {
    setModalService(service);
  };

  const closeModal = () => {
    setModalService(null);
  };

  const services = [
    {
      icon: <GiChemicalDrop />,
      title: 'Diagnostic Amiante',
      onClick: () => openModal('amiante'),
      tags: 'vendre',
    },
    {
      icon: <GiWaterDrop />,
      title: 'Diagnostic Plomb',
      onClick: () => openModal('plomb'),
      tags: 'vendre',
    },
    {
      icon: <BiRuler />,
      title: 'Diagnostic Métrage',
      onClick: () => openModal('metrage'),
      tags: 'vendre',
    },
    {
      icon: <FaToilet />,
      title: 'Diagnostic Assainissement',
      onClick: () => openModal('assainissement'),
      tags: 'vendre',
    },
    {
      icon: <FaGasPump />,
      title: 'Diagnostic Gaz',
      onClick: () => openModal('gaz'),
      tags: 'vendre',
    },
    {
      icon: <FaBolt />,
      title: 'Diagnostic Électricité',
      onClick: () => openModal('electricite'),
      tags: 'louer',
    },
    {
      icon: <FaBug />,
      title: 'Diagnostic Termites',
      onClick: () => openModal('termites'),
      tags: 'louer',
    },
    {
      icon: <MdEnergySavingsLeaf />,
      title: 'Audit Énergétique',
      onClick: () => openModal('energetique'),
      tags: 'louer',
    },
    {
      icon: <TbTemperature />,
      title: 'Diagnostic Thermographie',
      onClick: () => openModal('thermographie'),
      tags: 'louer',
    },
    {
      icon: <TbTemperature />,
      title: 'Plan Pluriannuel de Travaux (PPT)',
      onClick: () => openModal('ppt'),
      tags: 'louer',
    },
    {
      icon: <TbTemperature />,
      title: 'Diagnostic technique global (DTG)',
      onClick: () => openModal('dtg'),
      tags: 'louer',
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <h2>Nos Services</h2>
      <div className={styles.container}>
        <div className={styles.servicesFlex}>
          <div className={styles.servicesContains}>
            <h3>Vous vendez</h3>
            <button
              className={`${styles.navigationButton} ${styles.prev}`}
              onClick={() => scroll(vendreRef, 'left')}
            >
              <FaChevronLeft />
            </button>
            <div className={styles.servicesColumn} ref={vendreRef}>
              {services
                .filter((service) => service.tags === 'vendre')
                .map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    onClick={service.onClick}
                  />
                ))}
            </div>
            <button
              className={`${styles.navigationButton} ${styles.next}`}
              onClick={() => scroll(vendreRef, 'right')}
            >
              <FaChevronRight />
            </button>
          </div>

          <div className={styles.servicesContains}>
            <h3>Vous louez</h3>
            <button
              className={`${styles.navigationButton} ${styles.prev}`}
              onClick={() => scroll(louerRef, 'left')}
            >
              <FaChevronLeft />
            </button>
            <div className={styles.servicesColumn} ref={louerRef}>
              {services
                .filter((service) => service.tags === 'louer')
                .map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    onClick={service.onClick}
                  />
                ))}
            </div>
            <button
              className={`${styles.navigationButton} ${styles.next}`}
              onClick={() => scroll(louerRef, 'right')}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <ServiceModal
        isOpen={modalService !== null}
        onClose={closeModal}
        service={modalService || ''}
      />
    </section>
  );
}
