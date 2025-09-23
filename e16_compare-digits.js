"use strict";
/**
 * 16. Leer un número entero de tres dígitos y determinar si al menos dos de
 * sus tres dígitos son iguales.
 */
(() => {
    //* Validation
    function ValidateNumber(num) {
        num = Math.abs(num);
        if (!Number.isInteger(num))
            return false;
        return (num >= 100 && num <= 999);
    }
    // console.log(ValidateNumber(999));
    //* Logic
    function CompareDigits(num) {
        if (!ValidateNumber(num))
            return null;
        num = Math.abs(num);
        const numHundred = Math.trunc(num / 100);
        const numTen = Math.trunc(num / 10) % 10;
        const numUnit = num % 10;
        // console.log(numHundred);
        // console.log(numTen);
        // console.log(numUnit);
        return (numUnit === numTen || numUnit === numHundred || numTen === numHundred);
    }
    // CompareDigits(456) // Evaluar parcialmente;
    //* Display
    function main() {
        const num = 311;
        const result = CompareDigits(num);
        if (result) {
            console.log(`El número ${num} tiene al menos un dígito repetido`);
        }
        else {
            console.log(`El número ${num} tiene sus dígitos diferentes`);
        }
    }
    main();
})();
