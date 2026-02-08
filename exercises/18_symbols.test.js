test('18_symbols-1: creating symbols', () => {
  // SOLUCIÓN: Usamos la función constructora Symbol() (sin 'new')
  const symbol = Symbol('I wanna be a symbol one day')
  expect(typeof symbol).toBe('symbol')
})

test('18_symbols-2: giving a symbol a description', () => {
  // SOLUCIÓN: Pasamos la cadena de descripción al constructor
  const symbol = Symbol('use the force')
  expect(String(symbol)).toBe('Symbol(use the force)')
})

test('18_symbols-3: symbols are unique', () => {
  const s1 = Symbol()
  const s2 = Symbol()
  // SOLUCIÓN: Cada símbolo es único, incluso sin descripción
  expect(s1 === s2).toBe(false)

  const s3 = Symbol('I am a symbol')
  const s4 = Symbol('I am a symbol')
  // SOLUCIÓN: Aunque tengan la misma descripción, siguen siendo diferentes
  expect(s3 === s4).toBe(false)
})

test('18_symbols-4: symbols on objects', () => {
  const symbol = Symbol('metadata')
  
  // SOLUCIÓN: Las propiedades con clave Symbol no son enumerables por defecto
  // y se omiten en JSON.stringify, pero se accede a ellas con corchetes.
  const game = {
    name: 'The Legend of Zelda',
    releaseDate: 'February 21, 1986',
    [symbol]: {
      fans: 'about a billion',
    }
  }

  expect(JSON.parse(JSON.stringify(game))).toEqual({
    name: 'The Legend of Zelda',
    releaseDate: 'February 21, 1986',
  })
  expect(game[symbol]).toEqual({
    fans: 'about a billion',
  })
})