/**
 * 14. Leer dos números enteros de dos dígitos y determinar a cuánto es igual
 * la suma de todos los dígitos.
 */

(()=>{

    function evaluateNumber(num: number): boolean {
        if (!Number.isInteger(num)) return false;
        return (num >= 10 && num <= 99);
    }

    function addDigits(numA: number, numB: number): void {
        if (!evaluateNumber(numA) || !evaluateNumber(numB)) {
            console.log(`Ingrese sólo enteros positivos de dos dígitos!`);
        } else {
            const a1 = Math.trunc(numA/10);
            const a2 = numA % 10;
            const b1 = Math.trunc(numB/10);
            const b2 = numB % 10;

            console.log(`Suma de todos los dígitos: ${a1 + a2 + b1 + b2}`);
            
        }
    }


    addDigits(82, 42);


})();