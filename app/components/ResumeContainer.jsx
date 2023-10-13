

const ResumeContainer = ({ handleClick, title, year, paragraph }) => {
  return (
    <>
      <div className="resume-container">
        <div onClick={handleClick}  className="title-year">
          <h3>{title}</h3>
          <h3>{year}</h3>
          <p className="hide-paragraph">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default ResumeContainer;
