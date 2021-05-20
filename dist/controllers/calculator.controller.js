"use strict";
// Copyright IBM Corp. 2018,2019. All Rights Reserved.
// Node module: @loopback/example-soap-calculator
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
let CalculatorController = class CalculatorController {
    constructor(calculatorService) {
        this.calculatorService = calculatorService;
    }
    async multiply(intA, intB) {
        return this.calculatorService.multiply({
            intA,
            intB,
        });
    }
    async add(intA, intB) {
        return this.calculatorService.add({
            intA,
            intB,
        });
    }
    async subtract(intA, intB) {
        return this.calculatorService.subtract({
            intA,
            intB,
        });
    }
    async divide(intA, intB) {
        //Preconditions
        if (intB === 0) {
            throw new rest_1.HttpErrors.PreconditionFailed('Cannot divide by zero');
        }
        return this.calculatorService.divide({
            intA,
            intB,
        });
    }
};
tslib_1.__decorate([
    rest_1.get('/multiply/{intA}/{intB}'),
    tslib_1.__param(0, rest_1.param.path.integer('intA')),
    tslib_1.__param(1, rest_1.param.path.integer('intB')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CalculatorController.prototype, "multiply", null);
tslib_1.__decorate([
    rest_1.get('/add/{intA}/{intB}'),
    tslib_1.__param(0, rest_1.param.path.integer('intA')),
    tslib_1.__param(1, rest_1.param.path.integer('intB')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CalculatorController.prototype, "add", null);
tslib_1.__decorate([
    rest_1.get('/subtract/{intA}/{intB}'),
    tslib_1.__param(0, rest_1.param.path.integer('intA')),
    tslib_1.__param(1, rest_1.param.path.integer('intB')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CalculatorController.prototype, "subtract", null);
tslib_1.__decorate([
    rest_1.get('/divide/{intA}/{intB}'),
    tslib_1.__param(0, rest_1.param.path.integer('intA')),
    tslib_1.__param(1, rest_1.param.path.integer('intB')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CalculatorController.prototype, "divide", null);
CalculatorController = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('services.CalculatorService')),
    tslib_1.__metadata("design:paramtypes", [Object])
], CalculatorController);
exports.CalculatorController = CalculatorController;
//# sourceMappingURL=calculator.controller.js.map