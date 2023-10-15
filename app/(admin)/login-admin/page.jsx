"use client";

import { useState } from "react";
import styles from "../../style/pages/loginAdmin.module.css";
import { useRouter } from "next/navigation";

const LoginAdmin = () => {
  const [nameAdmin, setNameAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const [phraseAdmin, setPhraseAdmin] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nameAdmin === process.env.NEXT_PUBLIC_NAME &&
      passwordAdmin === process.env.NEXT_PUBLIC_PASSWORD &&
      phraseAdmin === process.env.NEXT_PUBLIC_PHRASE
    ) {
      alert("C'est bon c'est toi l'admin !");
      setNameAdmin("");
      setPasswordAdmin("");
      setPhraseAdmin("");
      router.push("/form-project");
    } else {
      alert("Alert qui est tu !");
      router.push("/");
    }
  };

  return (
    <>
      <div className={styles.titleAdmin}>
        <h1>Connexion Admin</h1>
        <p>Se connecter pour accéder au formulaire d'ajout de projets</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.formAdmin}>
        <div className={styles.nameAdmin}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="nom"
            required
            onChange={(e) => setNameAdmin(e.target.value)}
          />
        </div>
        <div className={styles.passwordAdmin}>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setPasswordAdmin(e.target.value)}
          />
        </div>
        <div className={styles.phraseAdmin}>
          <label htmlFor="phrase">Phrase secret</label>
          <input
            type="text"
            name="phrase"
            id="phrase"
            required
            onChange={(e) => setPhraseAdmin(e.target.value)}
          />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </>
  );
};

export default LoginAdmin;
