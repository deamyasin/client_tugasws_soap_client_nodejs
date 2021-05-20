"use strict";
// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/example-soap-calculator
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'calculator',
    // A workaround for the current design flaw where inside our monorepo,
    //  packages/service-proxy/node_modules/loopback-datasource-juggler cannot
    //  see/load the connector from examples/soap/node_modules/loopback-connector-soap
    //  as explained in todo example
    connector: require('loopback-connector-soap'),
    // url: 'http://localhost:8080/CalculatorSoapTugasWS/services/CalculatorImpl',
    url: 'http://localhost:7251/wstugas/services/CalculatorImpl',
    wsdl: 'http://localhost:7251/wstugas/services/CalculatorImpl?wsdl',
    // wsdl:'http://localhost:8080/CalculatorSoapTugasWS/services/CalculatorServer?wsdl',
    remotingEnabled: true,
    operations: {
        multiply: {
            service: 'CalculatorService',
            port: 'CalculatorPort',
            operation: 'Multiply',
        },
        add: {
            service: 'CalculatorService',
            port: 'CalculatorPort',
            operation: 'Add',
        },
        subtract: {
            service: 'CalculatorService',
            port: 'CalculatorPort',
            operation: 'Subtract',
        },
        divide: {
            service: 'CalculatorService',
            port: 'CalculatorPort',
            operation: 'Divide',
        },
    },
};
let CalculatorDataSource = class CalculatorDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
CalculatorDataSource.dataSourceName = 'calculator';
CalculatorDataSource.defaultConfig = config;
CalculatorDataSource = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.config.calculator', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], CalculatorDataSource);
exports.CalculatorDataSource = CalculatorDataSource;
//# sourceMappingURL=calculator.datasource.js.map