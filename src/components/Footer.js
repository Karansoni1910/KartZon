import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="desc">
        <h3>KratZon</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          laudantium perferendis consectetur similique tempora ea, repudiandae
          hic ab aut aliquid accusamus incidunt unde ipsa labore, dolore sunt
        </p>
      </div>
      <div className="contact">
        <h5>Talk to us !!!</h5>
        <div className="form">
          <div className="cred">
            <div className="name">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="email">
              <input type="text" placeholder="Your e-mail" />
            </div>
          </div>
          <div className="msg">
            <input type="textarea" placeholder="Your Message" />
          </div>
          <div className="buttons">
            <button className="button">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
