"use strict";
/**
 * Leer un número entero menor que 20 y determinar si es primo.
 */
(() => {
    function countDivisors(num) {
        let divisors = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors++;
            }
        }
        return divisors;
    }
    function isPrime(num) {
        if (num <= 1)
            return false; // robustez adicional
        return countDivisors(num) === 2;
    }
    function validateNumber(num) {
        return Number.isInteger(num) && num >= 0 && num < 20;
    }
    function evaluateNumber(num) {
        if (validateNumber(num)) {
            const result = isPrime(number);
            console.log(`El número ${number} ${result ? "Es primo" : "No es primo"}`);
        }
        else {
            console.log("Ingrese un número válido: entero y menor a 20");
        }
    }
    const number = 20;
    evaluateNumber(number);
})();
