module.exports = function(tokens) {

    var current = 0;

    function walk() {

        var token = tokens[current];
        //console.log(token);

        if (token.type === 'number') {

            // If we have one, we'll increment `current`.
            current++;

            // And we'll return a new AST node called `NumberLiteral` and setting its
            // value to the value of our token.
            return {
                type: 'NumberLiteral',
                value: token.value
            };
        }

        if (tokens[current + 1] != undefined) {

            if (token.type === 'paren' &&
                token.value === '(') {
                //
                token = tokens[++current];
                var node = {
                    type: 'CallExpression',
                    name: token.value,
                    params: []
                };
                token = tokens[++current];

                while (
                    (token.type !== 'paren') ||
                    (token.type === 'paren' && token.value !== ')')
                ) {
                    // we'll call the `walk` function which will return a `node` and we'll
                    // push it into our `node.params`.
                    node.params.push(walk());
                    token = tokens[current];
                }
                current++;
                return node;
            }
        }
    }

    var ast = {
        type: 'Program',
        body: []
    };

    while (current < tokens.length) {
        ast.body.push(walk());
    }
    return ast;
}
