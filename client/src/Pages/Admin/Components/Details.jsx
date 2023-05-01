import React from 'react';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../../data/const.js';

 

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
    e.preventDefault();
  };

  return (
    <>
      <div>Details produit {idSelected}</div>
      <article>
        {<h3>{selectiond.title}</h3>}
        {selectiond.id && <p>{selectiond.id}</p>}
        {selectiond.description && <p>{selectiond.description}</p>}
        {selectiond.price && <p>{selectiond.price}</p>}
        <button onClick={deleteOne} value={selectiond.id}>
          Delete
        </button>
      </article>
    </>
  );
}

export default Details