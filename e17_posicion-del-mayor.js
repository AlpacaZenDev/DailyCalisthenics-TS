"use strict";
/**
 * 17. Leer un número entero de tres dígitos y determinar en qué posición está
* el mayor dígito.
 */
(() => {
    // *Validation
    function ValidateNumber(num) {
        console.log(num);
        
        num = Math.abs(num);
        console.log(num);
        if (!Number.isInteger(num))
            return false;
        return (num >= 100 && num <= 999);
    }
    ValidateNumber(500);
    // *Logic
    // *View
})();
