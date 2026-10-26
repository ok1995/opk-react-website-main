import ProjectPng from "../../assets/project.png";

const ProjectInMind = () => {
  return (
    <>
      <section className="project section">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              <h2 className="project__title">Have a product idea in mind?</h2>
              <p className="project__description">
                I build scalable web and mobile experiences that turn business goals into reliable products.
              </p>
              <a href="#contact" className="button button--flex button--white">
                Let’s Talk
                <i className="uil uil-message project__icon button__icon" />
              </a>
            </div>
            <img src={ProjectPng} alt="Project planning" className="project__img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectInMind;
