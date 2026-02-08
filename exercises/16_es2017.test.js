test('16_es2016-1: the exponentiation operation can be used to raise a number to a power of another number', () => {
  // SOLUCIÓN: Usamos el nuevo operador **
  const result = 3 ** 2
  expect(result).toBe(9)
})

test('16_es2016-2: array.includes can be used to determine whether an item exists in an array', () => {
  const bestFriend = {name: 'Sindre Sorhus'}
  const greatFriends = [
    bestFriend,
    {name: 'Dustan Kasten'},
    {name: 'Sam Saccone'},
    {name: 'Ingvar Stepanyan'},
  ]
  // SOLUCIÓN: .includes(item) devuelve true o false directamente
  const result = greatFriends.includes(bestFriend)
  expect(result).toBe(true)
})

test('16_es2017-1: String.prototype.padStart saves us from left-pad-gate', () => {
  const originalString = 'Worlds Finest'
  // SOLUCIÓN: El total de caracteres debe ser 13 + 4 espacios = 17
  const result = originalString.padStart(17)
  expect(result).toBe('    Worlds Finest')
})

test('16_es2017-2: String.prototype.padEnd (and padStart) can be given a string to pad with', () => {
  const originalString = 'Stronger Together'
  // SOLUCIÓN: Rellenamos con '-123' hasta llegar a la longitud deseada
  const result = originalString.padEnd(27, '-123')
  expect(result).toBe('Stronger Together-123-123-1')
})

test('16_es2017-3: Object.values gets just the values of an object', () => {
  const show = {
    title: 'Supergirl',
    seasons: 1.2,
    characters: ['Supergirl', 'Cat Grant', 'Superman', 'Jimmy Olsen', 'Hank Henshaw', 'Winn Schott', 'Alex Danvers'],
  }
  // SOLUCIÓN: Extrae solo los valores como un Array
  const result = Object.values(show)
  expect(result).toEqual([
    'Supergirl',
    1.2,
    ['Supergirl', 'Cat Grant', 'Superman', 'Jimmy Olsen', 'Hank Henshaw', 'Winn Schott', 'Alex Danvers'],
  ])
})

test('16_es2017-4: Object.entries gives an array of arrays as [key, value]', () => {
  const show = {
    title: 'The Flash',
    seasons: 2.2,
    characters: ['The Flash', 'Iris West', 'Caitlin Snow', 'Eddie Thawne', 'Cisco Ramon', 'Harrison Wells', 'Joe West'],
  }
  // SOLUCIÓN: Convierte el objeto en una lista de pares [clave, valor]
  const result = Object.entries(show)
  expect(result).toEqual([
    ['title', 'The Flash'],
    ['seasons', 2.2],
    ['characters', ['The Flash', 'Iris West', 'Caitlin Snow', 'Eddie Thawne', 'Cisco Ramon', 'Harrison Wells', 'Joe West']],
  ])
})

test('16_es2017-5: Trailing commas in function parameter lists and calls help us with git', () => {
  // SOLUCIÓN: Añadimos una coma después del último parámetro/argumento
  // Esto hace que los "diffs" de Git sean más limpios al añadir nuevos parámetros.
  expect(`
    function foo(
      a,
      b,
      c,
    ) {
      log(a, b, c)
    }

    foo(
      1,
      2,
      3,
    )

    function bar(
      a,
      b,
      ...rest
    ) {
      log(a, b, ...rest)
    }
    bar(
      1, 2, 3,
      4, 5, 6,
    )

    function log() {
      // no facis res :)
    }
  `).toBeValidSyntax()
})