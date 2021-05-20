"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: @loopback/example-soap-calculator
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const calculator_service_1 = require("../../../services/calculator.service");
const helpers_1 = require("../../helpers");
describe('CalculatorService', function () {
    let calculatorService;
    // The calculator soap server is hosted in the cloud and it takes some time
    // to wake up and respond to api requests
    this.timeout(30000);
    before(givenACalculatorService);
    it('adds two numbers', async () => {
        const response = await calculatorService.add({
            intA: 50,
            intB: 2,
        });
        testlab_1.expect(response.result.value).to.deepEqual(52);
    });
    it('subtracts two numbers', async () => {
        const response = await calculatorService.subtract({
            intA: 40,
            intB: 20,
        });
        testlab_1.expect(response.result.value).to.deepEqual(20);
    });
    it('multiplies two numbers', async () => {
        const response = await calculatorService.multiply({
            intA: 50,
            intB: 2,
        });
        testlab_1.expect(response.result.value).to.deepEqual(100);
    });
    it('divides two numbers', async () => {
        const response = await calculatorService.divide({
            intA: 100,
            intB: 4,
        });
        testlab_1.expect(response.result.value).to.deepEqual(25);
    });
    async function givenACalculatorService() {
        const calculatorDataSource = await helpers_1.givenAConnectedDataSource();
        calculatorService = await new calculator_service_1.CalculatorServiceProvider(calculatorDataSource).value();
    }
});
//# sourceMappingURL=calculator.service.integration.js.map