import { CipDec } from "./cipherDecipher";
import { CipherDecipher } from "./cipher";
/*
type TestObj = {
    str: string,
     shift?: number
 }
*/
// const test1 = new CipherDecipher (32,122,1);
 //const test2: Array<number> = new CipherDecipher (22, 127, 1);
 const str1: string = '77nfE1%^';
 const str2: string = "abz";
 //const arr1 = new CipherDecipher (32,122,1); //??? type
 //const arr2 = new CipherDecipher (22, 127, 1);
 const test1: string = new CipherDecipher (32,122,100).cipher(str1);
const test2: string = new CipherDecipher (22,127,1).cipher(str2);
console.log (`str1: ${str1}, after cipher: ${test1}, after decipher: ${new CipherDecipher (32,122,100).decipher(test1)}`);
console.log (`str2: ${str2}, after cipher: ${test2}, after decipher: ${new CipherDecipher (22,127,1).decipher(test2)}`);

//console.log ((new CipherDecipher (32,122,1)).cipher(str1));

 //console.log (test1.decipher(str1));
 //console.log(test1.cipher(str1));
 //console.log(test1.decipher(str2));
// console.log()
 /*
 function testCipherDecipher(data: Array<TestObj>,
     testName: string): void{
        console.log(`${"*".repeat(10)}${testName}${"*".repeat(10)}`)
        const funForTest: MapperFunction
         = testName === "cipherTest" ? shiftCipher : shiftDecipher;
data.forEach((obj => console.log(`str=${obj.str}, shift=${obj.shift || 1} => ${funForTest(obj.str, obj.shift)}`))) 
     }
     const dataForCipherTest: Array<TestObj> = [
        {str: "abc"}, {str: "abz", shift: 1000}
     ];
     testCipherDecipher(dataForCipherTest, "cipherTest");
     const dataForDecipherTest: Array<TestObj> = [
        {str: "bcd"}, {str: "mnl", shift: 1000}
     ];
     testCipherDecipher(dataForDecipherTest, "decipherTest");

     */