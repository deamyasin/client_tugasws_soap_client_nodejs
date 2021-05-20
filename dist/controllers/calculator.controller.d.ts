import { AddResponse, CalculatorService, DivideResponse, MultiplyResponse, SubtractResponse } from '../services/calculator.service';
export declare class CalculatorController {
    protected calculatorService: CalculatorService;
    constructor(calculatorService: CalculatorService);
    multiply(intA: number, intB: number): Promise<MultiplyResponse>;
    add(intA: number, intB: number): Promise<AddResponse>;
    subtract(intA: number, intB: number): Promise<SubtractResponse>;
    divide(intA: number, intB: number): Promise<DivideResponse>;
}
