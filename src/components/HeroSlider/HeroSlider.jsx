'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Dynamic slides data - can be fetched from API or CMS
  const slides = [
    {
      id: 1,
      image: '/images/slider/slide1.png',
      alt: 'Medical Team Collaboration',
      title: 'PASSIONATE ABOUT SAVING LIVES',
      subtitle: 'Innovative solutions for healthcare challenges',
    },
    {
      id: 2,
      image: '/images/slider/slide2.png',
      alt: 'Healthcare Technology',
      title: 'ADVANCED MEDICAL TECHNOLOGIES',
      subtitle: 'Cutting-edge equipment and techniques',
    },
    {
      id: 3,
      image: '/images/slider/slide3.png',
      alt: 'Patient Care Excellence',
      title: 'COMPASSIONATE PATIENT CARE',
      subtitle: 'Dedicated to exceptional healthcare services',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <div className={styles.imageContainer}>
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className={styles.slideImage}
              />
              <div className={styles.imageOverlay} />
            </div>
            
            <div className={styles.slideContent}>
              <div className={styles.contentWrapper}>
                <h1 className={styles.slideTitle}>{slide.title}</h1>
                {slide.subtitle && (
                  <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

     
      
      

      {/* Dots Navigation */}
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;