import React from "react";
import style from "./index.module.css";

function Home() {
  return (
    <main id="home" className={style.mainPart}>
      <header className="sub-header">
        <h1>Ici le titre principal de la page Home</h1>
        <p>
          Texte direct du component Home <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quis
          voluptas nihil voluptatibus illo quod dicta numquam magnam similique
          nam.
        </p>
      </header>
    </main>
  );
}

export default Home;
