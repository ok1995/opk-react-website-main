import { ReactSVG } from "react-svg";
import Perfil from "../../assets/perfil.png";
import PDFfile from "../../pdf/OmkarKadamResume.pdf";

const Home = () => {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/omkar-kadam-285051b8"
                target="_blank"
                className="home__social-icon"
                rel="noreferrer"
              >
                <i className="uil uil-linkedin-alt" />
              </a>
              <a
                href="https://github.com/ok1995"
                target="_blank"
                className="home__social-icon"
                rel="noreferrer"
              >
                <i className="uil uil-github-alt" />
              </a>
            </div>
            <div className="home__img">
              <ReactSVG
                src={`data:image/svg+xml;utf8,${encodeURIComponent(`
                <svg
                class="home__blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />

                  <image
                    class="home__blob-img"
                    x="12"
                    y="18"
                    xlink:href="${Perfil}"
                  />
                </g>
              </svg>
    `)}`}
              />
            </div>
            <div className="home__data">
              <span className="home__badge">Immediate Joiner | 3+ Years Experience</span>
              <h1 className="home__title">Hello, I am Omkar Kadam</h1>
              <h3 className="home__subtitle">Full-Stack Developer</h3>
              <p className="home__description">
                Full-Stack Developer with 3+ years of experience building
                scalable web and mobile applications using JavaScript,
                TypeScript, React.js, Next.js, and Node.js. I enjoy delivering
                end-to-end features, optimizing performance, and collaborating
                in Agile teams.
              </p>
              <div className="home__buttons">
                <a href="#contact" className="button button--flex">
                  Contact Me <i className="uil uil-message button__icon" />
                </a>
                <a href={PDFfile} className="button button--flex button--secondary" target="_blank" rel="noreferrer">
                  Download CV <i className="uil uil-download-alt button__icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <i className="uil uil-mouse-alt home__scroll-mouse" />
              <span className="home__scroll-name">Scroll down</span>
              <i className="uil uil-arrow-down home__scroll-arrow" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
