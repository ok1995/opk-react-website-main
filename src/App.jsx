import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Qualification from "./components/Qualification/Qualification";
// import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonial/Testimonial";
import ProjectInMind from "./components/ProjectInMind/ProjectInMind";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";

function App() {
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  const randomNumber = getRandomNumber(0, 360);
  document.documentElement.style.setProperty("--hue-color", randomNumber);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        {/* <Services /> */}
        <Portfolio />
        {/* <Testimonial /> */}
        <ProjectInMind />
        <ContactMe />
      </main>
      <Footer />
      <ScrollUpButton />
    </>
  );
}

export default App;
