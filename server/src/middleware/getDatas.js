import { readFile } from "fs";

export default (req, res, next) => {
    readFile ("src/data/product.json", "utf8", (error,data) => {
        if (error){
            console.log ('Caramba, problemo dans la lecture de datas')
            res.end;
            next();
            return;
        }
        res.locals.datas = JSON.parse(data);
        res.end;
        next();
        return;
    });
}