/*
1) Implemente uma classe que represente o aluno de uma academia.
Os atributos são: identificador, nome, idade, peso e altura.
Os métodos são:
· Um construtor sem parâmetros e um construtor com parâmetros
· Um método get e um método set para cada atributo
· Um método para exibir os atributos. void exibir( )
· Um método para calcular o IMC do aluno, sabendo-se que IMC=peso/altura^2
float calcularIMC( )
*/

class AlunoAcademia {
  //Atributos
  _identificador;
  _nome;
  _idade;
  _peso;
  _altura;

  //Construtores (construtor sem parâmetros já existe por padrão)
  constructor(identificador, nome, idade, peso, altura) {
    this._identificador = identificador;
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._altura = altura;
  }

  //Métodos
  exibir() {
    console.log("Identificador: ", this._identificador);
    console.log("Nome: ", this._nome);
    console.log("Idade: ", this._idade);
    console.log("Peso: ", this._peso);
    console.log("Altura: ", this._altura);
  }

  calcularIMC() {
    return this._peso / Math.pow(this._altura, 2);
  }

  relatorioPessoal() {
    console.log(`\n[${this._nome}]`);
    this.exibir();
    console.log("IMC: ", this.calcularIMC());
  }

  //Getters e Setters
  get identificador() {
    return this._identificador;
  }
  set identificador(value) {
    this._identificador = value;
  }
  get nome() {
    return this._nome;
  }
  set nome(value) {
    this._nome = value;
  }
  get idade() {
    return this._idade;
  }
  set idade(value) {
    this._idade = value;
  }
  get peso() {
    return this._peso;
  }
  set peso(value) {
    this._peso = value;
  }
  get altura() {
    return this._altura;
  }
  set altura(value) {
    this._altura = value;
  }
}

module.exports = AlunoAcademia;
