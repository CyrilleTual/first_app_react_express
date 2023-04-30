import express from "express";
import "dotenv/config";
import router  from "./router/index.routes.js";
import getDatas from "./middleware/getDatas.js";


const PORT = process.env.LOCAL_PORT;
const app = express();

app
  .use(express.static("public")) // defini le repertoire des fichiers statics
  .use(express.urlencoded({ extended: true })) // permet de recuperer les formulaires
  .use(express.json())  // necessaire pour les imports/exports Json!!
  .use(getDatas)
  .use(router);

app.listen(PORT, (err) =>{
    err ? console.log (err)
        : console.log (`server is listening at http://localhost:${PORT}`);
        
});