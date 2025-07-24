"use strict";
/**
 * Leer un número entero y determinar si es negativo.
 */
(() => {
    function esNegativo(num) {
        if (num < 0 && Number.isInteger(num)) {
            return true;
        }
        else {
            return false;
        }
    }
    let numero = 20;
    let resultado = esNegativo(numero);
    console.log(`El número es negativo? ${resultado}`);
})();
