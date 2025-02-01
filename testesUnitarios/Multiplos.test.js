
const somaMultiplos = require('../testesUnitarios/Multiplos');

test('somar todos os múltiplos de 5 e 7 até 1000', () => {
  // Chama a função
  const resultado = somaMultiplos();
  const somaEsperada = 156361;
  expect(resultado).toBe(somaEsperada);
});
