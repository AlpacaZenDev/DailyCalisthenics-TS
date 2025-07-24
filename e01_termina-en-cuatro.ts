/**
 * Leer un número entero y determinar si termina en 4.
 */

(()=>{

function terminaEnCuatro(num: number): boolean {
    if (num % 10 === 4) {
        return true;
    } else {
        return false;
    }
}

let numero: number = 4; // Puedes cambiar este valor para probar con otros números
let resultado: boolean = terminaEnCuatro(numero);
console.log(`El número termina en 4: ${resultado}`);

})();