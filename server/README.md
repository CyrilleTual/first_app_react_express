The datas are stored in "res.locals.datas" thanks to a middleware refresh at eatch request.


Syntaxe des urls
-> view all :   GET  on   api/v1/products/
-> view one :   GET  on   api/v1/products/id
-> create :     POST on   api/V1/products
-> update  :    PUT  on   api/v1/products/id
-> delete  :    DELETE on api/v1/products/id

model : 

  {
    "id": string,
    "title": string,
    "description": string,
    "seller": string,
    "price": string,
    "category": string,
    "url_img": string"
  }