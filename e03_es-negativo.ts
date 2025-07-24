/**
 * Leer un número entero y determinar si es negativo.
 */

(()=>{

    function esNegativo(num: number): boolean {
        if (num < 0 && Number.isInteger(num)) {
            return true;
        } else {
            return false;
        }
    }

    let numero: number = 20;
    let resultado: boolean = esNegativo(numero);
    console.log(`El número es negativo? ${resultado}`);

})();