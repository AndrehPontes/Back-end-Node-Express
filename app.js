const express =  require("express");

const app = express();

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


app.listen(4002, () => console.log("Servidor esta rodando na porta 4002"));
