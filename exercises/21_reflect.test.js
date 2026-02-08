test('21_reflect-1: Reflect.apply can be used to call a function', () => {
  const person = {
    name: 'Fred',
    sayHi(greeting, noun) {
      return `${greeting} ${noun}! My name is ${this.name}`
    },
  }

  // SOLUCIÓN: Reflect.apply(función, contextoThis, listaDeArgumentos)
  const result = Reflect.apply(person.sayHi, person, ['Hey there', 'Jaimee'])
  
  expect(result).toBe('Hey there Jaimee! My name is Fred')
})

test('21_reflect-2: Reflect.deleteProperty can be used instead of the `delete` keyword', () => {
  const person = {name: 'Joan', age: 56}
  Reflect.defineProperty(person, 'protected', {
    configurable: false,
    value: 'YOU CANNOT GET RID OF ME!',
  })
  
  // SOLUCIÓN: Reemplazamos el operador 'delete' por la función de Reflect
  const ageDeleted = Reflect.deleteProperty(person, 'age')
  const protectedDeleted = Reflect.deleteProperty(person, 'protected')
  
  expect(person.age).not.toBeDefined()
  expect(ageDeleted).toBe(true)
  expect(person.protected).toBe('YOU CANNOT GET RID OF ME!')
  expect(protectedDeleted).toBe(false) // Falla porque configurable es false
})

test(`21_reflect-3: Reflect.ownKeys returns the object's own (not inherited) keys (including symbols)`, () => {
  const exists = Symbol('existance')
  const person = {human: true, [exists]: true}
  const favoriteFeature = Symbol('Fav Feat')
  const kyle = {
    __proto__: person,
    awesome: true,
    [favoriteFeature]: 'destructuring',
  }
  Reflect.defineProperty(kyle, 'favoriteLanguage', {
    value: 'JS',
    configurable: false,
    enumerable: false,
  })

  // Object.keys: Solo propiedades PROPIAS y ENUMERABLES (no Symbols, no heredadas)
  expect(Object.keys(kyle)).toEqual(['awesome'])

  // Object.getOwnPropertyNames: Todas las PROPIAS (incluidas no-enumerables, pero no Symbols)
  expect(Object.getOwnPropertyNames(kyle)).toEqual(['awesome', 'favoriteLanguage'])

  // Object.getOwnPropertySymbols: Solo los SYMBOLS PROPIOS
  expect(Object.getOwnPropertySymbols(kyle)).toEqual([favoriteFeature])

  // Reflect.ownKeys: El "pack completo". Todas las llaves PROPIAS (enumerables o no) + Symbols
  expect(Reflect.ownKeys(kyle)).toEqual(['awesome', 'favoriteLanguage', favoriteFeature])
})