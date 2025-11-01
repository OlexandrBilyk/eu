import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src="https://flagcdn.com/eu.svg" alt="EU" className={styles.flag} />
        <div className={styles.title}>
          <strong>Європейський</strong> союз
        </div>
      </div>

      <div className={styles.right}>
        <select className={styles.lang}>
          <option>русский</option>
          <option>українська</option>
          <option>English</option>
        </select>
        <div className={styles.search}>
          <input type="text" placeholder="Поиск" />
          <button></button>
        </div>
      </div>
    </header>
  );
}
