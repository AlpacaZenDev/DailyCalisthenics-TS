/**
 * Leer un número entero de dos dígitos y determinar si los dos dígitos son iguales.
 */

(()=>{


    function validateNumber(num: number): boolean {
        num = (num < 0) ? Math.abs(num) : num;
        return (Number.isInteger(num) && num >= 10 &&  num <= 99);
    }
    
    function compareDigits(num: number): boolean {
        num = (num < 0) ? Math.abs(num) : num;
        const digitA: number = Math.trunc(num / 10);
        const digitB: number = num % 10;
        return (digitA === digitB);
    }

    function evaluateNumber(num: number): void {
        if (!validateNumber(num)) {
            console.log(`Ingrese un número entero de dos dígitos.`);
        } else {
            const result: string = `${compareDigits(num) ? "dígitos iguales" : "dígitos diferentes"}`;
            console.log(`El número ${num} tiene ${result}`);
        }
    }

    evaluateNumber(-99);



})();