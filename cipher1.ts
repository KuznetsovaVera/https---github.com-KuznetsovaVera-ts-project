
const ASCII_FIRST: number = 'a'.charCodeAt(0);
const ASCII_LAST: number = 'z'.charCodeAt(0);
const ASCII_STEP: number = ASCII_LAST - ASCII_FIRST + 1;


// TEST

console.log (`'abz.': ${shiftCipher('abz.')}`);
console.log (`'abc': ${shiftCipher('abc')}`);
console.log (`'abz', 27: ${shiftCipher('abz', 27)}`);
console.log (`'abz', 1000: ${shiftCipher('abz', 1000)}`);
console.log (`'abz', 26: ${shiftCipher('abz', 26)}`);
console.log (`'A.&?nNM', 2: ${shiftCipher('A.&?nM', 2)}`);


console.log (`'bcd': ${shiftDecipher('bcd')}`);
console.log (`'efg', 26: ${shiftDecipher('efg', 26)}`);
console.log (`'bca', 27: ${shiftDecipher('bca', 27)}`);
console.log (`'mnl', 1000: ${shiftDecipher('mnl', 1000)}`);
console.log (`'A.&?nM', 2: ${shiftDecipher('A.&?nM', 2)}`);

console.log (`'abz', 1000 Cipher+Decipher: ${shiftDecipher (shiftCipher('abz', 1000), 1000)}`)
console.log (`'abz', 27 Cipher+Decipher: ${shiftDecipher (shiftCipher('abz', 27), 27)}`)

function shiftCipher(str: string, shift: number = 1): string {
 
  let arrayStringIn: string[];
  let arrayStringOut: Array<string>;
  
  const shiftNew: number = Math.round(shift) % ASCII_STEP;
  arrayStringIn = Array.from(str);
  arrayStringOut = arrayStringIn.map ((sym: string) => shiftOneSymbol (sym, shiftNew));
  
  return arrayStringOut.join('');
}

function shiftDecipher(str: string, shift: number = 1): string {
   
    let arrayStringIn: string[];
    let arrayStringOut: Array<string>;
 
    const shiftNew: number = Math.round(shift) % ASCII_STEP;
    arrayStringIn = Array.from(str);
    arrayStringOut = arrayStringIn.map ((sym: string) => shiftOneSymbol (sym, -shiftNew));
    return arrayStringOut.join('');
  }
  
  function shiftOneSymbol (sym: string, shift:number): string {
    let symNew: string;

    let code: number = sym.charCodeAt(0); //!! only with 0
  
    if (code >= ASCII_FIRST && code <= ASCII_LAST) {
       code += shift;
       if (code > ASCII_LAST) code -=ASCII_STEP;
       else if (code < ASCII_FIRST) code +=ASCII_STEP;
        symNew = String.fromCharCode(code);
          }
    else {
         symNew = sym;
        }
    return symNew;
    }

