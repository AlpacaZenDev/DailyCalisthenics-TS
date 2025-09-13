"use strict";
(() => {
    /**
     * Leer dos números enteros de dos dígitos y determinar si la suma de los
     * dos números origina un número par.
     */
    function validateNumbers(numA, numB) {
        if (!Number.isInteger(numA) || !Number.isInteger(numB))
            return false;
        return ((numA >= 10 && numA <= 99) && (numB >= 10 && numB <= 99));
    }
    function evaluateNumbers(numA, numB) {
        if (!validateNumbers(numA, numB)) {
            console.log(`Ingrese sólo números enteros de 2 digitos`);
        }
        else if ((numA + numB) % 2 === 0) {
            console.log(`La suma de ${numA} + ${numB} da un número par`);
        }
        else {
            console.log(`La suma de ${numA} + ${numB} NO da número par`);
        }
    }
    evaluateNumbers(91, 14);
})();
