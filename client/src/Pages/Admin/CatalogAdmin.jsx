import React, { useEffect, useState } from "react";
import NavAdmin from "./Components/NavAdmin";
import { BASE_URL } from "../../data/const";

function CatalogAdmin() {
  // on va chercher le catalogue de produits
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let urlReq = `${BASE_URL}/products`;
    fetch(urlReq)
      .then((res) => res.json())
      .then((datas) => setProducts(datas));
  }, []);
  console.log(products);

  return (
    <>
      <NavAdmin />
      {products.map((product, i) => (
        <article key={i}>
          {product.title && <h3>{product.title}</h3>}
          {product.description && <p>{product.description}</p>}
        </article>
      ))}
    </>
  );
}

export default CatalogAdmin;
