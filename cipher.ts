import { CipherDecipher } from "./cipherDecipher";
export class Cipher implements CipherDecipher {
 constructor(private leastASCII : number, private mostASCII : number,
     private shift : number) {
          
    const amountASCCI: number = mostASCII - leastASCII +1;   

    }
    
    cipher(str: string): string {
        throw new Error("Method not implemented.");
    }
    decipher(str: string): string {
        throw new Error("Method not implemented.");
    }
    
}


type MapperFunction = (symb: string, shift: number) => string;
function cipherDecipher(str: string, shift: number,
     mapperFun: MapperFunction): string {
        
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= 'z' && symb >= 'a') {
                res = mapperFun(symb, shift);
            }
            return res;
        })
        return arRes.join('');
     }
     function mapperCipher(symb: string, shift: number) : string {
        const actualShift: number = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
        return String.fromCharCode(aCodeAscii + actualShift);
     }
     function mapperDecipher(symb: string, shift: number): string {
        const actualShift: number = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
        return String.fromCharCode(zCodeAscii - actualShift);
     }