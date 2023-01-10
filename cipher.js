"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecipher = void 0;
class CipherDecipher {
    constructor(leastASCII, mostASCII, shift, amountASCII = mostASCII - leastASCII + 1) {
        this.leastASCII = leastASCII;
        this.mostASCII = mostASCII;
        this.shift = shift;
        this.amountASCII = amountASCII;
    }
    cipher(str) {
        // console.log ("1:", this.leastASCII, this.mostASCII, this.shift, this.amountASCII);
        //   this.foo();
        return this.cipherDecipher(str, this.mapperCipher);
    }
    decipher(str) {
        return this.cipherDecipher(str, this.mapperDecipher);
    }
    /*
   foo () {
   
    console.log("4:", this.leastASCII);
    console.log ("5:", this.shift);
    console.log ("6:", this.amountASCII);
   }
*/
    cipherDecipher(str, mapperFun) {
        // console.log ("2:", str);
        const arStr = Array.from(str);
        // console.log("4-4:", this.leastASCII);
        // const arRes: Array<string> = arStr.map(symb => mapperFun(symb, this.leastASCII, this.mostASCII, this.amountASCII, this.shift));
        const arRes = arStr.map(symb => mapperFun.call(this, symb));
        return arRes.join('');
    }
    // mapperCipher(symb: string, leastASCII: number, mostASCII: number, amountASCII: number, shift: number) : string {
    mapperCipher(symb) {
        // console.log("3:", symb)
        //console.log("4:", leastASCII);
        //console.log ("5:", shift);
        //console.log ("6:", amountASCII);
        const actualShift = (symb.charCodeAt(0) - this.leastASCII + this.shift) % this.amountASCII;
        return String.fromCharCode(this.leastASCII + actualShift);
    }
    mapperDecipher(symb) {
        //  mapperDecipher(symb: string, leastASCII: number, mostASCII: number, amountASCII: number, shift: number): string {
        // console.log("3-2:", symb);
        // const sh: number = this.shift - ERROR,
        // console.log("4-2:", sh);
        const actualShift = (this.mostASCII - symb.charCodeAt(0) + this.shift) % this.amountASCII;
        return String.fromCharCode(this.mostASCII - actualShift);
    }
}
exports.CipherDecipher = CipherDecipher;
//# sourceMappingURL=cipher.js.map