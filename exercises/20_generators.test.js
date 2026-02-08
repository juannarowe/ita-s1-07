test('20_generators-1: should yield objects with value and done properties', () => {
  const odds = giveMeOneOddNumber()

  // 1. Primer valor: 1
  expect(odds.next().value).toBe(1)
  
  // 2. Segundo valor: 3
  expect(odds.next().value).toBe(3)
  
  // 3. Tercer valor: 5 (En tu captura faltaba este expect)
  expect(odds.next().value).toBe(5)
  
  // 4. El test comprueba si ha terminado (done) tras el 5
  expect(odds.next().done).toBe(false) // Esto consume el 7

  // 5. El siguiente valor después de consumir el 7 será el 9
  expect(odds.next().value).toBe(9)
  
  // 6. Ahora sí, ya no quedan más números
  expect(odds.next().done).toBe(true)

  function* giveMeOneOddNumber() {
    yield 1
    yield 3
    yield 5
    yield 7
    yield 9
  }
})

test('20_generators-2: can be iterated over', () => {
  function* giveMeOneEvenNumber() {
    yield 2
    yield 4
    yield 6
    yield 8
  }

  let sum = 0
  for (let even of giveMeOneEvenNumber()) {
    sum = sum + even
  }

  // Suma: 2 + 4 + 6 + 8 = 20
  expect(sum).toBe(20)
})