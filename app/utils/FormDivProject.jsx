import styles from "../style/pages/projectPage.module.css"


const FormDivProject = ({ htmlFor, label, type, id, placeholder, required, onChange }) => {
  return (
    <>
      <div className={styles["projet-title"]}>
        <label htmlFor={htmlFor}>{label}</label>
        <input type={type} id={id} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} required/>
      </div>
    </>
  );
};

export default FormDivProject;
