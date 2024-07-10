"use client";
import React, { useState } from "react";
import Image from "next/image";
import Me from "./assets/images/me.webp";
import styles from "./style/pages/landingPage.module.css";
import AllProjects from "./components/AllProjects";

const experienceData = [
  {
    title: "Developpeur Web",
    date: "2022 à aujourd'hui",
    description:
      "RNCP 5 (bac+2) formation à distance développeur web 1200h intensives sur 6 mois. Technologie apprise : HTML / CSS / SASS / JAVASCRIPT / REACTJS / RUBY / RUBY ON RAILS",
  },
  {
    title: "Developpeur JS/TS scrap",
    date: "avril 2023 à aujourd'hui",
    description:
      "Développeur chez LYA protect de robot de scraping en JS/TS",
  },
  {
    title: "Photographe évènementiel",
    date: "2016 - 2023",
    description:
      "Photographe pour divers événements tels que fêtes de quartier, téléthons, festivals de musique, concerts...",
  },
  {
    title: "Professeur d'instrument",
    date: "2014 - 2021",
    description:
      "Professeur de musique, d'instrument, de groupe de musiciens. Auteur, compositeur, interprète de musique",
  },
];

export default function Home() {
  
  const [experienceStates, setExperienceStates] = useState(
    experienceData.map(() => ({
      isParagraphVisible: false,
      isResumeOpen: false,
    }))
  );
  

  const handleExperienceClick = (index) => {
    const newExperienceStates = [...experienceStates];
    newExperienceStates[index].isParagraphVisible =
      !newExperienceStates[index].isParagraphVisible;
    newExperienceStates[index].isResumeOpen =
      !newExperienceStates[index].isResumeOpen;
    setExperienceStates(newExperienceStates);
  };

  return (
    <>
      <main id="main" className={styles.main}>
        <p>
          Alexandre Hontcharouk est un web designer passionné, méticuleux dans
          son travail. Il combine sa passion pour la programmation avec son
          amour de la photographie. Toujours à l'écoute de ses clients, il
          s'efforce de créer des designs simples, efficaces et esthétiques, tout
          en s'appuyant sur sa sensibilité artistique issue
          de la photographie.
        </p>
      </main>
      <section className={styles.banner}>
        <h1>portfolio</h1>
      </section>
      <section id="projects" className={styles.projectComponent}>
        <AllProjects />
      </section>
      <section id="about" className={styles.resumeSection}>
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
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className={
                experienceStates[index].isResumeOpen
                  ? styles.resumeOpen
                  : styles.resume
              }
            >
              <div
                onClick={() => handleExperienceClick(index)}
                className={styles.titleYear}
              >
                <h3>{experience.title}</h3>
                <h3>{experience.date}</h3>
              </div>
              <p
                className={
                  experienceStates[index].isParagraphVisible
                    ? styles.visibleParagraph
                    : styles.hideParagraph
                }
              >
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div id="contact" className={styles.contactContainer}>
        <a
          href="mailto:alexandre.professionel69@gmail.com"
          className={styles.contactLink}
        >
          <h1>alexandre.professionel69@gmail.com</h1>
        </a>
        <h1>
          Prendre contact ici
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-up-right"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 7l-10 10" />
            <path d="M8 7l9 0l0 9" />
          </svg>
        </h1>
        <a href="/#main">
          <svg                      
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-up"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M18 11l-6 -6" />
            <path d="M6 11l6 -6" />
          </svg>
        </a>
      </div>
    </>
  );
}
