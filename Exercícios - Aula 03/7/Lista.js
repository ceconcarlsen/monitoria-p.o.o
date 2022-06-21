/* 
7) A Lista é uma estrutura de dados que pode ser representada computacionalmente de
diferentes maneiras, por exemplo, um vetor, uma lista encadeada dinâmica, uma árvore, um
hash, entre outras maneiras. A Lista, genericamente, pode ser vista como um tipo abstrato de
dados em que as operações são conhecidas e comuns a qualquer tipo de implementação ou
representação computacional. Faça a modelagem Orientada a Objetos do tipo abstrato de
dados de uma Lista, a qual possui elementos armazenados e as seguintes operações: inicializar
lista, verificar se lista está vazia, verificar se a lista está cheia, adicionar um elemento,
recuperar um elemento, remover um elemento.

Como apresentado na aula de Sintaxe do Java, a entrada de dados no modo texto tem
problemas quando é intercalada a leitura entre valores numéricos e strings. Para resolver esse
problema, podemos fazer a leitura de uma linha após a leitura de um dado numérico, para que
o fim de linha seja lido; ou, como outra alternativa, fazer a leitura dos dados de entrada como
string (nextLine) e depois converte-lo para o tipo de dado necessário. Veja os exemplo a
seguir, que ilustra a primeira opção.
class Principal{
public static void main(String[] args) {

Scanner scan = new Scanner (System.in);
System.out.print ("Nome da primeira pessoa: ");
String nome1 = scan.nextLine();
System.out.print ("Peso em kg: ");
int peso1 = scan.nextInt(); scan.nextLine();
System.out.print ("Nome da segunda pessoa: ");
String nome2 = scan.nextLine();
System.out.print ("Peso em kg: ");
int peso2 = scan.nextInt(); scan.nextLine();

}
}
*/

class ListaGenerica {
  //Atributo
  #lista = [];

  //Construtor
  constructor(lista) {
    this.#lista = lista;
  }

  //Métodos
  inicializarLista(lista) {
    this.#lista = lista;
  }

  listaVazia() {
    if (this.#lista.length) return false; //Se o tamanho da lista existir ela não está vazia
    return true;
  }

  listaCheia() {
    return !this.listaVazia(); //Negar a lista vazia é descobrir se está cheia
  }

  adicionarElemento(elemento) {
    if (elemento) {
      this.#lista.push(elemento); //Push na lista
    }
  }

  recuperarElemento(index) {
    return this.#lista[index]; //Recupear elemento da lista segundo o índice passado
  }

  removerElemento(elemento) {
    //Função filter retorna todas os elementos respeitando a condição (elementoLista !== elemento), ou seja, retorna todos os elementos menos o elemento passado pelo usuário
    this.#lista = this.#lista.filter(
      (elementoLista) => elementoLista !== elemento
    );
  }

  //Getters
  getLista() {
    return this.#lista;
  }
  //Setters
  setLista(lista) {
    this.#lista = lista;
  }
}

module.exports = ListaGenerica;
