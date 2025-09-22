/**
 * 16. Leer un número entero de tres dígitos y determinar si al menos dos de
 * sus tres dígitos son iguales.
 */


(()=>{

    //* Validation
    function ValidateNumber(num:number) {
        num = Math.abs(num);
        if (!Number.isInteger(num)) return false;
        return (num >= 100 && num <= 999);
    }
    
    // console.log(ValidateNumber(999));
    // todo: ¿Cómo valido mediante debug? -> Prácticar ambos métodos
    
    //* Logic
    function CompareDigits(num:number): any {
        if (!ValidateNumber(num)) return null;
        
        num = Math.abs(num);
        const numHundred: number = Math.trunc(num / 100);
        const numTen: number = Math.trunc(num / 10) % 10;
        const numUnit: number = num % 10;
        // console.log(numHundred);
        // console.log(numTen);
        // console.log(numUnit);
        

    }
    CompareDigits(456) // Evaluar parcialmente;


    //* Display



})();