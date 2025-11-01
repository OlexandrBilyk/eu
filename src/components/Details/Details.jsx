
import styles from "./Details.module.scss";

export default function Details() {
  return (
    <section className={styles.detailsSection}>
      <h2 className={styles.detailsHeading}>Узнайте больше</h2>

      <div className={styles.detailsGrid}>
        
        <div className={styles.detailsCard}>
          <div className={styles.detailsAccent}></div>
          <a href="#" className={styles.detailsTitle}>
            10 ways the EU makes your life easier
          </a>
          <p className={styles.detailsText}>
            Follow Sven, Elena and Sofia as they embark on an exciting trip across Europe.
          </p>
        </div>

        
        <div className={styles.detailsCard}>
          <div className={styles.detailsAccent}></div>
          <a href="#" className={styles.detailsTitle}>
            European Union priorities 2024-2029
          </a>
          <p className={styles.detailsText}>
            Discover the EU’s priorities for 2024–2029, promoting a free and democratic Europe,
            developing a strong and secure Europe, establishing a prosperous and competitive Europe.
          </p>
        </div>

      
        <div className={styles.detailsCard}>
          <div className={styles.detailsAccent}></div>
          <a href="#" className={styles.detailsTitle}>
            Facts and figures on the European Union
          </a>
          <p className={styles.detailsText}>
            Find out how many EU Member States there are, how big the EU economy is, how people live
            in the EU, and other useful facts about the EU.
          </p>
        </div>

       
        <div className={styles.detailsCard}>
          <div className={styles.detailsAccent}></div>
          <a href="#" className={styles.detailsTitle}>
            Achievements
          </a>
          <p className={styles.detailsText}>
            Discover what the EU does for citizens, how it protects rights, promotes prosperity and
            strives to make the world a safer place.
          </p>
        </div>

       
        <div className={styles.detailsCard}>
          <div className={styles.detailsAccent}></div>
          <a href="#" className={styles.detailsTitle}>
            Learning corner
          </a>
          <p className={styles.detailsText}>
            Teaching material, games and much more about the European Union and its activities, for
            children, teenagers, teachers and parents.
          </p>
        </div>

     
        <div className={styles.detailsCard}>
          <div className={styles.detailsAccent}></div>
          <a href="#" className={styles.detailsTitle}>
            EU made easy
          </a>
          <p className={styles.detailsText}>
            Learn more about the EU in these handy publications on how the EU works, from the euro
            and law, to history and travel.
          </p>
        </div>
      </div>
    </section>
  );
}
