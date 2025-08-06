"use strict";
(() => {
    /**
     * Leer dos números enteros de dos dígitos y determinar si la suma de los
     * dos números origina un número par.
     */
    function validateNumbers(numA, numB) {
        if (!Number.isInteger(numA) || !Number.isInteger(numB))
            return false;
        return ((numA >= 10 && numA <= 99) && (numB >= 10 && numB <= 99));
    }
    function evaluateNumbers(numA, numB) {
        if (!validateNumbers(numA, numB)) {
            console.log(`Ingrese sólo números enteros de 2 digitos`);
        }
        else if ((numA + numB) % 2 === 0) {
            console.log(`La suma de ${numA} + ${numB} da un número par`);
        }
        else {
            console.log(`La suma de ${numA} + ${numB} NO da número par`);
        }
    }
    evaluateNumbers(91, 14);
})();


/**
 * 1. Buenas Prácticas
 * Legibilidad: El código es claro y entendible.
 * Modularidad: Uso de funciones para validar y evaluar, siguiendo el principio de responsabilidad única.
 * Mensajes de Error: Adecuados y comprensibles para el usuario.
 * Alcance de variables: Uso de IIFE para evitar contaminación de variables globales.
 * Sin dependencias externas.

 * 2. Sugerencias de Mejora
 * Internacionalización (opcional): Los mensajes podrían parametrizarse para otros idiomas.
 * Retorno de valores: Actualmente, sólo hay console.log. Para ambientes de prueba automática, sería mejor retornar el resultado.
 * Documentación: Puede agregarse JSDoc para mayor formalidad.
 * 
 * Calificación Final
 * Criterios:
 * Cumplimiento de requisitos: 10/10
 * Validación de entradas: 10/10
 * Robustez y claridad: 10/10
 * Pruebas teóricas: 10/10
 * 
 * Calificación:
 * 10/10 – Solución correcta, robusta y profesional.

*/