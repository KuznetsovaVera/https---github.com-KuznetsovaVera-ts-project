"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalesPerson_1 = require("./SalesPerson");
const WageEmployee_1 = require("./WageEmployee");
const Company_1 = require("./Company");
const employee = new WageEmployee_1.WageEmployee(123, "Vasya", 2001, "QA", 10000, 100, 50);
console.log(employee.id);
//employee.basicSalary = 60000;
// check: this._hours= hours - neseccary
employee.hours = 150;
console.log(employee.hours);
const employee2 = new SalesPerson_1.SalesPerson(124, "Petya", 2002, "QA", 12000, 100, 60, 1000, 10);
console.log(employee2.percentValue);
console.log(employee2.computeSalary());
const employee3 = new SalesPerson_1.SalesPerson(125, "Vova", 1990, "QA", 13000, 100, 50, 1000, 20);
const employee4 = new WageEmployee_1.WageEmployee(126, "Rivka", 2000, "QA", 15000, 100, 50);
const company = new Company_1.Company([]);
// TEST addEmployee
company.addEmployee(employee);
company.addEmployee(employee2);
company.addEmployee(employee);
console.log("1. add Employee:", company); //print:Array(2)
company.addEmployee(employee3);
company.addEmployee(employee4);
//TEST REMOVE EMPLOYEE
console.log(`2.1 remove Employee (124): ${company.removeEmployee(124)}`);
console.log(`2.2 remove Employee (127): ${company.removeEmployee(127)}`);
console.log("2.3 remove Employee: ", company); //print:Array(3) - OK
// TEST GET EMPLOYEE
console.log("3.1 get Employee (yes):", company.getEmployee(123));
console.log("3.2 get Employee (no):", company.getEmployee(127));
// TEST EMPLOYEES BY SALARY
const empBySal = company.getEmployeeBySalary(1000, 24000);
empBySal.forEach(el => console.log("4 Employees by Salary", el));
// TEST BUDGET
console.log("5. total salary:", company.computeBudget());
//# sourceMappingURL=main.js.map