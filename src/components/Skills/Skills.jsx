import { useState } from "react";
import "./Skills.scss";

const skillGroups = [
  {
    icon: "uil-brackets-curly",
    title: "Frontend & Mobile",
    subtitle: "React.js, Next.js, TypeScript, React Native",
    items: [
      { name: "React.js & Next.js", percent: 90, className: "skills__react" },
      { name: "TypeScript & JavaScript", percent: 90, className: "skills__js" },
      { name: "React Native & Expo", percent: 85, className: "skills__html" },
      { name: "Redux Toolkit & Material UI", percent: 85, className: "skills__css" },
      { name: "Tailwind CSS & HTML5", percent: 90, className: "skills__adobe" },
    ],
  },
  {
    icon: "uil-server-network",
    title: "Backend & Databases",
    subtitle: "Node.js, Express.js, Java, Spring Boot",
    items: [
      { name: "Node.js & Express.js", percent: 85, className: "skills__node" },
      { name: "REST APIs", percent: 85, className: "skills__sql" },
      { name: "Java & Spring Boot", percent: 80, className: "skills__java" },
      { name: "MongoDB & PostgreSQL", percent: 80, className: "skills__python" },
      { name: "MySQL & Firestore", percent: 75, className: "skills__photoshop" },
    ],
  },
  {
    icon: "uil-setting",
    title: "Testing, DevOps & Cloud",
    subtitle: "AWS, Docker, CI/CD, Firebase, Playwright",
    items: [
      { name: "AWS EC2 & ECS", percent: 85, className: "skills__adobe" },
      { name: "Docker & CI/CD", percent: 85, className: "skills__css" },
      { name: "Firebase Hosting & Functions", percent: 80, className: "skills__js" },
      { name: "Playwright & Postman", percent: 85, className: "skills__react" },
      { name: "GitHub Actions & Jira", percent: 90, className: "skills__html" },
    ],
  },
];

const Skills = () => {
  const [activeSection, setActiveSection] = useState(0);

  const toggleSection = (sectionIndex) => {
    setActiveSection((prevSection) =>
      prevSection === sectionIndex ? -1 : sectionIndex,
    );
  };

  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills_container container grid">
          <div>
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className={`skills__content ${
                  activeSection === index ? "skills__open" : "skills__close"
                }`}
              >
                <div className="skills__header" onClick={() => toggleSection(index)}>
                  <i className={`uil ${group.icon} skills__icon`} />
                  <div>
                    <h1 className="skills__title">{group.title}</h1>
                    <span className="skills__subtitle">{group.subtitle}</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow" />
                </div>
                <div className="skills__list grid">
                  {group.items.map((item) => (
                    <div className="skills__data" key={item.name}>
                      <div className="skills__titles">
                        <h3 className="skills__name">{item.name}</h3>
                        <span className="skills__number">{item.percent}%</span>
                      </div>
                      <div className="skills__bar">
                        <span
                          className={`skills__percentage ${item.className}`}
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
