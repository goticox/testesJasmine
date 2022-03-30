var hello = require('../hello');
// suit case 1:
describe('Teste Hello', function(){
    it ('Espera-se que ocorra o print do texto "Hello World"', function(){
        var texto = hello();
        expect(texto).toEqual('Hello World'); // Matcher
    })
})
// end suit case: 1