import styles from "../style/utils/resumeContainer.module.css"

const ResumeContainer = ({ handleClick, title, year, paragraph }) => {
  return (
    <>    
      <div className={styles.resume}>
        <div onClick={handleClick} className={styles.titleYear}>
          <h3>{title}</h3>
          <h3>{year}</h3>
          <p className={styles.hideParagraph}>
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default ResumeContainer;
