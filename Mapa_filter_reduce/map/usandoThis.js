const pera = {
    valor: 3.2,
};

const tangerinas = {
    valor: 2.5,
};

function mapArray() {
    const array = [1, 2, 3, 4, 5];

    return array.map(function (item) {
        return item * this.valor;
    }, tangerinas);
}

console.log(mapArray());