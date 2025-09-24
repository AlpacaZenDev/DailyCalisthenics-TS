/**
 * 17. Leer un número entero de tres dígitos y determinar en qué posición está
* el mayor dígito.
 */

(()=>{

    // *Validation
    function ValidateNumber(num:number): boolean {
        num = Math.abs(num);
        if (!Number.isInteger(num)) return false;
        return (num >= 100 && num <= 999);
    }
    // ValidateNumber(999);


    // *Logic
    function PositionOfMajorDigit(num:number): string {
        num = Math.abs(num);

        const numHundred: number = Math.trunc(num/100);
        const numTen: number = Math.trunc((num%100)/10);
        const numUnit: number = num % 10;

        let position: string = '';
        if (numUnit > numTen && numUnit > numHundred) {
            position = `Unidad`;
        }
        if (numTen > numUnit && numTen > numHundred) {
            position = `Decena`;
        }
        if (numHundred > numUnit && numHundred > numTen) {
            position = `Centena`;
        }

        return position;
        
    }
    // PositionOfMajorDigit(-345);
    


    // *View





})();