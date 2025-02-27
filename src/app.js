import express from 'express';
import connectDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
// import livro from './models/Livro.js';

const conexao = await connectDatabase();

conexao.on("error",(erro)=>{
    console.error('Erro de conexão',erro)
})

conexao.once("open",()=>{
   console.log("conexão com o bacno feita com sucesso!") 
})

const app = express();

routes(app);


// app.delete('/livros/:id', (req, res) => {
//     const id = req.params.id;
//     const index = buscaLivroPorId(id);
//     if(index == -1){
//         res.status(404).send("Livro não encontrado");
//     }else{
//         livros.splice(index, 1);
//         res.status(200).send("Livro removido com sucesso!");
//     }
// });

export default app;

