/*
Gabriel Cecon Carlsen - cecon.carlsen@unesp.br

Ambiente de Desenvolvimento
- Node versão: 16.15.0
- Em seu terminal digite node main para executar o projeto

Conceitos Importantes
- Em JavaScript funções podem ser definidas de duas formas:

  function exemplo (parametros) {...} 

          OU

  const exemplo = (parametros) => {...} 

Referências
- https://nodejs.org/api/readline.html
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/constructor
- https://www.w3schools.com/js/js_object_constructors.asp
*/

const { v4: uuidv4 } = require("uuid"); //Geração de ID's únicos
const readline = require("readline"); //Ler dados do usuário pelo terminal

const AlunoAcademia = require("./1/AlunoAcademia");

function exericio1() {
  let alunos = [];

  const menu = () => {};

  const cadastrarAluno = (nome, idade, peso, altura) => {
    alunos.push(new AlunoAcademia(uuidv4(), nome, idade, peso, altura));
  };

  //Para cada aluno no vetor de alunos, listar seu nome
  const listarNomes = () => {
    console.log("\n[Alunos]");
    alunos.forEach((aluno) => {
      console.log(aluno.nome);
    });
  };

  //Conjunto de relatórios pessoais
  const relatorioGeral = () => {
    console.log("\n[Relatório geral]");
    alunos.forEach((aluno) => {
      aluno.relatorioPessoal();
    });
  };

  cadastrarAluno("Gabriel", 22, 60, 1.77);

  listarNomes();
  relatorioGeral();
}

function exericio2() {
  let contas = [];

  const cadastrarConta = () => {};
  const saque = () => {};
  const deposito = () => {};
  const listarContas = () => {};
  const relatorioGeral = () => {};
  const relatorioContasSaldoNegativo = () => {};
  const relatorioCliente = () => {};
}

function exericio3() {
  let produtos = [];

  const cadastrarEstadual = () => {};
  const cadastrarNacional = () => {};
  const cadastrarImportado = () => {};
  const exibirEstaduais = () => {};
  const exibirNacionais = () => {};
  const exibirImportados = () => {};
  const exibirTodos = () => {};
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let choice;

  console.log(
    "[Menu de exercícios]\n",
    "1 - Exercício 1\n",
    "2 - Exercício 2\n",
    "3 - Exercício 3\n",
    "9 - Sair\n"
  );

  rl.question("Escolha o exerício: ", (number) => {
    choice = number;
    rl.close();
  });
}

exericio1();
