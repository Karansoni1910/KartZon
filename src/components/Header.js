import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Body } from "./Body";
import About from "./About";

export const Header = ({ showAbout }) => {
  const [category, setcategory] = useState("laptop");
  const handleClick = (value) => {
    setcategory(value);
  };

  const [dropdown, setdropdown] = useState("");
  const dropItDown = (temp) => {
    // console.log(temp);
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
          <Link className="link" to="/">
            <h3>KraftZon</h3>
          </Link>
        </div>
        <div className="center_section">
          <div
            className="travel"
            onMouseOver={() => dropItDown("travel")}
            onMouseLeave={hideDrop}
          >
            Travel Belongings
            {dropdown === "travel" ? (
              <div className="sub_menu">
                <span onClick={() => handleClick("PowerBank")}>PowerBank</span>
                <span onClick={() => handleClick("Speaker")}>Speaker</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="electronics"
            onMouseOver={() => dropItDown("electronics")}
            onMouseLeave={hideDrop}
          >
            Electronics
            <div className="sub_menu">
              {dropdown === "electronics" ? (
                <div className="sub_menu">
                  <span onClick={() => handleClick("Laptop")}>Laptop</span>
                  <span onClick={() => handleClick("Mobile")}>Mobile</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className="headset"
            onMouseOver={() => dropItDown("headset")}
            onMouseLeave={hideDrop}
          >
            Headsets
            <div className="sub_menu">
              {dropdown === "headset" ? (
                <div className="sub_menu">
                  <span onClick={() => handleClick("Earphones")}>
                    Earphones
                  </span>
                  <span onClick={() => handleClick("Headphones")}>
                    Headphones
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className="accessories"
            onMouseOver={() => dropItDown("accessories")}
            onMouseLeave={hideDrop}
          >
            Accessories
            <div className="sub_menu">
              {dropdown === "accessories" ? (
                <div className="sub_menu">
                  <span onClick={() => handleClick("Keyboard")}>Keyboard</span>
                  <span onClick={() => handleClick("Mouse")}>Mouse</span>
                  <span onClick={() => handleClick("USB")}>USB cable</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="about_section">
          <Link className="link" to="/about">
            About
          </Link>
        </div>
      </div>
      {showAbout ? <About /> : <Body category={category} />}
    </>
  );
};
