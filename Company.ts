
export type EmployeeObg = {
       id: number, name:string, birthYear: number,
        department: string, basicSalary: number, 
        wage: number, hours: number,
        salesValue: number, percentValue: number
} 
export class Company {
 
   constructor (private _Employees: Array<EmployeeObg>) {
       }
       get Employees() {
        return this._Employees;
       }
    addEmployee (employee: EmployeeObg)
       { //!! add check ID
         //!! function return VOID
           this._Employees.push(employee);
       }
       removeEmployee(id: number): boolean
       {
         let idTrue: boolean = true;
         let index: number =
            this._Employees.findIndex(el => el.id === id);
            //console.log ("2.emp:", index)
         index === -1 ? idTrue = false : this._Employees.splice (index, 1);
         //console.log ("3.",idTrue, index)
         return idTrue;
       }
       getEmployee(id: number): number {
        {
            
           // let index: number =
             return this._Employees.findIndex(el => el.id === id);

               //RETURN WHAT??? NULL - ERROR
           // index === -1 ? return null: return index;
           // return index;
          }

       }
       // SALARY!!!
       
       getEmployeeBySalary(salaryFrom: number, salaryTo: number): Array<EmployeeObg> {
      return this._Employees.filter (el => {
            let curSalary = this.totalSalaryEmployee (el);
               if (curSalary >=salaryFrom && curSalary <= salaryTo) {
                           return el;   }
            });
     
       } 
      
       
        computeBudget (): number {
        return this._Employees.reduce ((res, cur) => 
        res = res + this.totalSalaryEmployee(cur), 0)
       }

      private totalSalaryEmployee (employye: EmployeeObg): number {
       return employye.basicSalary + employye.hours * employye.wage + 
              (employye.salesValue * employye.percentValue) / 100;
      }
}