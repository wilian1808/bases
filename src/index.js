const NUMBER_BASES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const CONVERTIR = document.getElementById('convertir');
const TEXT_RESPONSE = document.getElementById('numeroFinal');
// se activa cuando querems convertir o hacemos click al boton de convertir
CONVERTIR.addEventListener('submit', (e) => {
    e.preventDefault();
    let no = document.getElementById('numeroOriginal').value;
    let bo = document.getElementById('baseOriginal').value;
    let bf = document.getElementById('baseFinal').value;
    if (parseInt(bo) == 10 && parseInt(bf) != 10) {
        TEXT_RESPONSE.value = convertirDecimalOtro(parseFloat(no), parseFloat(bf));
    }
    else if (parseInt(bo) != 10 && parseInt(bf) == 10) {
        TEXT_RESPONSE.value = convertirOtroDecimal(parseFloat(no), parseFloat(bo));
    }
    else {
        let resUno = convertirOtroDecimal(parseFloat(no), parseFloat(bo));
        let resDos = convertirDecimalOtro(parseFloat(resUno), parseFloat(bf));
        TEXT_RESPONSE.value = resDos;
    }
});
// funcion que convierte cualquier numero en base 10 a cualquier base
const convertirDecimalOtro = (numOriginal, baseFinal) => {
    let numero = numOriginal.toString().split('.');
    let parteEntera = numero[0];
    let parteDecimal = numero[1];
    let response = [];
    let numeroEntero = parseInt(parteEntera);
    // parte entera
    while (numeroEntero >= baseFinal) {
        response.unshift(NUMBER_BASES[numeroEntero % baseFinal]);
        numeroEntero = Math.floor(numeroEntero / baseFinal);
        if (numeroEntero < baseFinal) {
            response.unshift(NUMBER_BASES[numeroEntero]);
        }
    }
    // parte decimal
    let numeroDecimal = parseFloat(`0.${parteDecimal}`);
    let responseDecimal = [];
    for (let i = 0; i < parteDecimal.length * 2; i++) {
        let res = (numeroDecimal * baseFinal).toString();
        let nuevoNumero = res.split('.');
        let dato = nuevoNumero[0];
        responseDecimal.push(NUMBER_BASES[dato]);
        numeroDecimal = parseFloat(`0.${nuevoNumero[1]}`);
    }
    let finalDecimal = parseFloat(`0.${responseDecimal.join('')}`);
    let finalEntero = parseInt(response.join(''));
    let numeroTransformado = finalEntero + finalDecimal;
    return numeroTransformado.toString();
};

// funcion que convierte cualquier base a base 10
const convertirOtroDecimal = (numeroOriginal, baseOriginal) => {
    let numero = numeroOriginal.toString().split('.');
    let parteEntera = numero[0];
    let parteDecimal = numero[1];
    let response = 0;
    let arrayEntero = parteEntera.split('').reverse();
    let arrayDecimal = parteDecimal.split('');
    // parte entera
    for (let i = 0; i < arrayEntero.length; i++) {
        let res = parseInt(arrayEntero[i]) * Math.pow(baseOriginal, i);
        response += res;
    }
    // parte decimal
    for (let i = 0; i < arrayDecimal.length; i++) {
        let base = -1 * (i + 1);
        let res = parseInt(arrayDecimal[i]) * Math.pow(baseOriginal, base);
        response += res;
    }
    return response.toString();
};
//# sourceMappingURL=index.js.map
