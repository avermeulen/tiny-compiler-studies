'use strict;'

module.exports = function(code){
    var current = 0,
        tokens = [];

    const LETTERS = /[a-z]/i;
    const NUMBERS = /[0-9]/i;
    const WHITESPACE = / /i;

    while (current < code.length){

        var token = code[current];

        if (token === '(' || token === ')'){
            tokens.push({
                type : 'paren',
                value : token
            })
            current++;

            continue;
        }

        if(LETTERS.test(token)){
            var command = '';
            while(LETTERS.test(token)){
                command += token;
                current++;
                token = code[current];
            }
            tokens.push({
                type : 'name',
                value : command
            })
            continue;
        }

        if(NUMBERS.test(token)){
            var value = '';

            while(NUMBERS.test(token)){
                value += token;
                current++;
                token = code[current];
            }
            tokens.push({
                type : 'number',
                value : value
            })
            continue;
        }

        if (WHITESPACE.test(token)){
            current++;
            continue;
        }

        throw new TypeError('Unknown token : ' + token);

    }

    return tokens;
}
