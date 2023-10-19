"use client";
import styles from "../style/pages/devis.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const PageDevis = () => {
  const googleId = "service_vlggwkr";
  const templateId = "template_llprc33";
  const publicKey = `${process.env.NEXT_PUBLIC_ID}`;

  const form = useRef();
  const [checkbox, setCheckbox] = useState(false);

  const handleChange = () => setCheckbox(!checkbox);

  const sendEmail = (e) => {
    e.preventDefault();
    if (checkbox === false) {
      alert("il est important de cocher les Politiques de confidentialités");
    } else {
      emailjs.sendForm(googleId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("Message Envoyé");
        },
        (error) => {
          console.log(error.text);
          alert("Les champs ne sont pas valides");
        }
      );
    }
  };
  return (
    <>
      <section className={styles["form-devis"]}>
        <h1>Un projet ? Un site ?</h1>
        <p>
          "Prêt à faire passer votre projet au niveau supérieur ? En tant que
          freelance passionné et expérimenté, je suis votre partenaire idéal
          pour concrétiser votre vision. Que ce soit pour la création d'un site
          internet, le développement d'une application ou tout autre projet sur
          mesure, je suis là pour vous aider. Contactez-moi dès aujourd'hui pour
          discuter de vos besoins et recevoir un devis personnalisé. Votre
          projet, ma compétence - ensemble, nous pouvons transformer vos idées
          en réalité."
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={styles["form-container"]}
        >
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            id="inputName"
            required
            minLength="2"
            maxLength="30"
            placeholder="Nom..."
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="inputEmail"
            minLength="1"
            maxLength="40"
            required
            placeholder="Email..."
          />

          <label htmlFor="description">Votre Projet</label>
          <textarea
            name="description"
            id="inputDescription"
            minLength="2"
            maxLength="5000"
            required
            placeholder="Détaillez-moi votre projet(5000 caractères)..."
          ></textarea>
          <div className={styles.checkbox}>
          <input
          className={styles.rgpd}
            onChange={handleChange}
            type="checkbox"
            name="RGPD"
            id="rgpd"            
          />
          <label className={styles.rgpdLabel} htmlFor="rgpd">
            Accepter les <Link href="/privacy-policy">RGPD</Link>, la politique
            de protection des données
          </label>            
          </div>

          <button className={styles["btn-submit"]}>envoyer</button>
        </form>
      </section>
    </>
  );
};

export default PageDevis;
