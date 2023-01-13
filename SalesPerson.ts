//import { Employee } from "./Employee";
import { MIN_SALARY } from "./Employee";
import { WageEmployee } from "./WageEmployee";
export const MIN_SALES_VALUE: number = 0;
export const MAX_SALES_VALUE: number = 50000;
export const MIN_PERCENT: number = 0;
export const MAX_PERCENT: number = 100;


export class SalesPerson extends WageEmployee {

    constructor(id: number, name:string, birthYear: number,
        department: string, basicSalary: number, 
        wage: number, hours: number,
        private _salesValue: number, private _percentValue: number) {
            super (id, name, birthYear, department,basicSalary,
                wage, hours)
        }

        get salesValue() {
           return this._salesValue;
        }
        set salesValue(salesValue: number) {
            if (salesValue < MIN_SALES_VALUE || salesValue > MAX_SALES_VALUE) {
                throw `wrong wage value must be in range [${MIN_SALES_VALUE}-${MAX_SALES_VALUE}]`
            }
            this._salesValue = salesValue;
           
        }
        get percentValue() {
            return this._percentValue;
        }
        set percentValue(percentValue: number) {
            if (percentValue < MIN_PERCENT || percentValue > MAX_PERCENT) {
                    throw `wrong wage value must be in range [${MIN_PERCENT}-${MAX_PERCENT}]`
                }
                this._percentValue = percentValue;
       }


     computeSalary(): number {
         return super.computeSalary() + this._salesValue * this._percentValue/100;
     }   
} 
