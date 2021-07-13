import React from "react";
import "./Product.css";

export default function Product({ image, title, rating, discount, price }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{rating}</p>
      <p>{discount}</p>
      <p>{price}</p>
    </div>
  );
}
