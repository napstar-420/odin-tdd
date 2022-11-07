function reverseString(str) {
    return [...str.split("").reverse()].join("");
}

const str = reverseString('test');
str;

module.exports = reverseString;