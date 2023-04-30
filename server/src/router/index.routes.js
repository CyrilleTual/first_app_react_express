import { Router } from "express";
import { homeView } from "../controller/home.js";
import productsRouter from "./products.routes.js";


export const router = Router();

router.get ("/api/v1", homeView)
router.use("/api/v1/products", productsRouter);

 export default router;