import styles from "../styles/work.module.css";

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.projectGrid}>
        <div className={styles.projectCard}>
          <h3>Restaurant Website</h3>
          <p>ウェブプログラミングコースの1年生の時に、HTMLとCSSを使用して作成したシンプルなレストランのウェブサイトです。</p>
          <a
            href="https://restaurant-1-eight.vercel.app/"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className={styles.projectCard}>
          <h3>Another Project</h3>
          <p>Here’s another project</p>
          <a
            href="https://my-app-1pfn.vercel.app/"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}
