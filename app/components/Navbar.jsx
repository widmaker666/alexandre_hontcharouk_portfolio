"use client";

import Link from "next/link";
import styles from "../style/components/navbar.module.css";
import { useState, useEffect } from "react";


// Composant de la Navbar de base
const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.name}>
          <h3>
            <Link href="/">Alexandre Hontcharouk</Link>
          </h3>
        </div>       
        <div className={styles["ul-Nav"]}>
          <Link href="/#projects">
            <span>p</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>t</span>
            <span>s</span>
          </Link>
          <Link href="/#about">
            <span>i</span>
            <span>n</span>
            <span>f</span>
            <span>o</span>
            <span>s</span>
          </Link>
          <Link href="/#contact">
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </Link>
          {/* Ajoutez un id au lien "admin" pour le cibler facilement */}
          <Link href="/login-admin" id="adminLink" style={{ display: 'none' }}>
            <span>a</span>
            <span>d</span>
            <span>m</span>
            <span>i</span>
            <span>n</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

// Composant qui gère la détection de la séquence "admin" et affiche le lien "admin"
const NavbarWithAdminLink = () => {
  const [typedKeys, setTypedKeys] = useState('');

  useEffect(() => {
    const adminSequence = 'sudoadmin';

    const handleKeyDown = (event) => {
      const newTypedKeys = (typedKeys + event.key).slice(-adminSequence.length);
      setTypedKeys(newTypedKeys);
    };

    // Vérifiez si la séquence correspond à "admin"
    if (typedKeys === adminSequence) {
      const adminLink = document.getElementById('adminLink');
      if (adminLink) {
        adminLink.style.display = 'block';
      }
    }

    // Écoute l'événement keydown pour détecter les touches pressées
    document.addEventListener('keydown', handleKeyDown);

    // Désinscrivez-vous de l'événement lorsque le composant est démonté
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [typedKeys]);

  return <Navbar />;
};

export default NavbarWithAdminLink;

