import styles from "./style/pages/landingPage.module.css";

export default function Home() {
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
    </>
  );
}
