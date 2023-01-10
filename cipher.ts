import { CipDec } from "./cipherDecipher";
type MapperFunction = (symb: string, lesttAS: number, mostAS: number, amountAS: number, shift: number) => string;

export class CipherDecipher implements CipDec {
      
 constructor(private leastASCII : number, private mostASCII : number,
     private shift : number, private amountASCCI: number = mostASCII - leastASCII +1) {
  
    }
    
    cipher(str: string): string {
       // console.log ("1:", this.leastASCII, this.mostASCII, this.shift, this.amountASCCI);
     //   this.foo();
        return this.cipherDecipher(str, this.mapperCipher)
          }
    decipher(str: string): string {
        return this.cipherDecipher(str, this.mapperDecipher)
    }
    /*
   foo () {
   
    console.log("4:", this.leastASCII);
    console.log ("5:", this.shift);
    console.log ("6:", this.amountASCCI);
   }
*/
 cipherDecipher(str: string, mapperFun: MapperFunction) {
       // console.log ("2:", str);
        const arStr: Array<string> = Array.from(str);
       // console.log("4-4:", this.leastASCII);
        const arRes: Array<string> = arStr.map(symb => mapperFun(symb, this.leastASCII, this.mostASCII, this.amountASCCI, this.shift));
        return arRes.join('');
     }

     mapperCipher(symb: string, leastASCII: number, mostASCII: number, amountASCII: number, shift: number) : string {
       // console.log("3:", symb)
        //console.log("4:", leastASCII);
        //console.log ("5:", shift);
        //console.log ("6:", amountASCII);
        const actualShift: number = (symb.charCodeAt(0) - leastASCII + shift) % amountASCII;
        return String.fromCharCode(leastASCII + actualShift);
     }
     mapperDecipher(symb: string, leastASCII: number, mostASCII: number, amountASCII: number, shift: number): string {
       // console.log("3-2:", symb);
       // const sh: number = this.shift - ERROR,
        // console.log("4-2:", sh);
        const actualShift: number = (mostASCII - symb.charCodeAt(0) + shift) % amountASCII;
        return String.fromCharCode(mostASCII - actualShift);
     }
   /*
     mapperDecipher(symb: string): string {
        console.log("3-2:", symb);
       // const sh: number = this.shift - ERROR,
        // console.log("4-2:", sh);
        const actualShift: number = (this.mostASCII - symb.charCodeAt(0) + this.shift) % this.amountASCCI;
        return String.fromCharCode(this.mostASCII - actualShift);
     }
     */

}

