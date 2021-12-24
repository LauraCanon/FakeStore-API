import React, { useState } from "react";
import { Link } from "react-router-dom";
import Countdown from "../../countdown/Countdown";

export const ProductItem = ({id, image, title}) => {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <li className="list-home">
      <img className="img-home" src={image} alt={title}></img>
      <h4 className="title-home">{title}</h4>
      <Link className="link-product" to={`/products/detail/${id}`}>
      {!isFinished && (
        <button className="btn-home">
          More details
        </button>
      )}
      </Link>
      <Countdown isFinished={isFinished} setIsFinished={setIsFinished} />
    </li>
  );
};
