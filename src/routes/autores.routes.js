import express from 'express';

import AutoresController from "../controllers/autor.controller.js";

const routesAutrores = express.Router();

routesAutrores.get("/autores",AutoresController.listarAutores)
routesAutrores.post("/autores",AutoresController.cadastrarAutores)
routesAutrores.get("/autores/:id",AutoresController.listarAutoresPorId)
routesAutrores.put("/autores/:id",AutoresController.atualizarAutor)

export default routesAutrores