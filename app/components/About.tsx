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
          <p>私はWeb開発を学んでいる留学生です。HTML、CSS、JavaScript、Java、データベース、Next.jsなどを少しずつ学びながら、スキルを高めています。
             問題解決力があり、チームでの協力も得意です。また、新しい技術に対する興味と継続的な学習意欲があります。
            コールセンターで4年間勤務した経験があり、顧客対応やコミュニケーションスキルを活かして、今後Web開発の分野で活躍していきたいと考えています。</p>
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
