function filtraNumerosPares(array) {
    if (!array || !array.length) return;

    const arrayFiltrado = array.filter((item) => item % 2 === 0);

    return arrayFiltrado;
}

console.log(filtraNumerosPares([1, 2, 3, 4]));