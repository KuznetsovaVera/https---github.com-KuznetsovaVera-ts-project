"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecipher = void 0;
class CipherDecipher {
    constructor(leastASCII, mostASCII, shift, amountASCCI = mostASCII - leastASCII + 1) {
        this.leastASCII = leastASCII;
        this.mostASCII = mostASCII;
        this.shift = shift;
        this.amountASCCI = amountASCCI;
    }
    cipher(str) {
        // console.log ("1:", this.leastASCII, this.mostASCII, this.shift, this.amountASCCI);
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
    console.log ("6:", this.amountASCCI);
   }
*/
    cipherDecipher(str, mapperFun) {
        // console.log ("2:", str);
        const arStr = Array.from(str);
        // console.log("4-4:", this.leastASCII);
        const arRes = arStr.map(symb => mapperFun(symb, this.leastASCII, this.mostASCII, this.amountASCCI, this.shift));
        return arRes.join('');
    }
    mapperCipher(symb, leastASCII, mostASCII, amountASCII, shift) {
        // console.log("3:", symb)
        //console.log("4:", leastASCII);
        //console.log ("5:", shift);
        //console.log ("6:", amountASCII);
        const actualShift = (symb.charCodeAt(0) - leastASCII + shift) % amountASCII;
        return String.fromCharCode(leastASCII + actualShift);
    }
    mapperDecipher(symb, leastASCII, mostASCII, amountASCII, shift) {
        // console.log("3-2:", symb);
        // const sh: number = this.shift - ERROR,
        // console.log("4-2:", sh);
        const actualShift = (mostASCII - symb.charCodeAt(0) + shift) % amountASCII;
        return String.fromCharCode(mostASCII - actualShift);
    }
}
exports.CipherDecipher = CipherDecipher;
//# sourceMappingURL=cipher.js.map