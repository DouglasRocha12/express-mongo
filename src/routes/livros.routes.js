import express from 'express';

import LivroController from "../controllers/livro.controller.js";

const routesLivros = express.Router();

routesLivros.get("/livros",LivroController.listarLivros)
routesLivros.get("/livros/busca",LivroController.listarLivroPorEditora)
// routesLivros.post("/livros",LivroController.cadastrarLivro)
// routesLivros.get("/livros/:id",LivroController.listarLivroPorId)
// routesLivros.put("/livros/:id",LivroController.atualizarLivro)

export default routesLivros