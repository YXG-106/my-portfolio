import styles from "../styles/skills.module.css";
import Image from "next/image";
import { getskillList } from "@/app/_libs/microcms";

export default async function Skillpage() {
  const data = await getskillList();

  return (
    <section id="skills" className={styles.section}>
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        {/* <li>
          Next.js
          <Image src="/images/nextjs-svgrepo-com.svg" alt="" width={30} height={30} />
        </li>
        <li>
          HTML
          <Image src="/images/html-fill-svgrepo-com.svg" alt="" width={30} height={30} />
        </li>
        <li>
          CSS
          <Image src="/images/css3-01-svgrepo-com.svg" alt="" width={30} height={30} />
        </li>
        <li>
          Database
          <Image src="/images/database-filled-svgrepo-com.svg" alt="" width={30} height={30} />
        </li>
        <li>
          Java
          <Image src="/images/java-svgrepo-com.svg" alt="" width={30} height={30} />
        </li> */}
        {data.contents.map((skill)=>(
          <li key={skill.id}>
            <h4>{skill.name}</h4>
            <Image src={skill.image.url} alt="" width={40} height={40}/>
          </li>
        ))}



      </ul>
    </section>
  );
}