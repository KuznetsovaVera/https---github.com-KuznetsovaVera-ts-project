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
        return this.cipherDecipher(str, this.mapperCipher);
    }
    decipher(str) {
        return this.cipherDecipher(str, this.mapperDecipher);
    }
    cipherDecipher(str, mapperFun) {
        const arStr = Array.from(str);
        const arRes = arStr.map(symb => {
            let res = symb.charCodeAt(0);
            if (res <= this.mostASCII && res >= this.leastASCII) {
                res = mapperFun.call(this, res);
            }
            return String.fromCharCode(res);
        });
        return arRes.join('');
    }
    mapperCipher(symbCode) {
        const actualShift = (symbCode - this.leastASCII + this.shift) % this.amountASCII;
        return (this.leastASCII + actualShift);
    }
    mapperDecipher(symbCode) {
        const actualShift = (this.mostASCII - symbCode + this.shift) % this.amountASCII;
        return (this.mostASCII - actualShift);
    }
}
exports.CipherDecipher = CipherDecipher;
//# sourceMappingURL=cipher.js.map