/*
2) Uma academia mantem registro de seus alunos armazenando nome, idade, peso e altura. A
academia faz um desconto especial para menores de idade, portanto, é necessário saber
distinguir entre um aluno maior e menor. Além disso, a academia também tem interesse em
acompanhar o desempenho de seus alunos, por isso, ela também necessita conhecer o índice
de massa corporal (IMC) deles, sendo que o IMC = peso / altura ^ 2.
*/

const AlunoAcademia = require("./AlunoAcademia");

class Academia {
  //Atributos
  #alunos = [];

  //Métodos
  cadastrarAluno(aluno) {
    this.#alunos.push(
      new AlunoAcademia(aluno.nome, aluno.idade, aluno.peso, aluno.altura)
    );
  }

  calcularIMC() {
    this.#alunos.map((aluno) =>
      console.log(
        `O aluno ${aluno.nome} TEM ${
          aluno.peso / (aluno.altura ^ 2)
        } de massa corporal`
      )
    );
  }

  //Método privado
  #maiorDeIdade(idade) {
    if (idade >= 0) {
      if (idade >= 18) {
        return true;
      }
      return false;
    }
  }

  descontoEspecial() {
    this.#alunos.map((aluno) =>
      this.#maiorDeIdade(aluno.idade)
        ? console.log(`O aluno ${aluno.nome} TEM desconto especial`)
        : console.log(`O aluno ${aluno.nome} NÃO TEM desconto especial`)
    );
  }

  numeroDeAlunos() {
    return this.#alunos.length;
  }

  //Getters
  getAlunos() {
    return this.#alunos;
  }

  //Setters
  setAlunos(alunos) {
    this.#alunos = alunos;
  }
}

module.exports = Academia;
