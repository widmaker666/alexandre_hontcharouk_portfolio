import Link from "next/link";
import styles from "../style/components/singlePageProject.module.css";

const SinglePageProject = ({
  title,
  entreprise,
  subTitle,
  year,
  description,
  shortDescription,
  technologies,
  siteWeb,
  image1,
  image2,
  image3,
}) => {

   
  return (
    <>
      <section className={styles["section-singleProject"]}>
        <h1>{title}</h1>
        <div className={styles["main-container"]}>
          <div className={styles["info-div"]}>
            <div>
              <h3>Site Web</h3>
              <Link href={siteWeb} target="_blank">
              <h4>{siteWeb}</h4>              
              </Link> 
            </div>
            <div>
              <h3>Entreprise</h3>
              <h4>{entreprise}</h4>
            </div>
            <div>
              <h3>year</h3>
              <h4>{year}</h4>
            </div>
          </div>
          <img src={image1} alt="logo MSC" />
        </div>
        <div className={styles["second-container"]}>
            <h2>Resumé : </h2>
            <p>{description}</p>
        </div>
        <div className={styles["third-container"]}>
          <img src={image2} alt="" />
          <div>
            <h2>Technologies utilisées :</h2>
            <p>{technologies}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePageProject;
