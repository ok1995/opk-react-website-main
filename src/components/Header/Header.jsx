import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem("selected-theme") === "dark",
  );
  const [isIconTheme, setIconTheme] = useState(
    localStorage.getItem("selected-icon") === "uil-moon",
  );

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const darkTheme = "dark-theme";
    const iconTheme = "uil-sun";
    const themeButton = document.getElementById("theme-button");

    if (!themeButton) return;

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

    if (isDarkTheme) {
      document.body.classList.add(darkTheme);
    } else {
      document.body.classList.remove(darkTheme);
    }

    if (isIconTheme) {
      themeButton.classList.add(iconTheme);
    } else {
      themeButton.classList.remove(iconTheme);
    }

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  }, [isDarkTheme, isIconTheme]);

  const handleThemeToggle = () => {
    setDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    setIconTheme((prevIsIconTheme) => !prevIsIconTheme);
  };

  const [activeLink, setActiveLink] = useState("");

  const setActiveLinkFromURL = () => {
    const currentURL = window.location.hash;
    setActiveLink(currentURL);
  };

  useEffect(() => {
    setActiveLinkFromURL();
    window.addEventListener("hashchange", setActiveLinkFromURL);
    return () => {
      window.removeEventListener("hashchange", setActiveLinkFromURL);
    };
  }, []);

  const setActiveLinkFromScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (
        window.scrollY >= sectionTop - sectionHeight * 0.25 &&
        window.scrollY < sectionTop + sectionHeight * 0.75
      ) {
        setActiveLink(`#${section.getAttribute("id")}`);
      }
    });
  };

  useEffect(() => {
    setActiveLinkFromScroll();
    window.addEventListener("scroll", setActiveLinkFromScroll);
    return () => {
      window.removeEventListener("scroll", setActiveLinkFromScroll);
    };
  }, []);

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">
            Omkar Kadam
          </a>
          <div
            className={`nav__menu ${showMenu ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  className={`nav__link ${
                    activeLink === "#home" ? "active-link" : ""
                  }`}
                >
                  <i className="uil uil-estate nav__icon" /> Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className={`nav__link ${
                    activeLink === "#about" ? "active-link" : ""
                  }`}
                >
                  <i className="uil uil-user nav__icon" /> About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  className={`nav__link ${
                    activeLink === "#skills" ? "active-link" : ""
                  }`}
                >
                  <i className="uil uil-file-alt nav__icon" /> Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  className={`nav__link ${
                    activeLink === "#portfolio" ? "active-link" : ""
                  }`}
                >
                  <i className="uil uil-scenery nav__icon" /> Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#qualification"
                  className={`nav__link ${
                    activeLink === "#qualification" ? "active-link" : ""
                  }`}
                >
                  <i className="uil uil-briefcase-alt nav__icon" /> Qualification
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#contact"
                  className={`nav__link ${
                    activeLink === "#contact" ? "active-link" : ""
                  }`}
                >
                  <i className="uil uil-message nav__icon" /> Contact me
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav__close"
              id="nav-close"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          </div>
          <div className="nav__btns">
            <i
              className="uil uil-moon change-theme"
              id="theme-button"
              onClick={handleThemeToggle}
            />
            <div className="nav__toggle" id="nav-toggle">
              <i
                className="uil uil-apps"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
