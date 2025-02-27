import express from 'express';

const app = express();
app.use(express.json());
const livros = [
    {
        id: 1,
        titulo: 'O Senhor dos Anéis',
        autor: 'J. R. R. Tolkien'
    } ,
    {
        id: 2,
        titulo: 'Fundação',
        autor: 'Isaac Asimov'
    }
    
]

function buscaLivroPorId(id){
    return livros.find(l => l.id == id);
}

app.get('/', (req, res) => {
    res.status(200).send('Curso de Express API');
});
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
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
