/*
1) Os alunos da disciplina de Programação Orientada a Objetos da FCT/Unesp desenvolverão
dois trabalhos e duas provas ao longo do semestre. Considere que, nesse caso, a média final é
calculada pela média aritmética simples de todas as notas e que o aluno é aprovado somente
se obtiver média maior ou igual a cinco.
O Aluno possui como informação o RA, Nome e as notas – a média é calculada a partir das
notas e não precisa ser armazenada.
*/

/*
Conceitos Importantes:
- ATRIBUTOS: Caracteristicas da sua classe;
- MÉTODOS: Funções da sua classe;
- GETTERS E SETTERS: Formas de escapsular(proteger) os ATRIBUTOS;
- CONSTRUTOR: Forma de definir a instanciação da sua classe;

- Por padrão, os atributos em uma classe do JavaScript são públicos. Normalmente o char _ ou # define atributo privado (private em JAVA);
- Função MAP itera sobre as notas. Leia-se como: "Para cada nota (elemento do vetor de notas), adicione a média tudo o que ela tem + nota daquela iteração;

EX: MAP

notas = [10.0, 9.0, 7.5, 5.0]
let media = 0;

ITERAÇÃO 0
media = 10.0 + media (0)

ITERAÇÃO 1
media = 9.0 + media (10.0)

ITERAÇÃO 2
media = 7.5 + media (17.5)

ITERAÇÃO 3
media = 5.0 + media (22.5)
*/

class Aluno {
  //Atributos
  #ra;
  #nome;
  #notas = [];

  //Construtor
  constructor(ra, nome, notas) {
    this.#ra = ra;
    this.#nome = nome;
    this.#notas = notas;
  }

  //Métodos
  mediaAritmerica() {
    let media = 0;

    this.#notas.map((nota) => (media += nota));

    if (media / this.#notas.length >= 5.0) {
      return console.log(`O aluno(a) ${this.#nome} foi APROVADO`);
    } else {
      return console.log(`O aluno(a) ${this.#nome} foi REPROVADO`);
    }
  }

  //Getters
  getRa() {
    return this.#ra;
  }

  getNome() {
    return this.#nome;
  }

  getNotas() {
    return this.#notas;
  }

  //Setters
  setRa(ra) {
    this.#ra = ra;
  }

  setNome(nome) {
    this.#nome = nome;
  }

  setNotas(notas) {
    this.#notas = notas;
  }
}

module.exports = Aluno;
