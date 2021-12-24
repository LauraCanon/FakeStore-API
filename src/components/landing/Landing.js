import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import shop from "../img/shop.jpeg";

export default function HomeLanding() {
  return (
    <div className="container-land">
      <img className="img-land" src={shop} alt="Shop img"></img>
      <div className="btn-container">
        <h1 className="title-land">We have the best products!</h1>
        <Link className="link-land" to={"/products"}>
          <button className="btn-land">Shop now</button>
        </Link>
      </div>
    </div>
  );
}
