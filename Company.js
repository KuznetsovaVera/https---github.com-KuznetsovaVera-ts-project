"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(_Employees) {
        this._Employees = _Employees;
    }
    addEmployee(employee) {
        if (!this._Employees.find(emp => employee.id === emp.id))
            this._Employees.push(employee);
    }
    removeEmployee(id) {
        let idTrue = true;
        let index = this._Employees.findIndex(el => el.id === id);
        index === -1 ? idTrue = false : this._Employees.splice(index, 1);
        return idTrue;
    }
    getEmployee(id) {
        {
            let index = this._Employees.findIndex(el => el.id === id);
            return index == -1 ? null : this._Employees[index];
        }
    }
    // SALARY!!!
    getEmployeeBySalary(salaryFrom, salaryTo) {
        let empBySalary = this._Employees.filter(el => {
            let curSalary = el.computeSalary();
            return curSalary >= salaryFrom && curSalary <= salaryTo;
        });
        return empBySalary.sort((empl1, empl2) => empl1.birthYear > empl2.birthYear ? 1 : -1);
    }
    computeBudget() {
        return this._Employees.reduce((res, cur) => res = res + cur.computeSalary(), 0);
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map