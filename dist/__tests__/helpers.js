"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/example-soap-calculator
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.givenAConnectedDataSource = void 0;
const calculator_datasource_1 = require("../datasources/calculator.datasource");
async function givenAConnectedDataSource() {
    const calculatorDataSource = new calculator_datasource_1.CalculatorDataSource();
    await calculatorDataSource.connect();
    return calculatorDataSource;
}
exports.givenAConnectedDataSource = givenAConnectedDataSource;
//# sourceMappingURL=helpers.js.map