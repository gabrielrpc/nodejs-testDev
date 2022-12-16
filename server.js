const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./src/routes")

const app = express();
const port = process.env.PORT || 5000;

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb://localhost:27017/test-nodejs-alunos",
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB CONECTADO com sucesso!");
    }
  }
);

app.use(cors()); //segurança para saber quais dominios estão usando a api
app.use(cookieParser());
app.use(express.json()); // para informar que sera enviado json do front para o back e do back para o front
app.use(routes)
app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
