import React from "react";
import "./Body.css";
import Product from "./Product";

export const Body = ({ category }) => {
  return (
    <div className="body">
      <h3>Showing products of "{category}" category</h3>
      <div className="products">
        <Product
          image={`https://source.unsplash.com/250x320/?${category}`}
          title={category}
          rating="4/5"
          discount="50%"
          price="₹400"
        />
        <Product
          image={`https://source.unsplash.com/250x320/?${category}`}
          title={category}
          rating="4/5"
          discount="50%"
          price="₹400"
        />
        <Product
          image={`https://source.unsplash.com/250x320/?${category}`}
          title={category}
          rating="4/5"
          discount="50%"
          price="₹400"
        />
        <Product
          image={`https://source.unsplash.com/250x320/?${category}`}
          title={category}
          rating="4/5"
          discount="50%"
          price="₹400"
        />
        <Product
          image={`https://source.unsplash.com/250x320/?${category}`}
          title={category}
          rating="4/5"
          discount="50%"
          price="₹400"
        />
        <Product
          image={`https://source.unsplash.com/250x320/?${category}`}
          title={category}
          rating="4/5"
          discount="50%"
          price="₹400"
        />
        <Product
          image={`https://source.unsplash.com/250x320/?${category}`}
          title={category}
          rating="4/5"
          discount="50%"
          price="₹400"
        />
        <Product
          image={`https://source.unsplash.com/250x320/?${category}`}
          title={category}
          rating="4/5"
          discount="50%"
          price="₹400"
        />
      </div>
    </div>
  );
};
