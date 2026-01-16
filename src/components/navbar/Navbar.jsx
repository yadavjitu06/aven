"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Industry", href: "/industry" },
    { label: "Services", href: "/services" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/aven.png" // public folder ke andar ka naam
                alt="Aven Logo"
                width={120} // apne logo ke size ke hisaab se
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <div className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
            <div className={styles.mobileNavContent}>
              <ul className={styles.mobileNavList}>
                {navItems.map((item) => (
                  <li key={item.label} className={styles.mobileNavItem}>
                    <Link
                      href={item.href}
                      className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Overlay */}
          {isOpen && (
            <div
              className={styles.mobileOverlay}
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
