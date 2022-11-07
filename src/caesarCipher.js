const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export default function caesarCipher(text, offset) {
    if (offset > 0 && offset < 27) {
        const lowerCaseText = text;
        const textArr = lowerCaseText.toLowerCase().split("");
        for (let i = 0; i < text.length; i++) {
            if (/^[a-zA-Z]+$/g.test(text[i])) {
                const letterIndex = alphabet.indexOf(textArr[i]);
                if (letterIndex + offset < 26) {
                    console.log(textArr[i]);
                    textArr[i] = alphabet[letterIndex + offset];
                } else {
                    const fromStart = (letterIndex + offset) - 26;
                    textArr[i] = alphabet[fromStart];
                }
            }
        }
        return textArr.join("");
    } else if (offset === 0) {
        return text;
    } else {
        throw new Error('Offset can\'t be less than 0 or greater than 26')
    }
}