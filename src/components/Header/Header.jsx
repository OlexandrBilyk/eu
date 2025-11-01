import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to='/' className={styles.logoSection}>
          <img
            src="https://flagcdn.com/eu.svg"
            alt="EU"
            className={styles.flag}
          />
          <div className={styles.title}>
            <strong>Європейський</strong> союз
          </div>
        </Link>

        <div className={styles.right}>
          <select className={styles.lang}>
            <option>українська</option>
            <option>русский</option>
            <option>English</option>
          </select>
          <div className={styles.search}>
            <input type="text" />
            <button className={styles.btnSearch}>
              <FaSearch></FaSearch>Пошук
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
