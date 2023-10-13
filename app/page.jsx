'use client'

import Image from "next/image";
import Me from "./assets/images/me.jpg"
import styles from "./style/pages/landingPage.module.css";
import ResumeContainer from "./components/ResumeContainer";

export default function Home() {

const handleClick = () => {
  console.log("first")
}

  return (
    <>
      <main className={styles.main}>
        <p>
          Alexandre Hontcharouk is a passionate web designer, meticulous in his
          work. He combines his passion for programming with his love of
          photography. Always attentive to his customers' needs, he strives to
          create simple, effective and aesthetically pleasing designs, while
          drawing on his artistic sensibility derived from photography.
        </p>
      </main>
      <section className={styles.banner}>
        <h1>portfolio</h1>
      </section>
      <section className={styles.projectComponent}>
        ici le components des projets
      </section>
      <section className={styles.resumeSection}>
        <div className={styles.skillsContainer}>
          <div className={styles.photo}>
            <p>Front end developer in Lyon region and Auvergne Rhône-Alpes</p>
            <Image src={Me} width={500} alt="it's me"/>
            <h4>Today</h4>
            <p>"Culture: Infinite quest, eternal thirst"</p>
          </div>
          <div className={styles.skills}>
            <div className={styles.first}>
              <h4>Hard and soft skills</h4>
              <ul>
                <li>HTML, CSS, SASS</li>
                <li>Figma</li>
                <li>Javascript</li>
                <li>Reactjs, Nextjs</li>
                <li>Adobe Lightroom</li>
                <li>Photography(analog/digital)</li>
              </ul>
            </div>
            <div className={styles.second}>
              <h4>Compétencies</h4>
              <ul>
               <li>SEO</li>
               <li>Communication</li>
               <li>Projetc management</li>
               <li>Problem solving</li>
               <li>Photography</li>
               <li>Strategy and design</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.resumeContainer}>          
          <ResumeContainer handleClick={handleClick} title={"Photographic event"} year={"2016 - 2023"} paragraph={"Photographer for various events such as neighborhood parties, telethons, music festivals, concerts ..."} />
        </div>
      </section>
    </>
  );
}
