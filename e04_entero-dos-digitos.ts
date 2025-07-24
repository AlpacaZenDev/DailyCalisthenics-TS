/**
 * Leer un número entero de 2 dígitos y calcular la suma de ellos.
 */

(()=>{

    function esDosDigitos(num: number): boolean {
        if (Number.isInteger(num) && num >= 10 && num <= 99) {
            return true;
        } else {
            return false;
        }
    }

    function sumaDigitos(num: number): number {
        let x: number = Math.trunc(num / 10);
        let y: number = num % 10;
        return x + y;
    }

    let numero: number = 80;
    let resultado: boolean = esDosDigitos(numero);
    if (resultado) {
        console.log(`El número es de dos dígitos`);
        let suma: number = sumaDigitos(numero);
        console.log(`La suma de sus dígitos es ${suma}`);
    } else {
        console.log(`El número NO es de dos dígitos`);
    };

})();