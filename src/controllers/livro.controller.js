import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

export default class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      console.log(listaLivros)
      res.status(200).json(listaLivros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao listar Livros` });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor)

      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "Criado com sucess", livro: livroCriado });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);

      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar livro` });
    }
  }
  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);

      res.status(200).json({ message: "Livro atualizado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar livro` });
    }
  }

  static async listarLivroPorEditora(req, res) {
    const editora = req.query.editora
    
    try {

      const livrosPorEditora = await livro.find({ editora: editora });

      res.status(200).json(livrosPorEditora);
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - falha ao buscar livro` });
    }
  }
}
