"use client";

import { useState } from "react";
import styles from "../../style/pages/loginAdmin.module.css";

const LoginAdmin = () => {
  const [nameAdmin, setNameAdmin] = useState("")
  const [passwordAdmin, setPasswordAdmin] = useState("")
  const [phraseAdmin, setPhraseAdmin] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameAdmin, passwordAdmin, phraseAdmin)
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
          <input type="text" name="name" id="name" placeholder="nom" required onChange={(e) => setNameAdmin(e.target.value)} />
        </div>
        <div className={styles.passwordAdmin}>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" id="password" onChange={(e) => setPasswordAdmin(e.target.value)} />
        </div>
        <div className={styles.phraseAdmin}>
          <label htmlFor="phrase">Phrase secret</label>
          <input type="text" name="phrase" id="phrase" onChange={(e) => setPhraseAdmin(e.target.value)} />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </>
  );
};

export default LoginAdmin;
