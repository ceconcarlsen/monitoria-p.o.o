/* 
3) Construa um programa com entrada e saída de dados para representar três tipos de produtos,
os quais são vendidos em três níveis: Estadual, Nacional e Importado. Cada nível possui um
tipo diferente de tributação e taxas, as quais deverão ser levadas em conta para calcular o valor
final do produto que será exibido no relatório.
Os atributos de cada nível de produto são:
Estadual: descricao, valor, imposto;
Nacional: descricao, valor, imposto, taxa;
Importado: descricao, valor, imposto, taxa, taxaImportacao;
O imposto do produto estadual é de 10%. O imposto do produto nacional é de 10% e taxa de
5%. O imposto do produto importado é de 10%, taxa de 5% e taxa de importação de 5%.
Faça um método relatório para cada classe, o qual informa o conteúdo dos atributos e o valor
do produto.
*/

class Produto {
  //Atributos
  _descricao;
  _valor;
  _imposto;

  //Construtor
  Produto(descricao, valor, imposto) {
    this._descricao = descricao;
    this._valor = valor;
    this._imposto = imposto;
  }

  //Métodos

  //Getters e Setters
  get descricao() {
    return this._descricao;
  }
  set descricao(value) {
    this._descricao = value;
  }
  get valor() {
    return this._valor;
  }
  set valor(value) {
    this._valor = value;
  }
  get imposto() {
    return this._imposto;
  }
  set imposto(value) {
    this._imposto = value;
  }
}

module.exports = Produto;
