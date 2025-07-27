

/**
 * Leer un número entero de 2 dígitos y decir si es primo y negativo.
 */

(()=>{

    function countDivisors(num: number): number {
        let counter = 0;
        for (let divisor = 1; divisor <= num; divisor++) {
            if (num % divisor === 0) {
                counter ++;
            }
        }
        return counter;
    }

    function validatePrimeNumber(num: number): string {
        return `El número ${num} ${countDivisors(num) === 2 ? "es Primo" : "NO es primo"}`; 
    }

    function validateTwoDigits(num: number): boolean {
        return Number.isInteger(num) && (num >= 10 && num <= 99);
    }

    function validateNegative(num: number): boolean {
        return (Number.isInteger(num) && (num < 0));
    }

    function evaluateNumber(num: number): void {
        if (validateNegative(num)) {
            console.log("El número es negativo. No se puede continuar");
        } else {
            if (validateTwoDigits(num)) {
                console.log(`El número ${num} es de dos dígitos`);
                console.log(`Entonces: ${validatePrimeNumber(num)}`);
                
            } else {
                console.log("Ingrese un entero de dos dígitos");
            }
        }
    }

    evaluateNumber(37);


})();