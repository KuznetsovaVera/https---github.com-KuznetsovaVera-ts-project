"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cipher_1 = require("./cipher");
const str1 = '77nfE1%^';
const str2 = "abz";
const test1 = new cipher_1.CipherDecipher(32, 122, 100).cipher(str1);
const test2 = new cipher_1.CipherDecipher(22, 127, 1).cipher(str2);
console.log(`str1: ${str1}, after cipher: ${test1}, after decipher: ${new cipher_1.CipherDecipher(32, 122, 100).decipher(test1)}`);
console.log(`str2: ${str2}, after cipher: ${test2}, after decipher: ${new cipher_1.CipherDecipher(22, 127, 1).decipher(test2)}`);
//# sourceMappingURL=app.js.map