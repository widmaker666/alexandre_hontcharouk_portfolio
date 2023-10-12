import Link from "next/link";
import styles from "../style/components/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.name}>
          <h3>
            <Link href="/">Alexandre Hontcharouk</Link>
          </h3>
        </div>
        <div className={styles.ulNav}>
          {/*hide admin*/}
          <Link href="/panel-admin">
            <span>a</span>
            <span>d</span>
            <span>m</span>
            <span>i</span>
            <span>n</span>
          </Link>
          <Link href="/project/id">
            <span>p</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </Link>
          <Link href="#about">
            <span>a</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
          </Link>
          <Link href="#contact">
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </Link>
          <Link href="/english">en|fr</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
