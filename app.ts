/*
for (let i = 0; i < 3; i++) {
    setTimeout(()=> console.log(i));
}
let a = 10;
console.log(`a = ${a}`);
*/

// variables
/*
let hello = 'world';
let b;
b =10;
b= 'abc';
let c: string;
// function
function getRandomNumber (min:number, max:number):number {
return Math.trunc (min + Math.random() * (max - min +1));
}

*/
const ASCII_FIRST = 97;
const ACCII_LAST = 122;


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

function shiftCipher(str: string, shift: number = 1): string {
   
  let arrayStringIn: Array<string>;
  let arrayStringOut: Array<string>;
 
  let symNew: string; //?? not in function
  arrayStringIn = Array.from(str);
  arrayStringOut = arrayStringIn.map (function(sym: string){
   //let symNew: string;
   let code: number;
   code = sym.charCodeAt(0); //?? only with 0, without - error

   if (code >= ASCII_FIRST && code <= ACCII_LAST) {
      for (let i = 0; i<shift; i++) {
       code == ACCII_LAST ? code = ASCII_FIRST : code ++; 
        symNew = String.fromCharCode(code);
        } }
   else {
    symNew = sym;
       }
   return symNew;
   })
  
    return arrayStringOut.join('');
}

function shiftDecipher(str: string, shift: number = 1): string {
   
    let arrayStringIn: Array<string>;
    let arrayStringOut: Array<string>;
    
    let symNew: string; //?? not in function
    arrayStringIn = Array.from(str);
    arrayStringOut = arrayStringIn.map (function(sym: string){
     //let symNew: string;
     let code: number;
     code = sym.charCodeAt(0); //?? only with 0, without - error
  
     if (code >= ASCII_FIRST && code <= ACCII_LAST) {
        for (let i = 0; i<shift; i++) {
         code == ASCII_FIRST ? code = ACCII_LAST : code --; 
         symNew = String.fromCharCode(code);
          } }
     else {
          symNew = sym;
         }
     return symNew;
     })
    return arrayStringOut.join('');
  }
  

