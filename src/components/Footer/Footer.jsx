import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Footer.module.css";
const socialIconMap = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedinIn />,
  youtube: <FaYoutube />,
};

const footerData = {
  columns: [
    {
      title: "About Us",
      links: [
        "Company Profile",
        "Leadership and Management",
        "Certificates & Approvals",
        "Global Foot Prints",
      ],
    },
    {
      title: "Industry",
      links: [
        "Liquid Armour",
        "Aerospace",
        "Health Care",
        "Marine",
        "Land Mobility",
        "Personal Protection",
        "Defence Supplies",
      ],
    },
    {
      title: "Services",
      links: [
        "Transactional",
        "Economical Analysis",
        "Strategic Communication",
        "Defence Systems",
        "Healthcare Consulting",
        "Technology Consulting",
      ],
    },
    {
      title: "Quick Links",
      links: ["Sitemap", "Newsletter", "Terms & Conditions", "Privacy Policy"],
      extra: ["Contact Us", "Careers"],
    },
    {
      title: "Other Links",
      links: ["News & Events", "Blog"],
      social: ["facebook", "twitter", "linkedin", "youtube"],
    },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {footerData.columns.map((col, i) => (
            <section key={i}>
              <h4 className={styles.sectionTitle}>{col.title}</h4>

              <ul className={styles.linkList}>
                {col.links.map((link, idx) => (
                  <li key={idx} className={styles.linkItem}>
                    {link}
                  </li>
                ))}
              </ul>

              {col.extra && (
                <div className={styles.extra}>
                  {col.extra.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              )}

              {col.social && (
                <div className={styles.social}>
                  {col.social.map((icon, idx) => (
                    <span key={idx} className={styles.socialIcon}>
                      {socialIconMap[icon]}
                    </span>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>Copyright © 2023 @ Aven Ltd | all rights reserved.</p>
          <p>Website Design and Development by Sterco</p>
        </div>
      </div>
    </footer>
  );
}
