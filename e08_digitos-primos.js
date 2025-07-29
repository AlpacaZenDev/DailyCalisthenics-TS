"use strict";
/**
 * Leer un número entero de 2 dígitos y decir si los dígitos son primos.
 */
(() => {
    function countDivisors(num) {
        let counter = 0;
        for (let divisor = 1; divisor <= num; divisor++) {
            if (num % divisor === 0) {
                counter++;
            }
        }
        return counter;
    }
    function validatePrimeNumber(num) {
        return (countDivisors(num) === 2);
    }
    function validateTwoDigits(num) {
        return Number.isInteger(num) && num >= 10 && num <= 99;
    }
    function evaluateDigits(num) {
        if (validateTwoDigits(num)) {
            const x = Math.trunc(num / 10);
            const y = num % 10;
            const isPrimeX = validatePrimeNumber(x);
            const isPrimeY = validatePrimeNumber(y);
            if (x === y) {
                console.log(`Ambos dígitos ${isPrimeX ? "son primos" : "NO son primos"}`);
            }
            else {
                console.log(`El dígito ${x} ${isPrimeX ? "es primo" : "NO es primo"} | El dígito ${y} ${isPrimeY ? "es primo" : "NO es primo"}`);
            }
        }
        else {
            console.log(`El número ${num} no cumple con las características: Sólo enteros positivos de dos dígitos`);
        }
    }
    evaluateDigits(19);
})();
