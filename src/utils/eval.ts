export function evaluateExpression(expression: string): number {
  const calculate = new Function('return ' + expression);
  const result = calculate();
  return result;
}
