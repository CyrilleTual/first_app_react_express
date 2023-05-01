import React from 'react';
import { NavLink } from "react-router-dom";

function NavAdmin() {
  return (
    <nav>
      <NavLink to="/adminCatalog">Catalogue</NavLink>
      <NavLink to="/adminNewProduct">Nouveaux Produit</NavLink>
    </nav>
  );
}

export default NavAdmin