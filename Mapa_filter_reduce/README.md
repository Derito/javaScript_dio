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

[Repositório no GitHub (implementação de referência)](https://github.com/stebsnusch/basecamp-javascript/tree/main/map-filter-reduce/map)

### Map & forEach
Caso 1: `const array = [1,2,3,4,5,6];
array.map((item)=>item * 2);`

caso 2: `const array = [1,2,3,4,5,6];
array.forEach((item)=>item * 2);`

1. Valor de retorno;

Retorno 1: `[2,4,6,8,10,12]`
Retorno 2: `undefined`

2. Levar em conta se o array auxiliar será necessário.
> #### Exercício - Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

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

> Note: o valor do item pode receber qualquer nome, neste caso recebe o no me fruta.
1. Valor de retorno;

`retorno: ['maça fugi', 'maça verde'];`

> Note: Apenas os elementos passados pelo filtro formam um novo array.

[Repositório no GitHub (implementação de referência)](https://github.com/stebsnusch/basecamp-javascript/tree/main/map-filter-reduce/filter)

> #### Exercício - Filtre e retorne todos os números pares de um array.

## Método Reduce
> Implementação do método Reduce
1. Executa uma função em todos os elementos do array retornando um valor unico;

### Sintaxe

`array.reduce(callbackFn,initialValue)`
1. CallBack - Função a ser executada apartir do acumulador;
2. initialValue -  Valor sobre o qual o valor final irá actuar.

### Exemplo

`const callbackFn = function (accumulador,currentValue,index,array{};
array.reduce(callbackFn, initialValue);`

1. Accumulador/preValue : Acumulador de todas as chamadas de callbackFn.
2. InitialValue : Elemento actual sendo acssessada pela função.

[Repositório no GitHub (implementação de referência)](https://github.com/stebsnusch/basecamp-javascript/tree/main/map-filter-reduce/reduce)

> #### Exercício - 1. Some todos os números de um array 2. Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

## Dicas Uteis
#### Forçando o Git
git push --force origin master

#### Forçando o uso do nodejs no vs code
1. Instale o node;
2. instale o vs code;
3. confirme o node no Path
setx Path "%PATH%;C:\Program Files\nodejs"
4. Baixe a extensão .run do code runner no vscode;
5. rode o seu codigo javascript por meio do comando
ctrl + alt + n.
