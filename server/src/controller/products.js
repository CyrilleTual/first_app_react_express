/**
 * Management of produts / stored in "res.locals.datas"
 */
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

/**
 * UpdateFile function mise a jour du json ( db )
 */
function UpdateFile(datas) {
  fs.writeFile("src/data/product.json", JSON.stringify(datas), (err) => {
    if (err) {
      console.error(err);
    }
    // fichier écrit avec succès
  });
}
//

/**
 * Consultation de tous les produits  ok
 */
export const productsView = (req, res) => {
  res.status(200).send(res.locals.datas);
};


/**
* Vue d'un seul produit en fonction d'un id reçu en paramètre  ok
 */
export const productViewOne = (req, res) => {
    const datas = res.locals.datas;
    const idToDisplay = req.params.productID;
    const result = datas.filter((data) => data.id === idToDisplay);
    res.status(200).send(result);
};

/***
 * Creation d'un nouveau produit ok
 */
export const productCreate = (req, res) => {
    
    const datas = res.locals.datas;
    let prodToAdd = req.body; 
    const id = uuidv4();
    // ajout de l'id au nouvel article
    prodToAdd.id = id;

    // pour tests  a mettre das le body du post 
    // const prodToAdd = {
    //   id: "39136dfgdfgdgfdd0d760d66be",
    //   title: "new prod",
    //   description:
    //     "difficile et regarder sur internet, réaliser que sur le Larzac ça ne capte pas",
    //   price: 200,
    // };

    datas.push(prodToAdd);
    UpdateFile (datas);
    res.status(200).send("New product created");
};


/**
 * Modification d'un produit particulier  (reçoit id)  
 */
export const productModify = (req, res) => {

    let datas = res.locals.datas; 
    let toMod = req.body; 
    // on remove l'ancien produit 
    const newDatas = datas.filter((data) => data.id !== req.params.productID); 
    //puis add du nouveau 
    newDatas.push(toMod); // modification du tableau crée
    UpdateFile(newDatas);
  res.status(200).send("product updated");
};


/**
 * Effacement d'un produit selon id en param  ok
 */
export const productDelete = (req, res) => {

    const datas = res.locals.datas;
    const idToRemove = req.params.productID;
    const result = datas.filter((data) => data.id !== idToRemove);
    UpdateFile(result);
    res.status(200).send("Product deleted");
};
