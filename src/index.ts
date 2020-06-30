const NUMBER_BASES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const CONVERTIR = document.getElementById('convertir');
const TEXT_RESPONSE = (<HTMLInputElement>document.getElementById('numeroFinal'));

// se activa cuando querems convertir o hacemos click al boton de convertir
CONVERTIR.addEventListener('submit', (e) => {
    e.preventDefault();

    let no = (<HTMLInputElement>document.getElementById('numeroOriginal')).value;
    let bo = (<HTMLInputElement>document.getElementById('baseOriginal')).value;
    let bf = (<HTMLInputElement>document.getElementById('baseFinal')).value;
    
    if (parseInt(bo) == 10 && parseInt(bf) != 10) {
        TEXT_RESPONSE.value = convertirDecimalOtro(parseFloat(no), parseFloat(bf));
    } else if (parseInt(bo) != 10 && parseInt(bf) == 10) {
        TEXT_RESPONSE.value = convertirOtroDecimal(parseFloat(no), parseFloat(bo));
    }

    convertirOtroDecimal(parseInt(no), parseInt(bo));
})

// funcion que convierte cualquier numero en base 10 a cualquier base
const convertirDecimalOtro = (numOriginal: number, baseFinal: number): string => {
    let response = [];

    while (numOriginal >= baseFinal) {
        response.unshift(NUMBER_BASES[numOriginal % baseFinal]);
        numOriginal = Math.floor(numOriginal / baseFinal);
        if (numOriginal < baseFinal) {
            response.unshift(NUMBER_BASES[numOriginal])
        }
    }

    return response.join('');
}

// funcion que convierte cualquier base a base 10
const convertirOtroDecimal = (numeroOriginal: number, baseOriginal: number): string => {
    let response = 0;
    let numString = numeroOriginal.toString();
    let numeroArray = numString.split('').reverse();

    for (let i = 0; i < numeroArray.length; i++) {
        let res = parseInt(numeroArray[i]) * Math.pow(baseOriginal, i);
        response += res;
    }

    return response.toString()
}
