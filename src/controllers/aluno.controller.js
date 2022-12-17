const Aluno = require("../models/aluno.model");
const fs = require("fs");
const { JSONRead, JSONWrite } = require("../functions");
const filePath = "./alunos.json";

module.exports = {
  async create(req, res) {
    const { nome_aluno, email_aluno, data_nasc_aluno, matricula_aluno } =
      req.body;
    let newData = {};
    let user = await Aluno.findOne({ email_aluno });
    if (!user) {
      newData = { nome_aluno, email_aluno, data_nasc_aluno, matricula_aluno };
      const novoObj = await JSONRead(filePath, newData)
      await JSONWrite(filePath, novoObj)
      user = await Aluno.create(newData);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },

  async listar(req, res) {
    const user = await JSONRead(filePath)
    // const user = await Aluno.find()
    res.json(user);
  },
};
