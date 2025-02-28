import { autor } from "../models/Autor.js";

export default class AutoresController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});

      res.status(200).json(listaAutores);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao listar Autores` });
    }
  }

  static async cadastrarAutores(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucess", autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar Autor` });
    }
  }

  static async listarAutoresPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      res.status(200).json(autorEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar Autor` });
    }
  }
  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);

      res.status(200).json({ message: "Autores atualizado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar Autor` });
    }
  }
}
