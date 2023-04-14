describe("Soma de valores", function(){

    var resultado = "";

    beforeEach(function(){
        resultado = new soma(2,3);
    });

    describe("Nivel Calculo", function(){

        it("soma", function(){

            expect(resultado.adicao()).toEqual(5);

        });

    });

});