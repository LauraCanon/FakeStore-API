import React, { useEffect, useState } from "react";
import "./Products.css";
import { ProductItem } from "./ProductItem";

export default function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch("https://fakestoreapi.com/products?limit=12");
    const list = await data.json();
    setProducts(list);
  };

  return (
    <>
      <div className="container-home">
        <h1 className="header-home">Products</h1>
        <ul className="ul-home">
          {products.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </>
  );
}
