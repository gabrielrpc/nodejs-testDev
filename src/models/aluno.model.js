const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    //nome, e-mail, data de nascimento e número de matrícula
    nome_aluno: String,
    email_aluno: String,
    data_nasc_aluno: Date,
    matricula_aluno: String
  }
);

const alunos = mongoose.model("Alunos", DataSchema);
module.exports = alunos;
