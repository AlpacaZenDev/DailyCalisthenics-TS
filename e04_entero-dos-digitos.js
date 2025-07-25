"use strict";
/**
 * Leer un número entero de 2 dígitos y calcular la suma de ellos.
 */
(() => {
    function esDosDigitos(num) {
        if (Number.isInteger(num) && num >= 10 && num <= 99) {
            return true;
        }
        else {
            return false;
        }
    }
    function sumaDigitos(num) {
        let x = Math.trunc(num / 10);
        let y = num % 10;
        return x + y;
    }
    let numero = 80;
    // TODO: Queda convertir números negativos a positivos
    let resultado = esDosDigitos(numero);
    if (resultado) {
        console.log(`El número es de dos dígitos`);
        let suma = sumaDigitos(numero);
        console.log(`La suma de sus dígitos es ${suma}`);
    }
    else {
        console.log(`El número NO es de dos dígitos`);
    }
    ;
})();
