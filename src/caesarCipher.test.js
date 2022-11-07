import caesarCipher from './caesarCipher'

test('Simple Text', () => {
    expect(caesarCipher("Good old days", 5)).toBe("ltti tqi ifdx");
});

test('0 offset', () => {
    expect(caesarCipher("Good old days", 0)).toBe("Good old days");
});

test('with numbers', () => {
    expect(caesarCipher("Good old days 123", 5)).toBe("ltti tqi ifdx 123");
});

test('offset less than 0', () => {
    expect(() => caesarCipher("Good old days 123", -5)).toThrow('Offset can\'t be less than 0 or greater than 26');
});

test('all alphabets', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 2)).toBe('cdefghijklmnopqrstuvwxyzab');
})