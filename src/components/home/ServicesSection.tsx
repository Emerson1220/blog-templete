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

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

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
      title: 'Service 1',
      onClick: () => openModal('service1'),
      tags: 'category1',
    },
    {
      icon: <GiWaterDrop />,
      title: 'Service 2',
      onClick: () => openModal('service2'),
      tags: 'category1',
    },
    {
      icon: <BiRuler />,
      title: 'Service 3',
      onClick: () => openModal('service3'),
      tags: 'category1',
    },
    {
      icon: <FaToilet />,
      title: 'Service 4',
      onClick: () => openModal('service4'),
      tags: 'category1',
    },
    {
      icon: <FaGasPump />,
      title: 'Service 5',
      onClick: () => openModal('service5'),
      tags: 'category1',
    },
    {
      icon: <FaBolt />,
      title: 'Service 6',
      onClick: () => openModal('service6'),
      tags: 'category2',
    },
    {
      icon: <FaBug />,
      title: 'Service 7',
      onClick: () => openModal('service7'),
      tags: 'category2',
    },
    {
      icon: <MdEnergySavingsLeaf />,
      title: 'Service 8',
      onClick: () => openModal('service8'),
      tags: 'category2',
    },
    {
      icon: <TbTemperature />,
      title: 'Service 9',
      onClick: () => openModal('service9'),
      tags: 'category2',
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <h2>Nos Services</h2>
      <div className={styles.container}>
        <div className={styles.servicesFlex}>
          <div className={styles.servicesContains}>
            <h3>Category 1</h3>
            <div className={styles.servicesColumn}>
              <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={16}
                className={`${styles.swiper} swiper-category1`}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 16 },
                  640: { slidesPerView: 2, spaceBetween: 16 },
                  768: { slidesPerView: 3, spaceBetween: 16 },
                  1024: { slidesPerView: 4, spaceBetween: 16 },
                  1280: { slidesPerView: 5, spaceBetween: 16 },
                }}
              >
                {services
                  .filter((service) => service.tags === 'category1')
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
            <h3>Category 2</h3>
            <div className={styles.servicesColumn}>
              <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={16}
                className={`${styles.swiper} swiper-category2`}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 16 },
                  640: { slidesPerView: 2, spaceBetween: 16 },
                  768: { slidesPerView: 3, spaceBetween: 16 },
                  1024: { slidesPerView: 4, spaceBetween: 16 },
                  1280: { slidesPerView: 5, spaceBetween: 16 },
                }}
              >
                {services
                  .filter((service) => service.tags === 'category2')
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
