"use strict";
/**
 * Leer un número entero de dos dígitos y determinar si los dos dígitos son iguales.
 */
(() => {
    function validateNumber(num) {
        num = (num < 0) ? Math.abs(num) : num;
        return (Number.isInteger(num) && num >= 10 && num <= 99);
    }
    function compareDigits(num) {
        num = (num < 0) ? Math.abs(num) : num;
        const digitA = Math.trunc(num / 10);
        const digitB = num % 10;
        return (digitA === digitB);
    }
    function evaluateNumber(num) {
        if (!validateNumber(num)) {
            console.log(`Ingrese un número entero de dos dígitos.`);
        }
        else {
            const result = `${compareDigits(num) ? "dígitos iguales" : "dígitos diferentes"}`;
            console.log(`El número ${num} tiene ${result}`);
        }
    }
    evaluateNumber(-99);
})();
