describe("Suíte de testes do toBe", function () {

    var valorBooleano = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = { 'valor': valorBooleano };
    var obj2 = { 'valor': valorBooleano };
//===valor e tipo quem faz é (toBe) e == apenas compara valores quem faz é (toEqual)
    it("deve validar o uso do matcher 'toBe'", function () {
        expect(valorBoleano).toBe(true);
        expect(valorBoleanoCopia).toBe(valorBooleano);
        expect(valorBoleano).not.toBe(valorBooleanoTexto);
        expect(valorBooleanoTexto).toBe("true");
        expect(obj1).not.toBe(obj2);

    });
});

describe("Suite de testes do toEqual", function(){

    var valorBooleano = true;
    var valorBooleano2 = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = { 'valor': valorBooleano };
    var obj2 = { 'valor': valorBooleano };

    it("deve validar o uso do matcher 'toEqual'",function() {
        expect(valorBoleano).toEqual(true);
        expect(valorBoleano).toEqual(valorBooleano2);
        expect(valorBoleanoCopiar).toEqual(valorBooleano);
        expect(valorBoleano).not.toEqual(valorBooleanoTexto);
        expect(valorBooleanoTexto).toEqual("true");
        expect(obj1).not.toEqual(obj2);
    });

});


