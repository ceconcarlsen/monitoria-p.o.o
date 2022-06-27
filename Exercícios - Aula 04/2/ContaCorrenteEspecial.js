/*
2) Implemente uma classe que represente uma Conta Corrente Especial, em que os clientes
possuem um limite negativo para saque.
Os atributos são: Numero, Titular, saldo e limite da conta.
Os métodos são:
· Um construtor sem parâmetros e um construtor com parâmetros
· Um método get e um método set para cada atributo
· Um método para exibir os valores dos atributos
· Um método para realizar depósito de dinheiro: void depositar(float valor)
Neste método deve-se somar o valor recebido por parâmetros ao saldo
· Um método para realizar saque: void saque(float valor)
Este método é um pouco diferente do método da conta corrente simples. Nesse caso, o saque
pode ultrapassar o valor de saldo até o limite. Por exemplo: se meu saldo é de 300 reais e tenho
200 reais de limite, posso realizar saque de até 500 reais. Portanto, deve-se verificar se a soma
do saldo + o limite é maior ou igual ao valor a ser retirado. Se for o suficiente realize a operação;
do contrário, emita uma mensagem de erro informando que o saldo é insuficiente. No depósito
e no saque é necessário buscar a conta pelo número antes de efetuar a operação.
*/

class ContaCorrenteEspecial {
  //Atributos
  _numero;
  _titular;
  _saldo;
  _limite;

  //Construtor
  constructor(numero, titular, saldo, limite) {
    this._numero = numero;
    this._titular = titular;
    this._saldo = saldo;
    this._limite = limite;
  }

  //Métodos
  exibeAtributos() {
    console.log(
      `Atributos\nTitular: ${this._titular}\nSaldo: ${this._saldo}\nLimite: ${this._limite}`
    );
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    } else {
      return console.log("Valor de deposito precisa ser maior que zero");
    }
  }

  saqueEspecial(valor) {
    if (valor > 0) {
      if (valor <= this._saldo + this._limite) {
        this._saldo -= valor;
      } else {
        return console.log("Saldo indisponível");
      }
    } else {
      return console.log("Valor de saque precisa ser maior que zero");
    }
  }

  //Getters e Setters
  get numero() {
    return this._numero;
  }
  set numero(value) {
    this._numero = value;
  }
  get titular() {
    return this._titular;
  }
  set titular(value) {
    this._titular = value;
  }
  get saldo() {
    return this._saldo;
  }
  set saldo(value) {
    this._saldo = value;
  }
  get limite() {
    return this._limite;
  }
  set limite(value) {
    this._limite = value;
  }
}

module.exports = ContaCorrenteEspecial;
