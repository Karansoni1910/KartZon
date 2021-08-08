import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const Header = () => {
  const [dropdown, setdropdown] = useState("");
  const dropItDown = (temp) => {
    setdropdown(temp);
  };
  const hideDrop = () => {
    setdropdown("");
  };
  return (
    <>
      <div className="header">
        <div className="title_section">
          {/* the image will go here */}
          <Link className="title_link" to="/">
            <h3>KartZon</h3>
          </Link>
        </div>
        <div className="center_section">
          <div
            className="dropdown"
            onMouseOver={() => dropItDown("travel")}
            onMouseLeave={hideDrop}
          >
            Travel Belongings
            {dropdown === "travel" ? (
              <div className="sub_menu">
                <Link className="nav_link" to="/powerbank">
                  <span>PowerBank</span>
                </Link>
                <Link className="nav_link" to="/speaker">
                  <span>Speaker</span>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="dropdown"
            onMouseOver={() => dropItDown("electronics")}
            onMouseLeave={hideDrop}
          >
            Electronics
            {dropdown === "electronics" ? (
              <div className="sub_menu">
                <Link className="nav_link" to="/laptop">
                  <span>Laptop</span>
                </Link>
                <Link className="nav_link" to="/mobile">
                  <span>Mobile</span>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="dropdown"
            onMouseOver={() => dropItDown("headset")}
            onMouseLeave={hideDrop}
          >
            Headsets
            {dropdown === "headset" ? (
              <div className="sub_menu">
                <Link className="nav_link" to="/earphone">
                  <span>Earphones</span>
                </Link>
                <Link className="nav_link" to="/headphone">
                  <span>Headphones</span>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="dropdown"
            onMouseOver={() => dropItDown("accessories")}
            onMouseLeave={hideDrop}
          >
            Accessories
            {dropdown === "accessories" ? (
              <div className="sub_menu">
                <Link className="nav_link" to="/keyboard">
                  <span>Keyboard</span>
                </Link>
                <Link className="nav_link" to="/mouse">
                  <span>Mouse</span>
                </Link>
                <Link className="nav_link" to="/usb">
                  <span>USB cable</span>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="sign_in_section">
          <Link className="link" to="/signin">
            <div className="signin_icon">
              <ExitToAppIcon />
            </div>
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};
