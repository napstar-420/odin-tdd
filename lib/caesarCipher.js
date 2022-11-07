"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = caesarCipher;
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
function caesarCipher(text, offset) {
  if (offset > 0 && offset < 27) {
    var lowerCaseText = text;
    var textArr = lowerCaseText.toLowerCase().split("");
    for (var i = 0; i < text.length; i++) {
      if (/^[a-zA-Z]+$/g.test(text[i])) {
        var letterIndex = alphabet.indexOf(textArr[i]);
        if (letterIndex + offset < 26) {
          console.log(textArr[i]);
          textArr[i] = alphabet[letterIndex + offset];
        } else {
          var fromStart = letterIndex + offset - 26;
          textArr[i] = alphabet[fromStart];
        }
      }
    }
    return textArr.join("");
  } else if (offset === 0) {
    return text;
  } else {
    throw new Error('Offset can\'t be less than 0 or greater than 26');
  }
}