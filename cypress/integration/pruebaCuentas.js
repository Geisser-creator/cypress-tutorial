//group of testcases
describe('Cuentas', function(){  //this function contains all test ases
    var a =1+1;
    var b = 2;
    it('Vamos a ver que se sume bien', function(){
        expect(a==b).to.equal(true);
    });
    it('Vamos a ver que reste bien', function(){
        expect(a-b).to.equal(0);
    })
})