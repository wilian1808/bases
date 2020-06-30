console.log('%c Hola como estas', 'color:orange');

const formConvertir = document.getElementById('convertir');
const numeroFinal = document.getElementById('numeroFinal');

formConvertir.addEventListener('submit', e => {
    e.preventDefault();
    
    let bf = document.getElementById('baseFinal').value
    let bo = document.getElementById('baseOriginal').value
    let no = document.getElementById('numeroOriginal').value

    decimalOtro(parseInt(no), parseInt(bo), parseInt(bf));

})

// funcion que convierte un numero decimal en cualquier otro
// por ahora solo enteros
const decimalOtro = (numeroOriginal, baseOriginal, baseFinal) => {
    console.log(`${numeroOriginal} : ${baseOriginal} => ${baseFinal}`)
}
