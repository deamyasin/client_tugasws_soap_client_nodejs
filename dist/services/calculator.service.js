"use strict";
// Copyright IBM Corp. 2018,2019. All Rights Reserved.
// Node module: @loopback/example-soap-calculator
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorServiceProvider = void 0;
const tslib_1 = require("tslib");
const service_proxy_1 = require("@loopback/service-proxy");
const core_1 = require("@loopback/core");
const calculator_datasource_1 = require("../datasources/calculator.datasource");
let CalculatorServiceProvider = class CalculatorServiceProvider {
    constructor(dataSource = new calculator_datasource_1.CalculatorDataSource()) {
        this.dataSource = dataSource;
    }
    value() {
        return service_proxy_1.getService(this.dataSource);
    }
};
CalculatorServiceProvider = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.calculator')),
    tslib_1.__metadata("design:paramtypes", [service_proxy_1.juggler.DataSource])
], CalculatorServiceProvider);
exports.CalculatorServiceProvider = CalculatorServiceProvider;
//# sourceMappingURL=calculator.service.js.map