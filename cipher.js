"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cipher = void 0;
class Cipher {
    constructor(leastASCII, mostASCII, shift) {
        this.leastASCII = leastASCII;
        this.mostASCII = mostASCII;
        this.shift = shift;
        const amountASCCI = mostASCII - leastASCII + 1;
    }
    cipher(str) {
        throw new Error("Method not implemented.");
    }
    decipher(str) {
        throw new Error("Method not implemented.");
    }
}
exports.Cipher = Cipher;
function cipherDecipher(str, shift, mapperFun) {
    const arStr = Array.from(str);
    const arRes = arStr.map(symb => {
        let res = symb;
        if (symb <= 'z' && symb >= 'a') {
            res = mapperFun(symb, shift);
        }
        return res;
    });
    return arRes.join('');
}
function mapperCipher(symb, shift) {
    const actualShift = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
    return String.fromCharCode(aCodeAscii + actualShift);
}
function mapperDecipher(symb, shift) {
    const actualShift = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
    return String.fromCharCode(zCodeAscii - actualShift);
}
//# sourceMappingURL=Cipher.js.map