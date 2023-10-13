"use client";

import Image from "next/image";
import Me from "./assets/images/me.jpg";
import styles from "./style/pages/landingPage.module.css";
import ResumeContainer from "./utils/ResumeContainer";

export default function Home() {
  const handleClick = () => {
    console.log("first");
  };

  return (
    <>
      <main className={styles.main}>
        <p>
          Alexandre Hontcharouk est un web designer passionné, méticuleux dans
          son travail. Il combine sa passion pour la programmation avec
          son amour de la photographie. Toujours à l'écoute de ses
          clients, il s'efforce de créer des designs simples, efficaces et
          esthétiques, tout en s'appuyant tout en s'appuyant sur sa sensibilité artistique
          issue de la photographie.          
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
            <p>Developpeur Web de Villeurbanne, région Auvergne Rhône-Alpes</p>
            <Image src={Me} priority={true} width={500} alt="it's me" />
            <h4>Aujourd'hui</h4>
            <p>"Coder : Une quête infinie, une soif éternelle"</p>
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
                <li>Photographie(analog/digital)</li>
              </ul>
            </div>
            <div className={styles.second}>
              <h4>Compétences</h4>
              <ul>
                <li>SEO</li>
                <li>Communication</li>
                <li>gestion de projets</li>
                <li>résolution de problèmes</li>
                <li>Photographies</li>
                <li>Strategies et design</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.resumeContainer}>
        <ResumeContainer
            handleClick={handleClick}
            title={"Developpeur Web"}
            year={"2022 - 2023"}
            paragraph={
              "RNCP 5 (bac+2) formation à distance développeur web 1200h intensives sur 6 mois. Technologie apprise : HTML / CSS / SASS / JAVASCRIPT / REACTJS / RUBY / RUBY ON RAILS"
            }
          />
        <ResumeContainer
            handleClick={handleClick}
            title={"Developpeur lead Javascript"}
            year={"2023"}
            paragraph={
              "Developpement seul d'un site vitrine en HTML/SASS/CSS/JAVASCRIPt pour la créatrice de bijoux fantaisie Miss Camille Bijoux"
            }
          />
          <ResumeContainer
            handleClick={handleClick}
            title={"Photographe évènementiel"}
            year={"2016 - 2023"}
            paragraph={
              "Photographe pour divers événements tels que fêtes de quartier, téléthons, festivals de musique, concerts..."
            }
          />
          <ResumeContainer
            handleClick={handleClick}
            title={"Professeur d'instrument"}
            year={"2014 - 2021"}
            paragraph={
              "Professeur de musique, d'instrument, de groupe de musiciens. Auteur, compositeur,  interprète de musique"
            }
          />
        </div>
      </section>
    </>
  );
}
