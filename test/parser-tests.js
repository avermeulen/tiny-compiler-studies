const Parser = require('../parser');
const assert = require('assert');

describe('the Parser', () => {

    var tokens = [
          { type: 'paren',  value: '('        },
          { type: 'name',   value: 'add'      },
          { type: 'number', value: '2'        },
          { type: 'paren',  value: '('        },
          { type: 'name',   value: 'subtract' },
          { type: 'number', value: '4'        },
          { type: 'number', value: '2'        },
          { type: 'paren',  value: ')'        }, //<<< Closing parenthesis
          { type: 'paren',  value: ')'        }  //<<< Closing parenthesis
      ];

      var tokens2 = [
            { type: 'paren',  value: '('        },
            { type: 'name',   value: 'add'      },
            { type: 'number', value: '2'        },
            { type: 'number', value: '4'        },
            { type: 'paren', value: ')'        },
            { type: 'paren',  value: '('        },
            { type: 'name',   value: 'subtract' },
            { type: 'number', value: '4'        },
            { type: 'number', value: '2'        },
            { type: 'paren',  value: ')'        }  //<<< Closing parenthesis
        ];

    it('should ...ß', () => {


        var ast = new Parser(tokens);
        assert.equal(ast.body.length, 1);

        //console.log(JSON.stringify(parser));

    });

    it('should ...ß', () => {


        var ast = new Parser(tokens2);
        //console.log(JSON.stringify(parser));
        assert.equal(ast.body.length, 2);

    });

});
