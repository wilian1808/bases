const NUMBER_BASES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const CONVERTIR = document.getElementById('convertir');
const TEXT_RESPONSE = document.getElementById('numeroFinal');
const INPUT_NUMBER = document.getElementById('numeroOriginal');
const ALERT_MESSAGE = document.getElementById('alertMessage');
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
        TEXT_RESPONSE.value = convertirOtroDecimal(no, parseFloat(bo));
    }
    else {
        let resUno = convertirOtroDecimal(no, parseFloat(bo));
        let resDos = convertirDecimalOtro(parseFloat(resUno), parseFloat(bf));
        TEXT_RESPONSE.value = resDos;
    }
});
// funcion que convierte cualquier numero en base 10 a cualquier base
const convertirDecimalOtro = (numOriginal, baseFinal) => {
    let numero = numOriginal.toString().split('.');
    let parteEntera = numero[0];
    let parteDecimal = numero[1];
    let finalDecimal = '';
    let response = [];
    let numeroEntero = parseInt(parteEntera);
    // parte entera
    while (numeroEntero >= baseFinal) {
        response.unshift(NUMBER_BASES[numeroEntero % baseFinal]);
        numeroEntero = Math.floor(numeroEntero / baseFinal);
    }
    if (numeroEntero < baseFinal) {
        response.unshift(NUMBER_BASES[numeroEntero]);
    }
    // parte decimal
    let numeroDecimal = parseFloat(`0.${parteDecimal}`);
    let responseDecimal = [];
    if (parteDecimal != undefined) {
        for (let i = 0; i < parteDecimal.length * 2; i++) {
            let res = (numeroDecimal * baseFinal).toString();
            let nuevoNumero = res.split('.');
            let dato = nuevoNumero[0];
            responseDecimal.push(NUMBER_BASES[dato]);
            numeroDecimal = parseFloat(`0.${nuevoNumero[1]}`);
        }
        finalDecimal = `${responseDecimal.join('')}`;
    }
    let finalEntero = response.join('');
    let final = (finalDecimal.length != 0) ? `${finalEntero}.${finalDecimal}` : `${finalEntero}`;
    let responseEdit = DeleteZero(final);
    return responseEdit;
};
// funcion que convierte cualquier base a base 10
const convertirOtroDecimal = (numeroOriginal, baseOriginal) => {
    let numero = numeroOriginal.toString().split('.');
    let parteEntera = numero[0];
    let parteDecimal = numero[1];
    let arrayEntero = parteEntera.split('').reverse();
    let arrayDecimal = parteDecimal.split('');
    let response = 0;
    // parte entera
    for (let i = 0; i < arrayEntero.length; i++) {
        let res = 0;
        switch (arrayEntero[i]) {
            case 'a' || 'A':
                res = 10 * Math.pow(baseOriginal, i);
                break;
            case 'b' || 'B':
                res = 11 * Math.pow(baseOriginal, i);
                break;
            case 'c' || 'C':
                res = 12 * Math.pow(baseOriginal, i);
                break;
            case 'b' || 'D':
                res = 13 * Math.pow(baseOriginal, i);
                break;
            case 'e' || 'E':
                res = 14 * Math.pow(baseOriginal, i);
                break;
            case 'f' || 'F':
                res = 15 * Math.pow(baseOriginal, i);
                break;
            default:
                res = parseInt(arrayEntero[i]) * Math.pow(baseOriginal, i);
                break;
        }
        response += res;
    }
    // parte decimal
    for (let i = 0; i < arrayDecimal.length; i++) {
        let base = -1 * (i + 1);
        let res = 0;
        switch (arrayDecimal[i]) {
            case 'a' || 'A':
                res = 10 * Math.pow(baseOriginal, base);
                break;
            case 'b' || 'B':
                res = 11 * Math.pow(baseOriginal, base);
                break;
            case 'c' || 'C':
                res = 12 * Math.pow(baseOriginal, base);
                break;
            case 'b' || 'D':
                res = 13 * Math.pow(baseOriginal, base);
                break;
            case 'e' || 'E':
                res = 14 * Math.pow(baseOriginal, base);
                break;
            case 'f' || 'F':
                res = 15 * Math.pow(baseOriginal, base);
                break;
            default:
                res = parseInt(arrayDecimal[i]) * Math.pow(baseOriginal, base);
                break;
        }
        response += res;
    }
    return response.toString();
};
// funcion que recorta los zero del lado rerecho solo del decimal
const DeleteZero = (number) => {
    let newNumber = number.split('').reverse();
    let recortar = true;
    let indice = 0;
    while (recortar) {
        if (parseInt(newNumber[indice]) != 0) {
            break;
            recortar = false;
        }
        newNumber.shift();
    }
    return newNumber.reverse().join('');
};
INPUT_NUMBER.addEventListener('keyup', e => {
    let bo = document.getElementById('baseOriginal').value;
    let number = INPUT_NUMBER.value;
    let newNumber = number.split('.');
    let parteEntera = newNumber[0];
    let parteDecimal = newNumber[1];
    let baseEntera = parseInt(bo);
    // parte entera
    for (let i = 0; i < parteEntera.length; i++) {
        let messageError = 'El numero ingresado es incorrecto';
        let clase = 'form_message--view';
        switch (parteEntera[i]) {
            case 'a' || 'A':
                (10 >= baseEntera) ? ALERT_MESSAGE.classList.add(clase) : ALERT_MESSAGE.classList.remove(clase);
                break;
            case 'b' || 'B':
                (11 >= baseEntera) ? ALERT_MESSAGE.classList.add(clase) : ALERT_MESSAGE.classList.remove(clase);
                break;
            case 'c' || 'C':
                (12 >= baseEntera) ? ALERT_MESSAGE.classList.add(clase) : ALERT_MESSAGE.classList.remove(clase);
                break;
            case 'b' || 'D':
                (13 >= baseEntera) ? ALERT_MESSAGE.classList.add(clase) : ALERT_MESSAGE.classList.remove(clase);
                break;
            case 'e' || 'E':
                (14 >= baseEntera) ? ALERT_MESSAGE.classList.add(clase) : ALERT_MESSAGE.classList.remove(clase);
                break;
            case 'f' || 'F':
                (15 >= baseEntera) ? ALERT_MESSAGE.classList.add(clase) : ALERT_MESSAGE.classList.remove(clase);
                break;
            default:
                if (parseInt(parteEntera[i]) >= baseEntera) {
                    ALERT_MESSAGE.classList.add(clase);
                }
                else {
                    ALERT_MESSAGE.classList.remove(clase);
                }
                break;
        }
    }
    console.log(parteDecimal);
});
//# sourceMappingURL=index.js.map