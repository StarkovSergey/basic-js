const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    const messageString = message.toUpperCase();
    const keyString = key.toUpperCase();
    let keyIndex = 0;
    let cryptString = '';

    for (let i = 0; i < message.length; i++) {
      let cryptLetter;
      if (this.alphabet.includes(messageString[i])) {
        const keyLetter = this.findKeyLetter(keyIndex, keyString);
        keyIndex++;
        cryptLetter = this.findCryptLetter(messageString[i], keyLetter);
      } else {
        cryptLetter = messageString[i];
      }

      cryptString += cryptLetter;
    }

    return this.applyDirection(cryptString);
  }

  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    const cryptString = string.toUpperCase();
    const keyString = key.toUpperCase();
    let keyIndex = 0;
    let decryptString = '';

    for (let i = 0; i < cryptString.length; i++) {
      let decryptLetter;
      if (this.alphabet.includes(cryptString[i])) {
        const keyLetter = this.findKeyLetter(keyIndex, keyString);
        keyIndex++;
        decryptLetter = this.findDecryptLetter(cryptString[i], keyLetter);
      } else {
        decryptLetter = cryptString[i];
      }
      decryptString += decryptLetter;
    }

    return this.applyDirection(decryptString);
  }

  applyDirection(string) {
    return this.direct ? string : string.split('').reverse().join('');
  }

  findKeyLetter(index, key) {
    let letterPosition = (index + 1) % key.length;
    if (letterPosition === 0) letterPosition = key.length;
    return key[letterPosition - 1];
  }

  findCryptLetter(messageLetter, keyLetter) {
    const indexMessageLetter = this.alphabet.indexOf(messageLetter);
    const indexKeyLetter = this.alphabet.indexOf(keyLetter);
    let indexCryptLetter = indexMessageLetter + indexKeyLetter;
    indexCryptLetter = indexCryptLetter > (this.alphabet.length - 1)
      ? indexCryptLetter - (this.alphabet.length)
      : indexCryptLetter;
    return this.alphabet[indexCryptLetter];
  }

  findDecryptLetter(cryptLetter, keyLetter) {
    const indexCryptLetter = this.alphabet.indexOf(cryptLetter);
    const indexKeyLetter = this.alphabet.indexOf(keyLetter);
    let indexDecryptLetter = indexCryptLetter - indexKeyLetter;
    indexDecryptLetter = indexDecryptLetter < 0
      ? indexDecryptLetter + this.alphabet.length
      : indexDecryptLetter;

    return this.alphabet[indexDecryptLetter];
  }
}

module.exports = {
  VigenereCipheringMachine
};
