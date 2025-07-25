"use strict";
/**
 * Leer un número entero de 2 dígitos y decir si ambos dígitos son pares. *
 */
(() => {
    function esEnteroDosDigitos(num) {
        if (Number.isInteger(num) && (num >= 10 && num <= 99)) {
            return true;
        }
        else {
            return false;
        }
    }
    function esDigitosPares(num) {
        let a = Math.trunc(num / 10);
        let b = num % 10;
        if ((Math.pow(-1, a) == 1) && (Math.pow(-1, b) == 1)) {
            return true;
        }
        else {
            return false;
        }
    }
    let numero = -40;
    if (numero < 0) {
        numero = -numero;
    }
    if (esEnteroDosDigitos(numero) && esDigitosPares(numero)) {
        console.log("El número ingresado tiene 2 digitos pares");
    }
    else {
        console.log("El número ingresado no tiene 2 dígitos o estos no son pares");
    }
})();
