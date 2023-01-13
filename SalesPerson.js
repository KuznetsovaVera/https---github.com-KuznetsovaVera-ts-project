"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesPerson = exports.MAX_PERCENT = exports.MIN_PERCENT = exports.MAX_SALES_VALUE = exports.MIN_SALES_VALUE = void 0;
const WageEmployee_1 = require("./WageEmployee");
exports.MIN_SALES_VALUE = 0;
exports.MAX_SALES_VALUE = 50000;
exports.MIN_PERCENT = 0;
exports.MAX_PERCENT = 100;
class SalesPerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _salesValue, _percentValue) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._salesValue = _salesValue;
        this._percentValue = _percentValue;
    }
    get salesValue() {
        return this._salesValue;
    }
    set salesValue(salesValue) {
        if (salesValue < exports.MIN_SALES_VALUE || salesValue > exports.MAX_SALES_VALUE) {
            throw `wrong wage value must be in range [${exports.MIN_SALES_VALUE}-${exports.MAX_SALES_VALUE}]`;
        }
        this._salesValue = salesValue;
    }
    get percentValue() {
        return this._percentValue;
    }
    set percentValue(percentValue) {
        if (percentValue < exports.MIN_PERCENT || percentValue > exports.MAX_PERCENT) {
            throw `wrong wage value must be in range [${exports.MIN_PERCENT}-${exports.MAX_PERCENT}]`;
        }
        this._percentValue = percentValue;
    }
    computeSalary() {
        return super.computeSalary() + this._salesValue * this._percentValue / 100;
    }
}
exports.SalesPerson = SalesPerson;
//# sourceMappingURL=SalesPerson.js.map