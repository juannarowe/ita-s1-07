test('20_generators-1: can create a generator', () => {
  // SOLUCIÓN: Definimos la función dentro del test para evitar ReferenceError
  function* myGenerator() {
    yield 1
    yield 2
    yield 3
  }

  const iterator = myGenerator()
  expect(iterator.next().value).toBe(1)
  expect(iterator.next().value).toBe(2)
  expect(iterator.next().value).toBe(3)
  expect(iterator.next().done).toBe(true)
})

test('20_generators-2: generators can yield results of other generators', () => {
  function* g1() {
    yield 1
    yield 2
  }
  
  function* g2() {
    // SOLUCIÓN: Delegamos con yield*
    yield* g1()
    yield 3
  }

  const iterator = g2()
  expect(iterator.next().value).toBe(1)
  expect(iterator.next().value).toBe(2)
  expect(iterator.next().value).toBe(3)
  expect(iterator.next().done).toBe(true)
})

test('20_generators-3: can send values to generators', () => {
  function* pricing() {
    // El primer yield devuelve la pregunta y espera el precio
    const price = yield 'What is the price?'
    // El segundo yield devuelve la pregunta y espera la cantidad
    const quantity = yield 'What is the quantity?'
    yield price * quantity
  }

  const iterator = pricing()
  
  // 1. Arrancamos el generador
  expect(iterator.next().value).toBe('What is the price?')
  // 2. Enviamos 10 (price) y recibimos la siguiente pregunta
  expect(iterator.next(10).value).toBe('What is the quantity?')
  // 3. Enviamos 2 (quantity) y recibimos el cálculo final
  expect(iterator.next(2).value).toBe(20)
})