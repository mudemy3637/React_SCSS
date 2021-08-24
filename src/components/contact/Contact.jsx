import { useState } from "react";
import "./contact.scss";

const Contact = (props) => {
  const [message, setMessage] = useState(false)

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact. </h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
          {message && <span>Thanks I`ll reply ASAP</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
