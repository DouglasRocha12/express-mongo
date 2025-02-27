import express from 'express';
import connectDatabase from './config/dbConnect.js';
import livro from './models/Livro.js';

const conexao = await connectDatabase();

conexao.on("error",(erro)=>{
    console.error('Erro de conexão',erro)
})

conexao.once("open",()=>{
   console.log("conexão com o bacno feita com sucesso!") 
})

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Curso de Express API');
});
app.get('/livros', async (req, res) => {
    const listaLivros = await livro.find({});

    res.status(200).json(listaLivros);
});
app.post('/livros', (req, res) => { 
    const livro = req.body;
    livros.push(livro);
    res.status(201).send("Livro adicionado com sucesso!");
});

app.get('/livros/:id', (req, res) => {
    const id = req.params.id;
    const livro = buscaLivroPorId(id);
    if(livro){
        res.status(200).json(livro);
    }else{
        res.status(404).send("Livro não encontrado");
    }
});

app.put('/livros/:id', (req, res) => {
    const id = req.params.id;
    const livro = req.body;
    const index = buscaLivroPorId(id);
    if(index == -1){
        res.status(404).send("Livro não encontrado");
    }else{
        index.autor = livro.autor;
        index.titulo = livro.titulo;
        res.status(200).send("Livro atualizado com sucesso!");
    }
});

app.delete('/livros/:id', (req, res) => {
    const id = req.params.id;
    const index = buscaLivroPorId(id);
    if(index == -1){
        res.status(404).send("Livro não encontrado");
    }else{
        livros.splice(index, 1);
        res.status(200).send("Livro removido com sucesso!");
    }
});

export default app;

