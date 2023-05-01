import React from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../data/const';
import { useEffect } from 'react';


function ModProductAdmin() {
  // recupération de l'id
  const { id } = useParams();

  const [item, setItem] = React.useState({});

  // recup du produit
  useEffect(() => {
    let urlReq = `${BASE_URL}/products/${id}`;
    fetch(urlReq)
      .then((res) => res.json())
      .then((datas) => setItem(datas[0]));
  }, [id]);

  console.log(item);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  // ajout de produit :
  const handleSubmit = (e) => {
    e.preventDefault();
    let urlReq = `${BASE_URL}/products/${id}`;
    fetch(urlReq, {
      method: "PUT",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(item),
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">titre</label>
        <input
          type="text"
          id="title"
          name="title"
          value={item.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={item.description}
          onChange={handleChange}
        />
        <label htmlFor="price">prix</label>
        <input
          type="text"
          id="price"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
        <input type="submit" value="Modify" />
      </form>
    </>
  );
}

export default ModProductAdmin