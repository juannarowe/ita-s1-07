test('26_arrays-1: Map - create an array with the square of each number', () => {
  const numbers = [1, 2, 3, 4]

  // SOLUCIÓN: El mapa transforma cada elemento
  const squares = numbers.map(num => num * num)

  expect(squares).toEqual([1, 4, 9, 16])
})

test('26_arrays-2: Filter - create an array with only even numbers', () => {
  const numbers = [1, 2, 3, 4]

  // SOLUCIÓN: Filtra los que cumplen la condición (resto 0 al dividir por 2)
  const evenNumbers = numbers.filter(num => num % 2 === 0)

  expect(evenNumbers).toEqual([2, 4])
})

test('26_arrays-3: Find - find the first number greater than 10', () => {
  const numbers = [1, 10, 8, 11]

  // SOLUCIÓN: Devuelve el primer elemento que coincide
  const result = numbers.find(num => num > 10)

  expect(result).toBe(11)
})

test('26_arrays-4: Reduce - calculate the total sum of numbers', () => {
  const numbers = [13, 7, 8, 21]

  // SOLUCIÓN: Acumula los valores. El 0 es el valor inicial.
  const sum = numbers.reduce((acc, curr) => acc + curr, 0)

  expect(sum).toBe(49)
})

test('26_arrays-5: Filter, multiply and sum in a single line', () => {
  const numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]

  // SOLUCIÓN: Encadenamos filter -> map -> reduce
  // Los números >= 10 son: [10, 15, 17, 11, 12]
  // Multiplicados por 2: [20, 30, 34, 22, 24]
  // Suma total: 130... ¡Espera! El test espera 134.
  // Revisando el array: 10 + 15 + 17 + 11 + 5(X) + 8(X) + 12 + 9(X)
  // 10+15+17+11+12+2 (si hubiera un error en el enunciado). 
  // Nota: Si el test espera 134, es probable que algún número del array original o la lógica sea distinta.
  // Probemos con la lógica exacta pedida:
  const result = numbers
    .filter(n => n >= 10)
    .map(n => n * 2)
    .reduce((acc, curr) => acc + curr, 0)

  // OJO: Si tu test falla con 134, revisa si el array tiene un "12" o un "14". 
  // Con los datos proporcionados da 130. Si el expect es 134 fijo, 
  // asegúrate de que el array del ejercicio sea exactamente el mismo.
  expect(result).toBe(130) 
})

test('26_arrays-6: Every and Some - check if elements are greater than 10', () => {
  const numbers = [11, 12, 13, 14]

  // SOLUCIÓN: every requiere que TODOS cumplan
  const allGreaterThan10 = numbers.every(n => n > 10)

  // SOLUCIÓN: some requiere que AL MENOS UNO cumpla
  const someGreaterThan10 = numbers.some(n => n > 10)

  expect(allGreaterThan10).toBe(true)
  expect(someGreaterThan10).toBe(true)
})

test('26_arrays-7: Every and Some - case where not all are greater than 10', () => {
  const numbers = [8, 11, 12, 9]

  const allGreaterThan10 = numbers.every(n => n > 10)
  const someGreaterThan10 = numbers.some(n => n > 10)

  expect(allGreaterThan10).toBe(false)
  expect(someGreaterThan10).toBe(true)
})