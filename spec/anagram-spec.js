//tdd
var isAnagram = require('../anagram');

describe('Teste Anagram', function(){
    it('quando for verdadeiro "abc" e "cba"', function(){
        expect(isAnagram('abc','cba')).toEqual(true);
    })
    it('quando for verdadeiro "Amor" e "Roma"', function(){
        expect(isAnagram('amor','Roma')).toEqual(true);
    })
    it('se é verdade que existem duas strins vazias', function(){
        expect(isAnagram('','')).toEqual(true);
    })
    it('é verdade quando "132" é igual a "312"', function(){
        expect(isAnagram('132','312')).toEqual(true);
    })
    it('é verdade quando 0.12 é igual "102"', function(){
        expect(isAnagram(0.12,'102')).toEqual(true);
    })
    it('é falso quando 012 não é igual a 102', function(){
        expect(isAnagram(012,102)).toEqual(false);
    })

})