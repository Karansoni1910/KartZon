import React from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

export default function Details() {
  let product_no =window.location.href.slice(-1);
  let {id} = useParams();
  const product = [
    `https://source.unsplash.com/180x180/?${id}`,
    id,
    "4/5",
    "50%",
    "₹400",
  ];
  console.log("this is product details", product);
  console.log("this is id: "+id);
  console.log("this is product_no: "+product_no);
  
  return (
    <>
      <div className="product_details">
        <div className="image">
          <img src={product[0]} alt="" />
        </div>
        <div className="prod_desc">
          <p>Category:-{product[1]}</p>
          <p>Product Number:-{product_no}</p>
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
