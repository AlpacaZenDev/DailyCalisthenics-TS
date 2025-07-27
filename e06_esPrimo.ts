/**
 * Leer un número entero menor que 20 y determinar si es primo.
 */

(()=>{

function countDivisors(num: number): number  {
    let divisors: number = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors++
        }
    }
    return divisors;
}

function isPrime(num: number): boolean {
    if (num <= 1) return false;  // robustez adicional
    return countDivisors(num) === 2;
}

function validateNumber(num: number): boolean {
    return Number.isInteger(num) && num >= 0 && num < 20;
}

function evaluateNumber (num: number): void {

    if (validateNumber(num)) {
        const result = isPrime(number)
        console.log(`El número ${number} ${result? "Es primo" : "No es primo"}`);
    } else {
        console.log("Ingrese un número válido: entero y menor a 20");
    }
}

const number: number = 20;
evaluateNumber(number);

})();
