/**
 * An example _calculator_.
 */
export class Calculator {
    private current = 0;
    private memory = 0;
    private operator: string;
    
    protected processDigit(digit: string, currentValue: number) {
      if (digit >= "0" && digit <= "9") {
        return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
      }
    }
    protected processOperator(operator: string) {
      if (["+", "-", "*", "/"].indexOf(operator) >= 0) {
        return operator;
      }
    }
    protected evaluateOperator(
      operator: string,
      left: number,
      right: number
    ): number {
      switch (operator) {
        case "+":
          return left + right;
        case "-":
          return left - right;
        case "*":
          return left * right;
        case "/":
          return left / right;
      }
      return 0;
    }
    private evaluate() {
      if (this.operator) {
        this.memory = this.evaluateOperator(
          this.operator,
          this.memory,
          this.current
        );
      } else {
        this.memory = this.current;
      }
      this.current = 0;
    }
    public handleChar(char: string) {
      if (char === "=") {
        this.evaluate();
        return;
      } else {
        let value = this.processDigit(char, this.current);
        if (value !== undefined) {
          this.current = value;
          return;
        } else {
          let value = this.processOperator(char);
          if (value !== undefined) {
            this.evaluate();
            this.operator = value;
            return;
          }
        }
      }
      throw new Error(`Unsupported input: '${char}'`);
    }
    public getResult() {
      return this.memory;
    }
  }

  class  NamedType {
    name: string;
  }

  export function test(c: Calculator, input: string) {
    
    if (c instanceof NamedType) {
        console.log(`Testing with calculator type '${c.name || typeof c}'`);
    }

    const inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
      c.handleChar(input[i]);
    }
    console.log(`result of '${input}' is '${c.getResult()}'`);
  }