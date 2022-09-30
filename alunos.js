//Requerendo, chamando a classe aluno
const Aluno = require("./classeAluno");

//Criar um objeto, instanciar a classe
const aluno1 = new Aluno(001, 'Davi', 34, 5);

const aluno2 = new Aluno(002, 'João', 16);

//Exibir os dados

console.log(aluno1.aprovado());