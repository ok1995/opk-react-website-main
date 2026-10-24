import { useState } from "react";

const Qualification = () => {
  const [qualification, setQualification] = useState("#education");

  const handleTabClick = (data) => {
    setQualification(data);
  };

  const education = [
    {
      title: "Diploma in Advanced Computing (DAC)",
      subtitle: "CDAC, Know-IT, Pune",
      period: "March 2022 - Nov 2022",
      align: "left",
    },
    {
      title: "Bachelor of Engineering",
      subtitle: "Savitribai Phule Pune University, Pune",
      period: "June 2013 - July 2017",
      align: "right",
    },
  ];

  const work = [
    {
      title: "Full-Stack Developer",
      subtitle: "Heaptrace Technologies, Pune",
      period: "Dec 2022 - Apr 2026",
      align: "left",
    },
  ];

  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={`qualification__button button--flex ${
                qualification === "#education" ? "qualification__active" : ""
              }`}
              onClick={() => handleTabClick("#education")}
            >
              <i className="uil uil-graduation-cap qualification__icon" />
              Education
            </div>
            <div
              className={`qualification__button button--flex ${
                qualification === "#work" ? "qualification__active" : ""
              }`}
              onClick={() => handleTabClick("#work")}
            >
              <i className="uil uil-briefcase-alt qualification__icon" />
              Work
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={`qualification__content ${
                qualification === "#education" ? "qualification__active" : ""
              }`}
              data-content
              id="education"
            >
              {education.map((item, index) => (
                <div className="qualification__data" key={item.title}>
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">{item.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt" /> {item.period}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder" />
                        <span className="qualification__line" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div />
                      <div>
                        <span className="qualification__rounder" />
                        <span className="qualification__line" />
                      </div>
                      <div>
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">{item.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt" /> {item.period}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div
              className={`qualification__content ${
                qualification === "#work" ? "qualification__active" : ""
              }`}
              data-content
              id="work"
            >
              {work.map((item, index) => (
                <div className="qualification__data" key={item.title}>
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">{item.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt" /> {item.period}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder" />
                        <span className="qualification__line" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div />
                      <div>
                        <span className="qualification__rounder" />
                      </div>
                      <div>
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">{item.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt" /> {item.period}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
