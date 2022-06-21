/* 
3) Um banco mantém contas de clientes armazenando o número da conta, o nome do cliente e
o saldo atual da conta. Os clientes podem depositar o quanto quiserem nas contas, mas podem
sacar somente enquanto a conta possuir saldo positivo.
*/

const Conta = require("./Conta");

class Banco {
  //Atributos
  #contas = [];

  //Métodos
  adicionarConta(conta) {
    this.#contas.push(new Conta(conta.numero, conta.nome));
  }

  depositar(numeroConta, valor) {
    if (valor > 0) {
      /*
     O vetor de contas é ITERADO, se o número da conta é igual ao numero passado, somamos
     o valor com o saldo atual.
     */
      for (let i = 0; i < this.#contas.length; i++) {
        if (this.#contas[i].numero === numeroConta) {
          this.#contas[i].saldoAtual += valor;
        }
      }
    } else {
      return console.log("Valor de deposito precisa ser maior que zero");
    }
  }

  sacar(numeroConta, valor) {
    let saque;
    if (valor > 0) {
      /*
     O vetor de contas é ITERADO, se o número da conta é igual ao numero passado e o saldo atual é maior que o valor de saque, removemos o saldo atual
      */
      for (let i = 0; i < this.#contas.length; i++) {
        if (this.#contas[i].numero === numeroConta) {
          if (this.#contas[i].saldoAtual >= valor) {
            this.#contas[i].saldoAtual -= valor;
            saque = this.#contas[i].saldoAtual;
          }
        }
      }
    } else {
      return console.log("Valor de saque precisa ser maior que zero");
    }
  }

  //Getters
  getContas() {
    return this.#contas;
  }

  //Setters
  setContas(contas) {
    this.#contas = contas;
  }
}

module.exports = Banco;
