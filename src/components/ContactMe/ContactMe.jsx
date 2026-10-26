import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all the fields.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.fullname}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullname}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`,
    );

    window.location.href = `mailto:omkarkadam1995@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Your email app is opening. I look forward to connecting.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setFormData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>
        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <a href="tel:+919860403894" style={{ color: "inherit" }}>
                <i className="uil uil-phone contact__icon" />
              </a>
              <div>
                <h3 className="contact__title">Phone</h3>
                <span className="contact__subtitle">
                  <a href="tel:+919860403894" style={{ color: "inherit" }}>
                    +91 9860403894
                  </a>
                </span>
              </div>
            </div>

            <div className="contact__information">
              <a
                href="mailto:omkarkadam1995@gmail.com"
                style={{ color: "inherit", display: "flex" }}
              >
                <i className="uil uil-envelope contact__icon" />
                <div>
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">omkarkadam1995@gmail.com</span>
                </div>
              </a>
            </div>

            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon" />
              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contact__subtitle">Pune, India</span>
              </div>
            </div>
          </div>

          <form action className="contact__form grid" onSubmit={handleSubmit}>
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="fullname" className="contact__label">
                  Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  className="contact__input"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__content">
                <label htmlFor="email" className="contact__label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="contact__input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact__content">
              <label htmlFor="phone" className="contact__label">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="contact__input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="contact__content">
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <textarea
                id="message"
                cols={0}
                rows={7}
                className="contact__input"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="button button--flex"
                style={{ border: "none", cursor: "pointer" }}
              >
                Send Message
                <i className="uil uil-message button__icon" />
              </button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ContactMe;
