"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(_Employees) {
        this._Employees = _Employees;
    }
    get Employees() {
        return this._Employees;
    }
    addEmployee(employee) {
        this._Employees.push(employee);
    }
    removeEmployee(id) {
        let idTrue = true;
        let index = this._Employees.findIndex(el => el.id === id);
        //console.log ("2.emp:", index)
        index === -1 ? idTrue = false : this._Employees.splice(index, 1);
        //console.log ("3.",idTrue, index)
        return idTrue;
    }
    getEmployee(id) {
        {
            let index = this._Employees.findIndex(el => el.id === id);
            //RETURN WHAT??? NULL - ERROR
            // index === -1 ? return null: return index;
            return index;
        }
    }
    // ERROR ??? SALARY!!!
    getEmployeeBySalary(salaryFrom, salaryTo) {
        return this._Employees.filter(el => {
            let curSalary = this.totalSalaryEmployee(el);
            if (curSalary >= salaryFrom && curSalary <= salaryTo) {
                return el;
            }
        });
    }
    computeBudget() {
        return this._Employees.reduce((res, cur) => res = res + this.totalSalaryEmployee(cur), 0);
    }
    totalSalaryEmployee(employye) {
        return employye.basicSalary + employye.hours * employye.wage +
            (employye.salesValue * employye.percentValue) / 100;
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map