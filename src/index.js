const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [],
        temp = '';
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i,i + 10));
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === '**********') {
            arr[j] = ' ';
        } else {
            temp = '';
           for (let k = 0; k < arr[j].length; k += 2) {
              if (arr[j].slice(k, k + 2) === '10') {
                  temp += '.';
              } else if (arr[j].slice(k, k + 2) === '11') {
                  temp += '-';
              }
           }
           arr[j] = temp;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != ' ') {
            arr[i] = MORSE_TABLE[arr[i]];
        }
    }
    return arr.join('');
}

module.exports = {
    decode
}