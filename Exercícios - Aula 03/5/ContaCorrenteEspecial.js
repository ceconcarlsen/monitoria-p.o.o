/*
5) Implemente uma classe que represente uma Conta Corrente Especial, em que os clientes
possuem um limite negativo para saque.
Os atributos são: Titular, saldo e limite da conta.
Os métodos são:
· Um construtor sem parâmetros e um construtor com parâmetros
· Um método get e um método set para cada atributo
· Um método para exibir os valores dos atributos
· Um método para realizar depósito de dinheiro: void depositar(float valor)
- Neste método deve-se somar o valor recebido por parâmetros ao saldo
· Um método para realizar saque: void saque(float valor)
- Este método é um pouco diferente do método da conta corrente simples. Nesse caso,
o saque pode ultrapassar o valor de saldo até um limite estabelecido. Por exemplo, se o
saldo da conta é de 300 reais e 200 reais de limite, é permitido realizar saque de até
500 reais, pois esse tipo de conta permite ficar com 200 reais de saldo negativo, de
acordo com o limite indicado. Portanto, deve-se verificar se a soma do saldo + o limite
é maior ou igual ao valor a ser retirado. Se for o suficiente realize a operação; do
contrário, emita uma mensagem de erro informando que o saldo é insuficiente.
*/

class ContaCorrenteEspecial {
  //Atributos
  #titular;
  #saldo;
  #limite;

  //Construtor
  constructor(titular, saldo, limite) {
    this.#titular = titular;
    this.#saldo = saldo;
    this.#limite = limite;
  }

  //Métodos
  exibeAtributos() {
    console.log(
      `Atributos\nTitular: ${this.#titular}\nSaldo: ${this.#saldo}\nLimite: ${
        this.#limite
      }`
    );
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      return console.log("Valor de deposito precisa ser maior que zero");
    }
  }

  saqueEspecial(valor) {
    if (valor > 0) {
      if (valor <= this.#saldo + this.#limite) {
        this.#saldo -= valor;
      } else {
        return console.log("Saldo indisponível");
      }
    } else {
      return console.log("Valor de saque precisa ser maior que zero");
    }
  }

  //Getters
  getTitular() {
    return this.#titular;
  }

  getSaldo() {
    return this.#saldo;
  }

  getLimite() {
    return this.#limite;
  }

  //Setters
  setTitular(titular) {
    this.#titular = titular;
  }

  setSaldo(saldo) {
    this.#saldo = saldo;
  }

  setLimite(limite) {
    this.#limite = limite;
  }
}

module.exports = ContaCorrenteEspecial;
