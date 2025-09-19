"use strict";
/**
 * 15. Leer un número entero de tres dígitos y determinar a cuánto es igual la suma de sus dígitos.
 */
(() => {
    // Validation
    function ValidateNumber(num) {
        if (!Number.isInteger(num))
            return false;
        return (num > 99 && num < 1000);
    }
    // Logic
    function SumOfDigits(num) {
        if (!ValidateNumber(num)) {
            return null;
        }
        const numHundred = Math.trunc(num / 100);
        const numTen = Math.trunc((num % 100) / 10);
        const numUnit = num % 10;
        return (numHundred + numTen + numUnit);
    }
    // Display
    function main() {
        const result = SumOfDigits(321);
        if (result === null) {
            console.log(`Ingrese sólo números enteros potitivos de 3 cifras`);
        }
        else {
            console.log(`Suma de los tres dígitos ${result}`);
        }
    }
    main();
})();
