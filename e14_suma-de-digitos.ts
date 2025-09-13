/**
 * 14. Leer dos números enteros de dos dígitos y determinar a cuánto es igual
 * la suma de todos los dígitos.
 */

// ! Modelo de código estructurado para ejercicios TS.
/**
 * 📖 Justificación
 * Validación: función para garantizar que los datos de entrada cumplan el enunciado.
 * Lógica: función que resuelve el problema y retorna un resultado (reutilizable).
 * Presentación: función main que gestiona la interacción con el usuario (mensajes, salidas).
 * Aislamiento: uso de IIFE para no contaminar el espacio global.
 * Esto es más que resolver un problema puntual:
 * 👉 es un modelo metodológico que separa qué hace el programa (lógica) de cómo se muestra el resultado (presentación).
 */

(()=>{

    // *Validación:
    function evaluateNumber(num: number): boolean {
        if (!Number.isInteger(num)) return false;
        return (num >= 10 && num <= 99);
    }

    // *Lógica:
    function addDigits(numA: number, numB: number): number | null {
        if (!evaluateNumber(numA) || !evaluateNumber(numB)) {
            return null;
        }
        const numATens = Math.trunc(numA/10);
        const numAUnits = numA % 10;
        const numBTens = Math.trunc(numB/10);
        const numBUnits = numB % 10;

        return (numATens + numAUnits + numBTens + numBUnits);
    }

    // *Presentación:
        function main(): void {
            const result = addDigits(82, 42)
            
            if (result === null) {
                console.log(`Ingrese sólo positivos de dos dígitos`);
            } else {
                console.log(`Suma de todos los dígitos de ambos números: ${result}`);
            }
        }

    main();


})();