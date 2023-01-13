import { SalesPerson } from "./SalesPerson";
import { WageEmployee } from "./WageEmployee";
import { Company, EmployeeObg } from "./Company";
const employee: WageEmployee = new WageEmployee(123, "Vasya", 2000, "QA",
10000, 100,50);
console.log(employee.id);
//employee.basicSalary = 60000;
employee.hours = 150;
console.log(employee.hours)

const employee2: SalesPerson = new SalesPerson(123, "Vasya", 2000, "QA",
13000, 100, 50, 1000, 20);
console.log(employee2.percentValue);
console.log(employee2.computeSalary());

const emp1: EmployeeObg = 
{id: 123,
name: "Vasya",
basicSalary: 13000,
department: 'QA',
salesValue: 1000,
wage: 5,
hours: 2,
percentValue: 10,
birthYear: 2000};

const emp2: EmployeeObg = 
{id: 124,
name: "Petya",
basicSalary: 14000,
department: 'QA',
salesValue: 1000,
wage: 5,
hours: 2,
percentValue: 10,
birthYear: 2000};
const emp3: EmployeeObg = 
{id: 125,
name: "Vova",
basicSalary: 15000,
department: 'QA',
salesValue: 1000,
wage: 5,
hours: 2,
percentValue: 10,
birthYear: 2000};

const company: Company = new Company ([emp1, emp2]);
console.log("1. create -lenght:", company.Employees.length);
console.log ("2. remove 124:", company.removeEmployee(124), company.Employees);
console.log ("3. remove 125:", company.removeEmployee(125));
console.log ("4. add 125:", company.addEmployee(emp3), company);
company.Employees.forEach ((el, ind) => console.log (`index: ${ind}, employee: ${el}`));
// don't print element, only [object Object]
company.Employees.forEach ((el, ind) => console.log ("index: ", ind, el));

// print element
const ind: number = company.getEmployee(123)
console.log ("5. get 123 (0):", ind, company.Employees[ind]);
console.log ("6. get 126 (-1):", company.getEmployee(126));
console.log ("7. by salary:", company.getEmployeeBySalary(10000, 14000));
console.log ("8. total salary:", company.computeBudget(), company.Employees[0]);

//console.log (company.getEmployee(123))
    //what must return???

//console.log (company.addEmployee(emp1), company);
// undefined Company {Employees: Array(3)
// undefined correct - don't return

