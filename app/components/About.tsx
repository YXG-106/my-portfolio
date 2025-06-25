import Image from "next/image";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2>About Me</h2>
      <div className={styles.aboutContainer}>
        <Image
          src="/images/image.png"
          alt="My profile photo"
          width={200}
          height={200}
          className={styles.profileImg}
        />
        <div>
          <li></li>
          <li></li>
          <li></li>
          <h3>Education</h3>
          <ul>
            <li>IT カレッジ沖縄 (日本語ビジネスコース), 2022</li>
            <li>専門学校沖縄ビジネス外語学院, 2024</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
