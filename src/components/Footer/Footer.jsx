const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Omkar Kadam</h1>
              <span className="footer__subtitle">Full-Stack Developer</span>
            </div>
            <ul className="footer__links"></ul>
            <div className="footer__socials">
              <a
                href="https://www.linkedin.com/in/omkar-kadam-285051b8"
                target="_blank"
                className="footer__social"
                rel="noreferrer"
              >
                <i className="uil uil-linkedin-alt" />
              </a>
              <a
                href="https://github.com/ok1995"
                target="_blank"
                className="footer__social"
                rel="noreferrer"
              >
                <i className="uil uil-github-alt" />
              </a>
              <a href="mailto:omkarkadam1995@gmail.com" className="footer__social" rel="noreferrer">
                <i className="uil uil-envelope" />
              </a>
            </div>
          </div>
          <p className="footer__copy">
            © {new Date()?.getFullYear()} Omkar Kadam. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
