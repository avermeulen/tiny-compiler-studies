const tokenizer = require('../tokenizer');
const assert = require('assert');

describe('The tokenizer', () => {

    it('should find the parens', () => {
        var tokens = tokenizer('(add 2 2)');
        assert.deepEqual(tokens.filter((t) => t.type === 'paren').length, 2);
    });

    it('should find the parens', () => {
        var tokens = tokenizer('(add 2 2)');
        assert.deepEqual(tokens.filter((t) => t.type === 'paren').length, 2);
    });

    it('should find the name', () => {
        var tokens = tokenizer('(add 2 2)');
        assert.deepEqual(tokens.filter((t) => t.type === 'name').length, 1);

        //
        const token = tokens.find((t) => t.type === 'name');
        assert.equal(token.type, 'name');
        assert.equal(token.value, 'add');
    });

    it('should find the numbers', () => {
        var tokens = tokenizer('(add 2 7)');
        var numberTokens = tokens.filter((t) => t.type === 'number');

        assert.deepEqual(numberTokens.length, 2);

        //
        //const numbers = tokens.find((t) => t.type === 'number');
        assert.equal(numberTokens[0].type, 'number');
        assert.equal(numberTokens[0].value, '2');
        //
        assert.equal(numberTokens[1].type, 'number');
        assert.equal(numberTokens[1].value, '7');

    });

    it('should break for invalid characters', () => {
        //var tokens = ;

        assert.throws(() => tokenizer('(add 2 7);'), 'Error: Unknown token : ;', 'Invalid tokens should throw an Error')


    });

});
