import React from 'react';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../../data/const.js';
import { NavLink } from 'react-router-dom';

 

function Details({idSelected}) {
  // avec l'id reçu on va chercher le produit selectionné
  const [selectiond, setSelectiond] = React.useState({});
  

  useEffect(() => {
    let urlReq = `${BASE_URL}/products/${idSelected}`;
    fetch(urlReq)
      .then((res) => res.json())
      .then((datas) => setSelectiond(datas[0]));
  }, [idSelected]);


  const deleteOne = (e) => {
    const idToDelete = e.target.value;
    let urlReq = `${BASE_URL}/products/${idToDelete}`;
    fetch(urlReq, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
 
  };

  const modLink = ("/adminModProduct/").concat(selectiond.id)

  return (
    <>
      <article>
        {<h3>{selectiond.title}</h3>}
        {selectiond.id && <p> id : {selectiond.id}</p>}
        {selectiond.description && <p>{selectiond.description}</p>}
        {selectiond.price && <p>Prix: {selectiond.price} Euros</p>}
        <button onClick={deleteOne} value={selectiond.id}>
          Delete
        </button>

        <NavLink to={modLink}>Modify</NavLink>
      </article>
    </>
  );
}

export default Details