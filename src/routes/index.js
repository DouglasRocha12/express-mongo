import express from 'express';
import routesLivros from './livros.routes.js'


const routes = (app)=>{
    app.route("/").get((req,res) => res.status(200).send("curso de Node js"));
    app.use(express.json(),routesLivros);
}

export default routes