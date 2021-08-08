import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";

export const Body = ({ category }) => {
  return (
    <div>
      <div className="body">
        <h3>Showing products of "{category}" category</h3>
        <div className="products">
          <div className="product">
            <div className="product_image">
              <Link
               to={`/${category}/:1`}
                >
                <img
                  src={`https://source.unsplash.com/180x180/?${category}`}
                  alt=""
                  className="products_image"
                />
              </Link>
            </div>
            <div className="product_details">
              <p>{category}</p>
              <p>4/5</p>
              <p>50%</p>
              <p>₹400</p>
            </div>
          </div>
          <div className="product">
            <div className="product_image">
              <Link to={`/${category}/:2`}>
                <img
                  src={`https://source.unsplash.com/180x180/?${category}`}
                  alt=""
                  className="products_image"
                />
              </Link>
            </div>
            <div className="product_details">
              <p>{category}</p>
              <p>4/5</p>
              <p>50%</p>
              <p>₹400</p>
            </div>
          </div>
          <div className="product">
            <div className="product_image">
              <Link to={`/${category}/:3`}>
                <img
                  // onClick={() => handleselect()}
                  src={`https://source.unsplash.com/180x180/?${category}`}
                  alt=""
                  className="products_image"
                />
              </Link>
            </div>
            <div className="product_details">
              <p>{category}</p>
              <p>4/5</p>
              <p>50%</p>
              <p>₹400</p>
            </div>
          </div>
          <div className="product">
            <div className="product_image">
              <Link to={`/${category}/:4`}>
                <img
                  // onClick={() => handleselect()}
                  src={`https://source.unsplash.com/180x180/?${category}`}
                  alt=""
                  className="products_image"
                />
              </Link>
            </div>
            <div className="product_details">
              <p>{category}</p>
              <p>4/5</p>
              <p>50%</p>
              <p>₹400</p>
            </div>
          </div>
          <div className="product">
            <div className="product_image">
              <Link to={`/${category}/:5`}>
                <img
                  // onClick={() => handleselect()}
                  src={`https://source.unsplash.com/180x180/?${category}`}
                  alt=""
                  className="products_image"
                />
              </Link>
            </div>
            <div className="product_details">
              <p>{category}</p>
              <p>4/5</p>
              <p>50%</p>
              <p>₹400</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className={`product____details ${showDetail}`}>
        <Details/>
      </div> */}
    </div>
  );
};
