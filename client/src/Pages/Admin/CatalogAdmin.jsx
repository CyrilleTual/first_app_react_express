import React, { useEffect, useState } from "react";
import NavAdmin from "./Components/NavAdmin";
import { BASE_URL } from "../../data/const";
import style from "./catalogAdmin.module.css"
import Details from "./Components/Details";


function CatalogAdmin() {
  // on va chercher le catalogue de produits
  const [products, setProducts] = useState([]);
  // selection 
  let [idSelected, setIdSelected] = useState("");

  useEffect(() => {
    let urlReq = `${BASE_URL}/products`;
    fetch(urlReq)
      .then((res) => res.json())
      .then((datas) => setProducts(datas));
  }, []);

   const onClick = (e) => {
    //console.log ("eee",e.target.value)
    setIdSelected(e.target.value);
   };
 
  return (
    <>
      <NavAdmin />

      <div className={style.cat}>
        <ul>
          {products.map((product, i) => (
            <li>
              <article key={i}>
                {<h3>{product.title}</h3>}
                {product.description && <p>{product.description}</p>}
                <button onClick={onClick} value={product.id}>
                  Voir détails
                </button>
              </article>
            </li>
          ))}
        </ul>
        <div class={style.right}>dd{idSelected !== "" && <Details idSelected={idSelected} />}</div>
      </div>
    </>
  );
}

export default CatalogAdmin;
