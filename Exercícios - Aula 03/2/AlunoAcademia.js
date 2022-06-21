class AlunoAcademia {
  nome;
  idade;
  peso;
  altura;

  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  getNome() {
    return this.nome;
  }
  getIdade() {
    return this.idade;
  }
  getPeso() {
    return this.peso;
  }
  getAltura() {
    return this.altura;
  }

  setNome(nome) {
    this.nome = nome;
  }
  setIdade(idade) {
    this.idade = idade;
  }
  setPeso(peso) {
    this.peso = peso;
  }
  setAltura(altura) {
    this.altura = altura;
  }
}

module.exports = AlunoAcademia;
