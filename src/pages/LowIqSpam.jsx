import React from "react";
import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import emailjs from "emailjs-com";

function LowIqSpam() {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm("service_emwxl4v", "template_agtwhty", e.target, "TMiaipwYGp9FXRJx0")
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <NavBar />
      <NavBarMobile></NavBarMobile>
      <div className="form-wrap">
        <h1 className="form-h1">Do Not Talk With Us; <p>Language is insufficient.</p></h1>
        <p className="form-quote">
          "Wise men speak because they have something to say; Fools speak
          because they have to say something" - Plateau
        </p>
        <form className="form" onSubmit={sendEmail}>
          <div className="form-section">
            <h1 className="form-label">Name</h1>
            <div className="form-name">
              <div className="form-name-container">
                <input className="form-name-input"></input>
                <p className="form-name-sub">name</p>
              </div>
              <div className="form-name-container">
                <input className="form-name-input"></input>
                <p className="form-name-sub">surname</p>
              </div>
            </div>
          </div>
          <div className="form-section">
            <h1 className="form-label">Email</h1>
            <input className="form-input"></input>
          </div>
          <div className="form-section">
            <h1 className="form-label">Message</h1>
            <textarea className="form-textarea"></textarea>
          </div>
          <div>
            <input
              className="form-submit"
              type="submit"
              value="I am sure this is spam"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default LowIqSpam;