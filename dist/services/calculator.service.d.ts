import { juggler } from '@loopback/service-proxy';
import { Provider } from '@loopback/core';
export interface MultiplyResponse {
    result: {
        value: number;
    };
}
export interface AddResponse {
    result: {
        value: number;
    };
}
export interface SubtractResponse {
    result: {
        value: number;
    };
}
export interface DivideResponse {
    result: {
        value: number;
    };
}
export interface CalculatorParameters {
    intA: number;
    intB: number;
}
export interface CalculatorService {
    multiply(args: CalculatorParameters): Promise<MultiplyResponse>;
    add(args: CalculatorParameters): Promise<AddResponse>;
    divide(args: CalculatorParameters): Promise<DivideResponse>;
    subtract(args: CalculatorParameters): Promise<SubtractResponse>;
}
export declare class CalculatorServiceProvider implements Provider<CalculatorService> {
    protected dataSource: juggler.DataSource;
    constructor(dataSource?: juggler.DataSource);
    value(): Promise<CalculatorService>;
}
