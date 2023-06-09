import React, { useState } from 'react';
import { BASE_URL } from '../../data/const';

function NewProductAdmin() {

  const [values, setValues] = React.useState ({}) 

  const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
  }

  // ajout de produit : 
  const handleSubmit = (e) => {
    e.preventDefault();
    let urlReq = `${BASE_URL}/products`;
    fetch(urlReq, {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(values),
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">titre</label>
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <label htmlFor="price">prix</label>
        <input
          type="text"
          id="price"
          name="price"
          value={values.price}
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}

export default NewProductAdmin