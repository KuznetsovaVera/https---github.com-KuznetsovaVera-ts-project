import { CipherDecipher } from "./cipher";

const str1: string = '77nfE1%^';
const str2: string = "abz";

const test1: string = new CipherDecipher (32,122,100).cipher(str1);
const test2: string = new CipherDecipher (22,127,1).cipher(str2);

console.log (`str1: ${str1}, after cipher: ${test1}, after decipher: ${new CipherDecipher (32,122,100).decipher(test1)}`);
console.log (`str2: ${str2}, after cipher: ${test2}, after decipher: ${new CipherDecipher (22,127,1).decipher(test2)}`);