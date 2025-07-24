/**
 * Leer un número entero y determinar si tiene 3 dígitos.
 */
(()=>{
    
    function esEnteroTresDigitos(numero: number): boolean {
        if (numero >= 100 && numero <= 999 && Number.isInteger(numero)) {
            return true;
        } else {
            return false;
        }
    }
    
    let numero: number = 999; // Puedes cambiar este valor para probar con otros números
    let resultado: boolean = esEnteroTresDigitos(numero);
    console.log(`El número tiene tres dígitos? ${resultado}`);
    

})();