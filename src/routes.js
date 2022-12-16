const express = require("express");
const routes = express.Router();
const Aluno = require("./controllers/aluno.controller");

routes.post("/aluno/cadastrar", Aluno.create);
routes.get("/aluno/listar", Aluno.listar);

module.exports = routes;
