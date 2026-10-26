import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/pagination";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";

const projects = [
  {
    title: "Online Dental Appointment Booking Application",
    description:
      "Developed a scalable web app for online dental appointments with responsive UI, secure payment flows, campaign automation, and scheduled notifications using Next.js and Node.js.",
    image: portfolio1,
    tech: "Next.js, React.js, React Native, Node.js, AWS, Firebase",
    link: "#contact",
  },
  {
    title: "Healthcare Application",
    description:
      "Built a HIPAA-compliant healthcare platform with reusable widgets, drag-and-drop workflow experiences, and optimized backend APIs to improve engagement and scalability.",
    image: portfolio2,
    tech: "React, Redux Toolkit, Node.js, MongoDB, Docker, AWS",
    link: "#contact",
  },
  {
    title: "Diagram Rendering & Chart Platform",
    description:
      "Worked on diagram rendering and chart preview workflows, improving visual accuracy and reliability while maintaining end-to-end tests across browser environments.",
    image: portfolio3,
    tech: "JavaScript, TypeScript, Svelte, ReactJS, Playwright, Cypress",
    link: "#contact",
  },
];

const Portfolio = () => {
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>
        <div className="portfolio__container container">
          <Swiper
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <div className="portfolio__content grid">
                  <img src={project.image} alt={project.title} className="portfolio__img" />
                  <div className="portfolio__data">
                    <h3 className="portfolio__title">{project.title}</h3>
                    <p className="portfolio__description">{project.description}</p>
                    <p className="portfolio__description">
                      <strong>Tech stack:</strong> {project.tech}
                    </p>
                    <a
                      href={project.link}
                      className="button button--flex button--small portfolio__button"
                    >
                      Contact for details
                      <i className="uil uil-arrow-right button__icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
