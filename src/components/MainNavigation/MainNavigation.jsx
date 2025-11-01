import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.scss";

const navItems = [
  {
    label: "Главная страица",
    columns: [],
  },
  {
    label: "Principles, countries, history",
    columns: [
      [
        "Principles and values",
        "Facts and figures on the European Union",
        "EU countries",
      ],
      ["EU enlargement", "Achievements", "History of the EU"],
      ["Symbols", "Languages", "EU made easy"],
    ],
  },
  {
    label: "Institutions, law, budget",
    columns: [
      ["Institutions and bodies", "Leadership", "Law"],
      ["Budget", "The Euro"],
    ],
  },
  {
    label: "Priorities and actions",
    columns: [["EU priorities", "Actions by topic", "Поддержка ЕС Украине"]],
  },
  {
    label: "Live, work, study",
    columns: [
      [
        "Living in the EU",
        "Travelling in the EU",
        "Participate, interact, vote",
        "Immigration to the EU",
      ],
      [
        "Working in the EU",
        "Doing business in the EU",
        "Import and export",
        "Funding, grants, subsidies",
      ],
      [
        "Public contracts",
        "Studying and training in the EU",
        "Jobs and traineeships in EU institutions",
      ],
    ],
  },
  {
    label: "News and Events",
    columns: [
      [
        "Featured news",
        "Latest news from EU institutions and bodies",
        "Events",
        "Visual stories",
      ],
    ],
  },
  {
    label: "Обратится к ЕС",
    columns: [
      [
        "Напишите нам",
        "Звоните нам",
        "Meet us",
        "Contact details: institutions, bodies and agencies",
      ],
      [
        "Visit a European Union institution",
        "Europe and worldwide offices",
        "Make a complaint",
      ],
      ["Press contacts", "Social media channels"],
    ],
  },
];

export default function MainNavigation() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = function (i) {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <nav className={styles.mainNav}>
      <div className="container">
        <ul className={styles.list}>
          {navItems.map((item, i) => (
            <li
              key={i}
              className={`${styles.item} ${
                openIndex === i ? styles.active : ""
              }`}
              onMouseEnter={() => {
                if (item.columns.length > 0) {
                  setOpenIndex(i);
                }
              }}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <NavLink
                to="/"
                className={styles.link}
                onClick={() => toggleMenu(i)}
              >
                {item.label}
                {item.columns.length > 0 && (
                  <FaChevronDown
                    className={`${styles.arrow} ${
                      openIndex === i ? styles.open : ""
                    }`}
                  />
                )}
              </NavLink>

              {openIndex === i && (
                <div className={`${styles.dropdown} ${i === 4 || i === 6 ? styles.righted : ""}`}>
                  {item.columns.map((col, colIndex) => (
                    <ul key={colIndex} className={styles.column}>
                      {col.map((link, i) => (
                        <li key={i} className={styles.dropdownItem}>
                          <Link
                            to="/"
                            className={`${styles.link} ${styles.dropdownLink}`}
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
