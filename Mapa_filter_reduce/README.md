# Métodos Map, Filter & Reduce
## Método Map
> Implementação do metodo Map
1. Cria um novo Array;
2. Não modifica o array original;
3. Realiza as operações em ordem.

### Sintaxe

`array.map(callback,thisArg)`
1. CallBack - Função a ser executada em cada elemento;
2. thisArg - Optional: Valor do this dentro da função.

## Links Úteis

[Repositório no GitHub (implementação de referência)](https://)

### Map & forEach
Caso 1: `const array = [1,2,3,4,5,6];
array.map((item)=>item * 2);`

caso 2: `const array = [1,2,3,4,5,6];
array.forEach((item)=>item * 2);`

1. Valor de retorno;

Retorno 1: `[2,4,6,8,10,12]`
Retorno 2: `undefined`

2. Levar em conta se o array auxiliar será necessário.


## Método Filter
> Implementação do método Filter
1. Cria um novo Array;
2. Não modifica o array original;

### Sintaxe

`array.filter(callback,thisArg)`
1. CallBack - Função a ser executada em cada elemento;
2. thisArg - Optional: Valor do this dentro da função.

### Exemplo

`const frutas = ['maça fugi','maça verde', 'laranja', 'abacaxi'];
frutas.filter((fruta)=> fruta.includes('maça'));`

1. Valor de retorno;

`retorno: ['maça fugi', 'maça verde'];`

#### Forçando o Git
git push --force origin master
