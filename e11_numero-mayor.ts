

// Leer dos números enteros y determinar cuál es el mayor.

(()=>{

    function compareNumbers(numA: number, numB: number): string {
        if (numA === numB) return `Los números son iguales`;
        return `${(numA > numB) ? "A es mayor que B" : "B es mayor que A"}`
    }

    function evaluateNumbers(numA: number, numB: number): void {
        if (!Number.isInteger(numA) || !Number.isInteger(numB)) {
            console.log('Ingrese un número entero');
        } else {
            console.log(`Resultado: ${(compareNumbers(numA, numB))}`);
        }
    }

    evaluateNumbers(0,12);

})();