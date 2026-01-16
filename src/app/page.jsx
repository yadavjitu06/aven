"use client";
import Image from "next/image";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import styles from "./page.module.css";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [markets, setMarkets] = useState([
  {
    id: 1,
    name: "Land Mobility",
    active: true,
    icon: "/marketImage/Tank1.png",
  },
  {
    id: 2,
    name: "Liquid Armour",
    active: false,
    icon: "/marketImage/Tank2.png",
  },
  {
    id: 3,
    name: "Aerospace",
    active: false,
    icon: "/marketImage/Tank3.png",
  },
  {
    id: 4,
    name: "Marine",
    active: false,
    icon: "/marketImage/Tank4.png",
  },
  {
    id: 5,
    name: "Healthcare",
    active: false,
    icon: "/marketImage/Tank5.png",
  },
  {
    id: 6,
    name: "Personal Protection",
    active: false,
    icon: "/marketImage/Tank6.png",
  },
  {
    id: 7,
    name: "Defence Supplies",
    active: false,
    icon: "/marketImage/Tank7.png",
  },
]);

  const marketsData = {
    tag: "Markets We Serve",
    title: "LAND MOBILITY",
    description:
      "In an age of persistent warfare, hybrid threats, and resource limitations, today's ground forces run more advanced, diverse, and networked structures than ever before, with problems continuing to expand and change. We facilitate",
    stats: {
      number: "100+",
      label: "Tanks Delivered",
    },
    image: "/images/slider/land-mobility-tank.png",
  };

  return (
    <>
      <HeroSlider />

      <section className={styles.marketsSection}>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.sectionHeader}>
            <span className={styles.tag}>{marketsData.tag}</span>
            <h2 className={styles.title}>{marketsData.title}</h2>
          </header>

          <div className={styles.marketsContent}>
            {/* Left Text */}
            <div className={styles.descriptionColumn}>
              <p className={styles.descriptionText}>
                {marketsData.description}
              </p>

              <div className={styles.statsBox}>
                <div className={styles.statsNumber}>
                  {marketsData.stats.number}
                </div>
                <div className={styles.statsLabel}>
                  {marketsData.stats.label}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className={styles.imageColumn}>
              <Image
                src={marketsData.image}
                alt="Land Mobility Tank"
                width={900}
                height={500}
                priority
              />
            </div>
          </div>

          {/* Bottom Tabs */}
          <nav className={styles.marketsNav}>
            {markets.map((market) => (
              <li key={market.id} className={styles.marketItem}>
                <button
                  className={`${styles.marketButton} ${market.active ? styles.active : ""}`}
                  onClick={() => handleMarketClick(market.id)}
                  aria-current={market.active ? "true" : "false"}
                  aria-label={`Switch to ${market.name} market`}
                >
                  {/* Icon Display */}
                  <span className={styles.marketIcon}>
                    <Image
                      src={market.icon}
                      alt={`${market.name} icon`}
                      width={20}
                      height={20}
                    />
                  </span>

                  <span className={styles.marketText}>{market.name}</span>

                  <span className={styles.activeIndicator} aria-hidden="true">
                    {market.active && "●"}
                  </span>
                </button>
              </li>
            ))}
          </nav>
        </div>
      </section>
      <Footer />
    </>
  );
}
