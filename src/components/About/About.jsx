import AboutJpg from "../../assets/about.jpg";
import PDFfile from "../../pdf/OmkarKadamResume.pdf";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
          <img src={AboutJpg} alt="Omkar Kadam" className="about__img" />
          <div className="about__data">
            <p className="about__description">
              Full-Stack Developer with 3+ years of experience building
              scalable web and mobile applications using JavaScript, TypeScript,
              React.js, Next.js, and Node.js. My work spans frontend,
              backend, cloud deployment, and integration with services like
              Stripe, Twilio, SendGrid, and Agora. I focus on clean architecture,
              strong product thinking, and measurable business impact.
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">03+</span>
                <span className="about__info-name">
                  Years <br />
                  experience
                </span>
              </div>
              <div>
                <span className="about__info-title">03+</span>
                <span className="about__info-name">
                  Key <br />
                  projects
                </span>
              </div>
              <div>
                <span className="about__info-title">03</span>
                <span className="about__info-name">
                  Companies <br />
                  worked
                </span>
              </div>
            </div>
            <div className="about__buttons">
              <a href={PDFfile} className="button button--flex" target="_blank" rel="noreferrer">
                Download CV <i className="uil uil-download-alt" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
