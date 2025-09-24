/**
 * 17. Leer un número entero de tres dígitos y determinar en qué posición está
* el mayor dígito.
 */

(()=>{

    // *Validation
    function ValidateNumber(num:number): boolean {
        num = Math.abs(num);
        if (!Number.isInteger(num)) return false;
        return (num >= 100 && num <= 999);
    }
    ValidateNumber(999);


    // *Logic



    // *View





})();