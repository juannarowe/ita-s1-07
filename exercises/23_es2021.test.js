test('23_es2021-1: Logical assignment operators (&&=, ||=, ??=)', () => {
  // Utilitza els operadors d'assignació lògica (&&=, ||=, ??=) per modificar les variables a, b i c.
  let a = true
  let b = false
  let c = null

  // SOLUCIÓN:
  // a &&= 'assigned' -> Si 'a' es truthy, se le asigna el nuevo valor.
  a &&= 'assigned'
  
  // b ||= 'default'  -> Si 'b' es falsy (como false), se le asigna el valor.
  b ||= 'default'
  
  // c ??= 'fallback' -> Si 'c' es null o undefined (nullish), se le asigna el valor.
  c ??= 'fallback'

  expect(a).toBe('assigned')
  expect(b).toBe('default')
  expect(c).toBe('fallback')
})

test('23_es2021-2: Numeric separators improve readability', () => {
  // SOLUCIÓN: Usamos guiones bajos (_) para separar los miles. 
  // JS los ignora al procesar, pero para nosotros es más fácil leerlo.
  const largeNumber = 1_000_000

  expect(largeNumber).toBe(1000000)
})

test('23_es2021-3: Promise.any returns the first resolved promise', async () => {
  const promises = [
    Promise.reject('Error'),
    Promise.resolve('First resolved'),
    Promise.resolve('Second resolved'),
  ]

  // SOLUCIÓN: Promise.any ignora los rechazos y se queda con la primera que tenga éxito.
  const result = await Promise.any(promises)

  expect(result).toBe('First resolved')
})