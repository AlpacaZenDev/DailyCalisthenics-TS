

/*
*Leer dos números enteros de dos dígitos y determinar si tienen dígitos
*comunes, es decir, si un dígito que está presente en un número también
*está presente en el otro número.
*/

function validateNumbers(numA: number, numB: number):boolean {
    return Number.isInteger(numA) && Number.isInteger(numB);
}

function evaluateDigits(numA: number, numB: number): void {
    if (!validateNumbers(numA, numB)) {
        console.log("Ingrese sólo números enteros");
    } else {
        numA = numA < 0 ? Math.abs(numA) : numA;
        numB = numB < 0 ? Math.abs(numB) : numB;
    
        const a1: number = Math.trunc(numA / 10);
        const a2: number = numA % 10;
        const b1: number = Math.trunc(numB / 10);
        const b2: number = numB % 10;
    
        if ((a1 === b1 || a1 === b2) || (a2 === b1 || a2 === b2)) {
            console.log(`Ambos números comparten dígitos comunes`);
        } else {
            console.log(`Ambos números NO comparten dígitos comunes`);
        }
    }
}

evaluateDigits(11,-11);