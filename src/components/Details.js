import React from "react";
import "./Details.css";

export default function Details() {
  const category = "laptop";
  const product = [
    `https://source.unsplash.com/180x180/?${category}`,
    category,
    "4/5",
    "50%",
    "₹400",
  ];
  console.log("this is product details", product);
  console.log(window.location.href.slice(-1));
  return (
    <>
      <div className="product_details">
        <div className="image">
          <img src={product[0]} alt="" />
        </div>
        <div className="prod_desc">
          <p>Category:-{product[1]}</p>
          <p>Rating:-{product[2]}</p>
          <p>Discount:-{product[3]}</p>
          <p>Price:-{product[4]}</p>
          <p>Link to redirect</p>
        </div>
      </div>
      <div className="others">
        <h3>Products related to this item</h3>
        <div className="recommendations">
          <span>Other product</span>
          <span>Other product</span>
          <span>Other product</span>
          <span>Other product</span>
          <span>Other product</span>
        </div>
      </div>
    </>
  );
}
