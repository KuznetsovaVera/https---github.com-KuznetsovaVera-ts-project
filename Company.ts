import { Employee } from "./Employee";

export class Company {
 
   constructor (private _Employees: Array<Employee>) {

       }
       
    addEmployee (employee: Employee): void
       { 
          if (!this._Employees.find (emp => employee.id === emp.id))
          this._Employees.push(employee);
                
       }
       removeEmployee(id: number): boolean
       {
         let idTrue: boolean = true;
         let index: number =
            this._Employees.findIndex(el => el.id === id);
        index === -1 ? idTrue = false : this._Employees.splice (index, 1);
        return idTrue;
       }
       getEmployee(id: number): Employee | null {
        {
         let index: number  = 
              this._Employees.findIndex (el => 
               el.id === id);
           return index ==-1 ? null : this._Employees[index];
          }

       }
       // SALARY!!!
       
       getEmployeeBySalary(salaryFrom: number, salaryTo: number): Array<Employee> {
      let empBySalary: Array<Employee> = this._Employees.filter (el => {
            let curSalary = el.computeSalary(); 
            return curSalary >=salaryFrom && curSalary <= salaryTo 
          }   );
       return empBySalary.sort ((empl1, empl2) => empl1.birthYear > empl2.birthYear ? 1 : -1)
       } 
      
       
        computeBudget (): number {
        return this._Employees.reduce ((res, cur) => 
            res = res + cur.computeSalary(),0)
       }

}