"use client";

import Link from "next/link";
import styles from "./page.module.css";
import About from "./components/About";
import Work from "./components/Work";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import Skillpage from "./components/Skills";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#strengths">Strengths</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className={styles.hero}>
  <div className={styles.heroContent}>
    <div className={styles.text}>
      <h1 className={styles.name}>MEGAMIND</h1>
      <p className={styles.role}>
        Currently learning web development and building up my skills step by step.</p>
      <div className={styles.buttons}>
        <Link href="#work" className={styles.button}>
          View My Work
        </Link>
        <a href="#contact" className={styles.buttonOutline}>
          Contact Me
        </a>
      </div>
    </div>

  </div>
</section>

      <About />
      <Skillpage />
      <Work />
      <Strengths />
      <Contact />
    </div>
  );
}
