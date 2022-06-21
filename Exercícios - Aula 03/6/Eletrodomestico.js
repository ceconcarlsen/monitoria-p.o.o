/*
6) Implemente uma classe para representar um eletrodoméstico.
Os atributos são: nome, potência (em W) e o tempo de utilização diária.
Os métodos são:
· Um construtor sem parâmetros e um construtor com parâmetros
· Um método get e um método set para cada atributo
- Um método para retornar a quantidade de Watts gastos por dia pelo
eletrodoméstico: float wattsDia()
- Cálculo: Potencia * tempo de utilização diária
· Um método para retornar a quantidade de Watts gastos por mês pelo
eletrodoméstico: float wattsMes()
- Cálculo: wattsDia() * 30
· Um método para retornar a quantidade de Watts gastos por ano pelo
eletrodoméstico: float wattsAno()
- Cálculo: wattsMes() * 12
· Um método para calcular o custo mensal em reais com o eletrodoméstico. Para isso deve-se
passar como parâmetro para o método o custo do Kwatts. float gastoMes(float precoKwatts)
- Cálculo: divida o wattsMes por 1000 e multiplique pelo preço dos Kwatts
· Um método para exibir um relatório, passando como parâmetro o custo do Kwatts.
Exemplo de relatório:
Eletrodoméstico: Telefone Sem Fio
Potência do aparelho: P=3.0 watts;
Tempo de utilização do aparelho: 24.0 horas/dia
Watts/Dia = 72.0 W
Watts/Mês = 2160.0 W
Watts/Ano = 25920.0 W
Preço do Kwatt R$ 0.27
Gasto mensal é: R$ 0.58320004
*/

class Eletrodomestico {
  //Atributos
  #nome;
  #potencia;
  #tempo; //em horas

  //Construtor
  constructor(nome, potencia, tempo) {
    this.#nome = nome;
    this.#potencia = potencia;
    this.#tempo = tempo;
  }

  //Métodos
  wattsDia() {
    return this.#potencia * this.#tempo;
  }

  wattsMes() {
    return this.wattsDia() * 30;
  }

  wattsAno() {
    return this.wattsMes() * 12;
  }

  gastoMes(precoKwatts) {
    return (this.wattsMes() / 1000) * precoKwatts;
  }

  relatorio(precoKwatts) {
    console.log("Relatório\n");
    console.log("Eletrodoméstico:", this.#nome);
    console.log("Potência do aparelho:", this.#potencia);
    console.log("Watts/Dia:", this.wattsDia());
    console.log("Watts/Mes:", this.wattsMes());
    console.log("Watts/Ano:", this.wattsAno());
    console.log("Preço do Kwatt: R$", precoKwatts);
    console.log("Gasto mensal é: R$", this.gastoMes(precoKwatts));
  }

  //Getters
  getNome() {
    return this.#nome;
  }

  getPotencia() {
    return this.potencia;
  }

  getTempo() {
    return this.#tempo;
  }

  //Setters
  setNome(nome) {
    this.#nome = nome;
  }

  setPotencia(potencia) {
    this.#potencia = potencia;
  }

  setTempo(tempo) {
    this.tempo = tempo;
  }
}

module.exports = Eletrodomestico;
