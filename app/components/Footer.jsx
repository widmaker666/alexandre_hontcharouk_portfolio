import styles from "../style/components/footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles["footer-section"]}>
        <div className={styles.div1}>
          <div>
            <h3>Alexandre Hontcharouk</h3>
            <p>Villeurbanne / Lyon</p>
          </div>
          <div>
            <a href="mailto:alexandre.professionel69@gmail.com">
              Mon mail : alexandre.professionel69@gmail.com
            </a>
            <a href="/privacy-policy">Politique de confidentialité</a>
          </div>
        </div>
        <div className={styles.div2}>
          <h3>Navigation :</h3>
          <div>
            <a href="/#project">Projets</a>
            <a href="/#about">Infos</a>
            <a href="/#contact">Contact</a>
            <a href="/devis">Devis</a>
          </div>
        </div>
        <div className={styles.div3}>
          <a target="_blank" href="https://www.linkedin.com/in/alexandre-hontcharouk-developpeur-web-frontend-javascript-reactjs/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-linkedin"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
          <a target="_blank" href="https://github.com/widmaker666">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
          <p>tous droits réservés à Alexandre Hontcharouk © 2023</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
