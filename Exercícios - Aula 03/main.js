/*

Gabriel Cecon Carlsen - cecon.carlsen@unesp.br

Ambiente de Desenvolvimento
- Node versão: 16.15.0
- Editor Visual Studio Code com a extensão Code Runner;
- Após baixar a extensão, clique com o botão direito no arquivo e escolha Run Code (CTRL + ALT + N);

Referências
- https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript
*/

const Aluno = require("./1/Aluno");
const Banco = require("./3/Banco");
const Horario = require("./4/Horario");
const Academia = require("./2/Academia");
const ListaGenerica = require("./7/Lista");
const Eletrodomestico = require("./6/Eletrodomestico");
const ContaCorrenteEspecial = require("./5/ContaCorrenteEspecial");

function Main() {
  //------EXERCÍCIO 1------------EXERCÍCIO 1------------EXERCÍCIO 1------------EXERCÍCIO 1------
  console.log("\nEXERCÍCIO 1");
  //Instanciando a classe (agora temos Objetos Aluno)
  const aluno1 = new Aluno(
    "181250969",
    "Gabriel Cecon Carlsen",
    [5.0, 3.0, 2.0, 4.5]
  );

  const aluno2 = new Aluno(
    "211250969",
    "João Silva Souza",
    [10.0, 9.0, 7.5, 5.0]
  );

  //Chamando a função para cálcular a média baseada nas notas do Objeto instanciado
  aluno1.mediaAritmerica();
  aluno2.mediaAritmerica();

  //Utilizando encapsulamento
  aluno1.setNome("Pedro Rocha"); //Setando um novo nome para o Objeto aluno1
  aluno1.setNotas([10.0, 9.0, 7.0, 10.0]); //Setando um novo vetor de notas para o Objeto aluno1

  console.log(
    "Alterei dinâmicamente o nome do aluno 1 para:",
    aluno1.getNome()
  );

  console.log(
    "Alterei dinâmicamente as notas do aluno 1 para:",
    aluno1.getNotas()
  );

  aluno1.mediaAritmerica();

  //------EXERCÍCIO 2------------EXERCÍCIO 2------------EXERCÍCIO 2------------EXERCÍCIO 2------
  console.log("\n\nEXERCÍCIO 2");

  academia = new Academia();
  academia.cadastrarAluno({
    nome: "Pedro",
    idade: 22,
    peso: 70.0,
    altura: 1.7,
  });
  academia.descontoEspecial();
  academia.calcularIMC();

  //------EXERCÍCIO 3------------EXERCÍCIO 3------------EXERCÍCIO 3------------EXERCÍCIO 3------
  console.log("\n\nEXERCÍCIO 3");

  banco = new Banco();
  banco.adicionarConta({
    numero: "111111111",
    nome: "Danilo",
  });
  banco.adicionarConta({
    numero: "222222222",
    nome: "Carlos",
  });

  console.log("ESTADO INICIAL - Contas do banco", banco.getContas());

  banco.depositar("111111111", 100);

  console.log("PÓS DEPÓSITO - Contas do banco", banco.getContas());

  banco.sacar("111111111", 50);

  console.log("PÓS SAQUE - Contas do banco", banco.getContas());

  //------EXERCÍCIO 4------------EXERCÍCIO 4------------EXERCÍCIO 4------------EXERCÍCIO 4------
  console.log("\n\nEXERCÍCIO 4");

  horario = new Horario("01", "30", "10");

  horario.exibir();
  horario.calcularSegundos();

  //------EXERCÍCIO 5------------EXERCÍCIO 5------------EXERCÍCIO 5------------EXERCÍCIO 5------
  console.log("\n\nEXERCÍCIO 5");

  conta = new ContaCorrenteEspecial("Danilo Silva", 1000.0, 500.0); //Pode sacar até 1500.00

  conta.exibeAtributos();
  conta.saqueEspecial(1300);
  console.log("Meu saldo pós saque especial:", conta.getSaldo());

  //------EXERCÍCIO 6------------EXERCÍCIO 6------------EXERCÍCIO 6------------EXERCÍCIO 6------
  console.log("\n\nEXERCÍCIO 6");

  eletrodomestico = new Eletrodomestico("Telefone Sem Fio", 3.0, 24.0);
  eletrodomestico.relatorio(0.27);

  //------EXERCÍCIO 7------------EXERCÍCIO 7------------EXERCÍCIO 7------------EXERCÍCIO 7------
  console.log("\n\nEXERCÍCIO 7");

  lista = new ListaGenerica();
  lista.inicializarLista(["Maça", "Banana", "Uva"]);

  console.log("Lista:", lista.getLista());

  console.log("A lista esta vazia?", lista.listaVazia());
  console.log("A lista esta cheia?", lista.listaCheia());

  lista.adicionarElemento("Laranja");
  console.log("Lista:", lista.getLista());

  console.log(lista.recuperarElemento(0));

  lista.removerElemento("Banana");
  console.log("Lista:", lista.getLista());
}

Main(); //Executa a função Main
