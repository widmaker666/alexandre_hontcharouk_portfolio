import styles from "../style/pages/projectPage.module.css"


const FormTextProject = ({htmlFor, label, id, placeholder, textarea, onChange}) => {
  return (
    <>
      <div className={styles["projet-description"]}>
        <label htmlFor={htmlFor}>{label}</label>
        <textarea id={id} cols="30" rows="10" placeholder={placeholder} onChange={(e) => onChange(e.target.value)}>{textarea}</textarea>
      </div>
    </>
  );
};

export default FormTextProject;
