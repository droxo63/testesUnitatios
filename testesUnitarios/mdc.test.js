///

const calculaMdc = require('../testesUnitarios/mdc');


test('calcular MDC de 81 e 27', () => {
     const resultado = calculaMdc(81, 27)
        expect(resultado).toBe(27)
});
