test('25_es2023-1: Array findLast and findLastIndex', () => {
  // Utilitza els mètodes findLast i findLastIndex per trobar l'últim número parell i el seu índex.
  const array = [1, 2, 3, 4, 5]

  // SOLUCIÓN: Buscan de derecha a izquierda
  const lastEven = array.findLast(num => num % 2 === 0) 
  const lastEvenIndex = array.findLastIndex(num => num % 2 === 0)

  expect(lastEven).toBe(4)
  expect(lastEvenIndex).toBe(3)
})

test('25_es2023-2: Hashbangs in JavaScript files', () => {
  // Escriu un script amb un hashbang i comprova que no causa errors.
  // SOLUCIÓN: El hashbang (#!...) ahora es sintaxis válida al inicio de un archivo/cadena
  const script = `#!/usr/bin/env node
    const x = 10;
  `

  expect(() => eval(script)).not.toThrow()
})

test('25_es2023-3: Symbol.prototype.description', () => {
  // Crea un símbol amb una descripció i comprova que la descripció és correcta.
  // SOLUCIÓN: Accedemos directamente a la propiedad .description
  const symbol = Symbol('description')

  expect(symbol.description).toBe('description')
})