const Aluno = require("../models/aluno.model");
const fileSy = require("../functions/index")
const file = "./alunos.json"

module.exports = {
  async create(req, res) {
    const { nome_aluno, email_aluno, data_nasc_aluno, matricula_aluno } =
      req.body;
    let data = {};
    let user = await Aluno.findOne({ email_aluno });
    if (!user) {
      data = { nome_aluno, email_aluno, data_nasc_aluno, matricula_aluno };
      user = await Aluno.create(data);
      const userData = await Aluno.find()
      await fileSy.JSONUpdate(file, userData);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },

  async listar(req, res) {
    const user = await Aluno.find()
      res.json(user);
  }
};
