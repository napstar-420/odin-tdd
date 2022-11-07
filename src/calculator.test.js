import calculator from './calculator';

test('add(4, 2) is 8', () => {
    expect(calculator.add(4, 2)).toBe(6);
});

test('add(-4, 2) is -2', () => {
    expect(calculator.add(-4, 2)).toBe(-2);
});

test('add(0.5, 0.2) is 0.7', () => {
    expect(calculator.add(0.5, 0.2)).toBe(0.7);
});

test('subtract(4, 2) is 2', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test('subtract(-4, 2) is -6', () => {
    expect(calculator.subtract(-4, 2)).toBe(-6);
});

test('subtract(0.5, 0.2) is 0.3', () => {
    expect(calculator.subtract(0.5, 0.2)).toBe(0.3);
});

test('divide(4, 2) is 2', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test('divide(-4, 2) is -2', () => {
    expect(calculator.divide(-4, 2)).toBe(-2);
});

test('divide(0.5, 0.2) is 2.5', () => {
    expect(calculator.divide(0.5, 0.2)).toBe(2.5);
});

test('multiply(4, 2) is 8', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
});

test('multiply(-4, 2) is -8', () => {
    expect(calculator.multiply(-4, 2)).toBe(-8);
});

test('multiply(0.5, 0.2) is 0.1', () => {
    expect(calculator.multiply(0.5, 0.2)).toBe(0.1);
});