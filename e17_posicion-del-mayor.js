"use strict";
/**
 * 17. Leer un número entero de tres dígitos y determinar en qué posición está
* el mayor dígito.
 */
(() => {
    // *Validation
    function ValidateNumber(num) {
        num = Math.abs(num);
        if (!Number.isInteger(num))
            return false;
        return (num >= 100 && num <= 999);
    }
    // ValidateNumber(999);
    // *Logic
    // todo: Sólo para números con digitos no iguales. Queda implementación para dítos iguales.
    function PositionOfMajorDigit(num) {
        num = Math.abs(num);
        const numHundred = Math.trunc(num / 100);
        const numTen = Math.trunc((num % 100) / 10);
        const numUnit = num % 10;
        let position = '';
        if (numUnit > numTen && numUnit > numHundred) {
            position = `Unidad`;
        }
        if (numTen > numUnit && numTen > numHundred) {
            position = `Decena`;
        }
        if (numHundred > numUnit && numHundred > numTen) {
            position = `Centena`;
        }
        return position;
    }
    // PositionOfMajorDigit(-345);
    // *View
    function main() {
        const num = -222;
        if (!ValidateNumber(num)) {
            console.log(`Ingrese sólo números enteros de 3 cifras!`);
        }
        else {
            const result = PositionOfMajorDigit(num);
            console.log(`El dígito mayor se encuentra en la ${result}`);
        }
    }
    main();
    // todo: debugging o test de integración
    // todo: ampliar la lógica para números con 2 dígitos mayores iguales
    // todo: evaluar para un número con los 3 dígitos iguales
    // todo: realizar pruebas automatizadas por IA.
})();
