import React from "react";
import "./Footer.css";
import Avatar from "@material-ui/core/Avatar";

const Footer = () => {
  return (
    <div className="footer">
      <div className="desc">
        <h3>KratZon</h3>
        <p>Affiliates forever, to be Rich forever...</p>
        <h5>Contributors</h5>
        <div className="contributors">
          <div className="contributor">
            <Avatar className="avatar_class">VA</Avatar>
            <span>Vikas Agarwal</span>
          </div>
          <div className="contributor">
            <Avatar className="avatar_class">KS</Avatar>
            <span>Karan Soni</span>
          </div>
          <div className="contributor">
            <Avatar className="avatar_class">SJ</Avatar>
            <span>Shreyansh Jain</span>
          </div>
          <div className="contributor">
            <Avatar className="avatar_class">SS</Avatar>
            <span>Shishir Semwal</span>
          </div>
        </div>
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
