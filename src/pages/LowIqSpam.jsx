import React, { useState } from "react";
import emailjs from "emailjs-com";

function LowIqSpam() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send("service_emwxl4v", "template_agtwhty", formData, "TMiaipwYGp9FXRJx0")
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="container">
      <div className="form-wrap">
        <h1 className="form-h1">Do Not Talk With Us <p>Language is insufficient.</p></h1>
        <p className="form-quote">
          "Wise men speak because they have something to say; Fools speak
          because they have to say something" - Plato
        </p>
        <form className="form" onSubmit={sendEmail}>
          <div className="form-section">
            <h2 className="form-label">Name</h2>
            <div className="form-name">
              <div className="form-name-container">
                <input
                  className="form-name-input"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <p className="form-name-sub">First Name</p>
              </div>
              <div className="form-name-container">
                <input
                  className="form-name-input"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                <p className="form-name-sub">Last Name</p>
              </div>
            </div>
          </div>
          <div className="form-section">
            <h2 className="form-label">Email</h2>
            <input
              className="form-input"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-section">
            <h2 className="form-label">Message</h2>
            <textarea
              className="form-textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              className="form-submit"
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LowIqSpam;