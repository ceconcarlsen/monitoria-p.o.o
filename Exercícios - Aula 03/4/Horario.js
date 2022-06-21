/* 
4) ) Implemente uma classe que represente um horário.
Os atributos são: hora, minuto e segundo.
Os métodos são:
· Um construtor sem parâmetros e um construtor com parâmetros
· Um método get e um método set para cada atributo
· Um método para exibir os valores dos atributos no seguinte formato
hora:minuto:segundos – Exemplo: 19:45:43
- Método: void exibir()
· Um método para retornar o valor da hora em segundos. Por exemplo: 1:30:10 tem 1h*3600s
+ 30min*60s + 10s que resulta em 5410 segundos
- Método: int calcularSegundos( )
*/

class Horario {
  //Atributos
  #hora = 0;
  #minuto = 0;
  #segundo = 0;

  //Construtor com parâmetros
  constructor(hora, minuto, segundo) {
    this.#hora = hora;
    this.#minuto = minuto;
    this.#segundo = segundo;
  }

  //Método para exibir os valores em hora:minuto:segundos
  exibir() {
    console.log("Horário: ", this.#hora, ":", this.#minuto, ":", this.#segundo);
  }

  calcularSegundos() {
    //Se somarmos String em JavaScript estaremos concatenando: "10" + "30" === "1030" e não 40, por isso realizamos o Cast para Number

    let horaSegundos = Number(this.#hora * 3600); //Cast de String para Number
    let minutosSegundos = Number(this.#minuto * 60); //Cast de String para Number
    let segundos = Number(this.#segundo); //Cast de String para Number

    let total = horaSegundos + minutosSegundos + segundos;

    console.log("Horário total em segundos: ", total);
  }

  //Getters
  getHora() {
    return this.#hora;
  }

  getMinuto() {
    return this.#minuto;
  }

  getSegundo() {
    return this.#segundo;
  }

  //Setters
  setHora(hora) {
    this.#hora = hora;
  }

  setMinuto(minuto) {
    this.#minuto = minuto;
  }

  setSegundo(segundo) {
    this.#segundo = segundo;
  }
}

module.exports = Horario;
