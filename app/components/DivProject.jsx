import styles from "../style/components/DivProject.module.css";

const DivProject = ({ project }) => {
  return (
    <>
      <div className={styles["div-projets"]}>
        <h2>{project.year}</h2>
        <h1>{project.title}</h1>
        <h4>{project.technologies}</h4>
      </div>
    </>
  );
};

export default DivProject;
