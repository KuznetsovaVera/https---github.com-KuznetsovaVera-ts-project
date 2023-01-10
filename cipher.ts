import { CipDec } from "./cipherDecipher";
//type MapperFunction = (symb: string, lesttAS: number, mostAS: number, amountAS: number, shift: number) => string;
type MapperFunction = (symb: string) => string;
export class CipherDecipher implements CipDec {
      
 constructor(private leastASCII : number, private mostASCII : number,
     private shift : number, private amountASCII: number = mostASCII - leastASCII +1) {
  
    }
    
    cipher(str: string): string {
       // console.log ("1:", this.leastASCII, this.mostASCII, this.shift, this.amountASCII);
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
    console.log ("6:", this.amountASCII);
   }
*/
 cipherDecipher(str: string, mapperFun: MapperFunction) {
       // console.log ("2:", str);
        const arStr: Array<string> = Array.from(str);
       // console.log("4-4:", this.leastASCII);
       // const arRes: Array<string> = arStr.map(symb => mapperFun(symb, this.leastASCII, this.mostASCII, this.amountASCII, this.shift));
       const arRes: Array<string> = arStr.map(symb => mapperFun.call(this, symb));
       return arRes.join('');
     }

    // mapperCipher(symb: string, leastASCII: number, mostASCII: number, amountASCII: number, shift: number) : string {
      mapperCipher(symb: string) : string {
    // console.log("3:", symb)
        //console.log("4:", leastASCII);
        //console.log ("5:", shift);
        //console.log ("6:", amountASCII);
        const actualShift: number = (symb.charCodeAt(0) - this.leastASCII + this.shift) % this.amountASCII;
        return String.fromCharCode(this.leastASCII + actualShift);
     }
     mapperDecipher(symb: string): string {
    //  mapperDecipher(symb: string, leastASCII: number, mostASCII: number, amountASCII: number, shift: number): string {
      // console.log("3-2:", symb);
       // const sh: number = this.shift - ERROR,
        // console.log("4-2:", sh);
        const actualShift: number = (this.mostASCII - symb.charCodeAt(0) + this.shift) % this.amountASCII;
        return String.fromCharCode(this.mostASCII - actualShift);
     }
   /*
     mapperDecipher(symb: string): string {
        console.log("3-2:", symb);
       // const sh: number = this.shift - ERROR,
        // console.log("4-2:", sh);
        const actualShift: number = (this.mostASCII - symb.charCodeAt(0) + this.shift) % this.amountASCII;
        return String.fromCharCode(this.mostASCII - actualShift);
     }
     */

}

