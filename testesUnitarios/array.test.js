const encontrarIndice = require('../testesUnitarios/array');

test("Deve encontgrar o índice do maior e menor valor no array", ()=> {
    let array = [100, 58, 66, 99, 1]
    let {indiceMaior, indiceMenor} = encontrarIndice(array);
    
    expect(indiceMaior).toBe(0)
    expect(indiceMenor).toBe(4)
})