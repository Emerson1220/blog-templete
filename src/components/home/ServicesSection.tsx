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

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}

const ServiceCard = ({ icon, title, onClick }: ServiceCardProps) => (
  <div className={styles.serviceCard}>
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
    <button className={styles.plusButton} onClick={onClick}>
      <span>+</span>
    </button>
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
            <div className={styles.servicesColumn}>
              <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={16}
                className={`${styles.swiper} swiper-vendre`}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                  },
                }}
              >
                {services
                  .filter((service) => service.tags === 'vendre')
                  .map((service, index) => (
                    <SwiperSlide
                      key={index}
                      className={styles.swiperSlide}
                    >
                      <ServiceCard
                        icon={service.icon}
                        title={service.title}
                        onClick={service.onClick}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>

          <div className={styles.servicesContains}>
            <h3>Vous louez</h3>
            <div className={styles.servicesColumn}>
              <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={16}
                className={`${styles.swiper} swiper-louer`}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                  },
                }}
              >
                {services
                  .filter((service) => service.tags === 'louer')
                  .map((service, index) => (
                    <SwiperSlide
                      key={index}
                      className={styles.swiperSlide}
                    >
                      <ServiceCard
                        icon={service.icon}
                        title={service.title}
                        onClick={service.onClick}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
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
