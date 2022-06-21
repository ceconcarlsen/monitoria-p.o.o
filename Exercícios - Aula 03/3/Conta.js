class Conta {
  numero;
  nome;
  saldoAtual;

  constructor(numero, nome) {
    this.numero = numero;
    this.nome = nome;
    this.saldoAtual = 0;
  }
}

module.exports = Conta;
