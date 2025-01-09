'use client';

import { useState } from 'react';
import styles from './ServicesSection.module.scss';
import { GiChemicalDrop, GiWaterDrop } from 'react-icons/gi';
import { BiRuler } from 'react-icons/bi';
import { FaToilet, FaGasPump, FaBolt, FaBug } from 'react-icons/fa';
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
        src='/images/hero-bg.jpg'
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
    },
    { icon: <GiWaterDrop />, title: 'Diagnostic Plomb' },
    { icon: <BiRuler />, title: 'Diagnostic Métrage' },
    { icon: <FaToilet />, title: 'Diagnostic Assainissement' },
    { icon: <FaGasPump />, title: 'Diagnostic Gaz' },
    { icon: <FaBolt />, title: 'Diagnostic Électricité' },
    { icon: <FaBug />, title: 'Diagnostic Termites' },
    { icon: <MdEnergySavingsLeaf />, title: 'Audit Énergétique' },
    { icon: <TbTemperature />, title: 'Diagnostic Thermographie' },
    {
      icon: <TbTemperature />,
      title: 'Plan Pluriannuel de Travaux (PPT)',
    },
    {
      icon: <TbTemperature />,
      title: 'Diagnostic technique global (DTG)',
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <h2>Nos Services</h2>
      <div className={styles.container}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              onClick={service.onClick}
            />
          ))}
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
