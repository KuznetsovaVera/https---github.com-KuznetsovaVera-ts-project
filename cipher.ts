
type MapperFunction = (symbCode: number) => number;
export class CipherDecipher {
      
 constructor(private leastASCII : number, private mostASCII : number,
     private shift : number, private amountASCII: number = mostASCII - leastASCII +1) {
      }
    
    cipher(str: string): string {
    
        return this.cipherDecipher(str, this.mapperCipher)
          }
    decipher(str: string): string {
        return this.cipherDecipher(str, this.mapperDecipher)
    }
    
 private cipherDecipher(str: string, mapperFun: MapperFunction) {
       const arStr: Array<string> = Array.from(str);
       const arRes: Array<string> = arStr.map(symb => {
         let res: number = symb.charCodeAt(0);
         if (res <= this.mostASCII && res >= this.leastASCII) {
                      res = mapperFun.call(this, res);
         }
         return String.fromCharCode(res);
      });
       return arRes.join('');
     }

  
     private mapperCipher(symbCode: number) : number {
        const actualShift: number = (symbCode - this.leastASCII + this.shift) % this.amountASCII;
        return (this.leastASCII + actualShift);
     }
     private mapperDecipher(symbCode: number): number {
   
        const actualShift: number = (this.mostASCII - symbCode + this.shift) % this.amountASCII;
        return (this.mostASCII - actualShift);
     }
   

}

