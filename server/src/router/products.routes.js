import { Router } from "express";
import {    productsView, 
            productViewOne, 
            productCreate, 
            productModify, 
            productDelete
        } from "../controller/products.js";

const router = Router();

// get all -> view
router.get("/", productsView); // url api/v1/products/
// get one -> viewOne
router.get ("/:productID", productViewOne); //api/v1/products/id
// post -> create
router.post("/", productCreate); 
// put -> update
router.put ("/:productID", productModify); 
// Delete -> delete
router.delete ("/:productID", productDelete);


export default router;
