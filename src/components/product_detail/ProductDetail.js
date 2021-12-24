import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
  //console.log(useParams())
  const { id } = useParams();

  const [detail, setDetail] = useState([]);
  const [dato, setDato] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const detail = await data.json();
      setDetail(detail);
      setDato(detail.rating);
    };
    fetchApi();
  }, [id]);

  return (
    <>
      <h1 className="title-prod">Product Detail</h1>
      <div className="container-product">
        <img className="img-prod" src={detail.image} alt={detail.title}></img>
        <h3 className="detail-prod">{detail.title}</h3>
        <p className="category">{detail.description}</p>
        <p className="price">Price: ${detail.price} USD</p>
        <p>
          Rate: {dato.rate} | Invent: {dato.count}
        </p>
        <Link to={`/products`}>
          <button className="btn-prod">Go Back</button>
        </Link>
      </div>
    </>
  );
}
