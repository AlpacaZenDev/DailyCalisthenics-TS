"use strict";
/**
 * Leer un número entero de 2 dígitos y determinar si un dígito es múltiplo del otro.
 */
(() => {
    function validateMultiple(a, b) {
        if (a === 0)
            return true; // * No necesario, por ser número de dos cifras
        if (b === 0)
            return false; // ! Nota al final
        return (a % b === 0) || (b % a === 0);
    }
    function validateTwoDigits(num) {
        return Number.isInteger(num) && ((num >= 10 && num <= 99) || (num <= -10 && num >= -99));
    }
    function separateIntoDigits(num) {
        num = (num < 0) ? Math.abs(num) : num;
        const a = Math.trunc(num / 10);
        const b = (num % 10);
        return validateMultiple(a, b);
    }
    function evaluateMultiple(num) {
        if (validateTwoDigits(num)) {
            console.log(`El número ${num} es de dos dígitos`);
            console.log(`${separateIntoDigits(num) ? "Un número es múltiplo del otro"
                : "No hay un número que sea múltiplo del otro"}`);
        }
        else {
            console.log(`Ingrese un número entero de dos dígitos`);
        }
    }
    evaluateMultiple(30);
})();
/**
 * (a % b === 0) → (1 % 0 === 0) → Esta operación causa un error porque la división por cero no está definida.
 * Ningún número es múltiplo de 0. Pero, 0 es múltiplo de cualquier número (excepto de sí mismo).
 *
 */ 
