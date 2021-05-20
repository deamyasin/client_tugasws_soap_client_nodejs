import { juggler } from '@loopback/repository';
export declare class CalculatorDataSource extends juggler.DataSource {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: any;
        url: string;
        wsdl: string;
        remotingEnabled: boolean;
        operations: {
            multiply: {
                service: string;
                port: string;
                operation: string;
            };
            add: {
                service: string;
                port: string;
                operation: string;
            };
            subtract: {
                service: string;
                port: string;
                operation: string;
            };
            divide: {
                service: string;
                port: string;
                operation: string;
            };
        };
    };
    constructor(dsConfig?: object);
}
