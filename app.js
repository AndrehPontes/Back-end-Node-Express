const express =  require("express");
const {randomUUID} =  require("crypto");

const app = express();

app.use(express.json());

const products = [];

/* ROTAS BÁSICAS

app.get("/", (request, response) => {
    return response.json({
        message: "Local Host",
    });
});

app.get("/primeira-rota", (request, response) => {
    return response.json({
        message: "Acessou a primeira rota  com express e nodemon",
    });
});

app.get("/produto", (request, response) => {
    return response.json({
        message: "Rota de produtos.",
    });
}); 

FIM ROTAS BÁSICAS */


/** 
 * POST   => Inserir um dado
 * GET    => Buscar ou inserir mais de um dado
 * PUT    => Alterar um dado
 * DELETE => Remover um dado 
 * 
 * /
 
/**
 * Body   => Sempre que eu quiser enviar dados para aplicação;
 * Params => /products/1546584154484
 * Query  => /products?id=487878415498485value=45984548748
 */

app.post("/products", (request, response) => {
    //nome e preço => name and price

    const { name, price } = request.body    //desestruração

    const product = {
     name,
     price,
     id: randomUUID(),   
    }
    
    products.push(product);

   return response.json(product);
});


app.get("/products", (request, response) => {
    return response.json(products);
});

app.get("/products/:id", (request, response) => {
    const { id } = request.params;
    const product = products.find((product) => product.id == id); 
    return response.json(product);
});


app.listen(4002, () => console.log("Servidor esta rodando na porta 4002"));
