import Link from "next/link";
import styles from "../style/components/DivProject.module.css";

const DivProject = ({ project }) => {
  return (
    <>
      <div className={styles["div-projets"]}>
        <h2>{project.year}</h2>
        
        <Link href={`/project/${project._id}`}>
          <h1>{project.title}</h1>
        </Link>
                  
        
        <h4>{project.technologies}</h4>
      </div>
    </>
  );
};

export default DivProject;
