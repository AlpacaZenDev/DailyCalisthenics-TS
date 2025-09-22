/**
 * 16. Leer un número entero de tres dígitos y determinar si al menos dos de
 * sus tres dígitos son iguales.
 */


(()=>{

    // Validation
    function ValidateNumber(num:number) {
        num = Math.abs(num);
        if (!Number.isInteger(num)) return false;
        return (num >= 100 && num <= 999);
    }
    
    // console.log(ValidateNumber(999));
    


    // Logic
    


    // Display



})();