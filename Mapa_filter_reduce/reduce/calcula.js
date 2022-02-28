function calculaSaldo(saldo, itens) {
    if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

    const saldoFinal = itens.reduce((acc, item) => acc - item.valor, saldo);

    return `O saldo final será de ${saldoFinal} kwanzas`;
}

lista = [
    {
        valor: 3.2,
        nome: 'laranja',
    },
    {
        valor: 1.9,
        nome: 'peixe',
    },
    {
        valor: 15.1,
        nome: 'carne',
    },
];

saldo = 120;

console.log(calculaSaldo(saldo, lista));