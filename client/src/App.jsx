 
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin/Index";
import Home from "./Pages/Home/Index";
import CatalogAdmin from "./Pages/Admin/CatalogAdmin";
import NewProductAdmin from "./Pages/Admin/NewProductAdmin";
import ModProductAdmin from "./Pages/Admin/ModProductAdmin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminCatalog" element={<CatalogAdmin />} />
        <Route path="/adminNewProduct" element={<NewProductAdmin />} />
        <Route path="/adminModProduct/:id" element={<ModProductAdmin />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
