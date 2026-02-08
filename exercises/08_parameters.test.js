test('08_parameters-1: can be triggered when the incoming argument is undefined', () => {
  const getName = (name = 'Mercury') => name

  // Comprova que el valor per defecte només s'utilitza quan l'argument és `undefined`
  expect(getName('Aaron')).toBe('Aaron')
  expect(getName(undefined)).toBe('Mercury')
  expect(getName(null)).toBe(null)
  expect(getName()).toBe('Mercury')
})

test('08_parameters-2: aren\'t included in arguments', () => {
  // CAMBIO: Usamos 'function' porque las Arrow Functions (=>) no tienen objeto 'arguments'
  // CAMBIO: Usamos 'function' porque las funciones de flecha no poseen el objeto 'arguments'.
  const getName = function(name = 'Mercury') {
    return arguments.length
  }

  // Comprova que els paràmetres per defecte no formen part de l'objecte `arguments`
  expect(getName('Aaron')).toBe(1)
  expect(getName(null)).toBe(1)
  expect(getName()).toBe(0)
})

test('08_parameters-3: can trigger a function call', () => {
  let triggerCount = 0

  const getName = (name = getDefault()) => name

  const getDefault = () => {
    triggerCount++
    return 'Mercury'
  }

  // Comprova que la funció per defecte només es crida quan és necessari
  expect(triggerCount).toBe(0)
  expect(getName('Aaron')).toBe('Aaron')
  expect(getName()).toBe('Mercury')
  expect(getName(undefined)).toBe('Mercury')
  expect(triggerCount).toBe(2)
})

test('08_parameters-4: catch non-specified params', () => {
  const resty = (first, second, ...others) => others

  // Comprova que els paràmetres rest contenen els arguments no especificats
  expect(resty().length).toBe(0)
  expect(resty(1).length).toBe(0)
  expect(resty(1, 2).length).toBe(0)
  expect(resty(1, 2, 3).length).toBe(1)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length,
  ).toBe(8)
})

test('08_parameters-5: has a different length than `arguments`', () => {
  // CAMBIO: Cambiamos a 'function' para que 'arguments' sea accesible.
  // CAMBIO: Usamos 'function' para que 'arguments' sea accesible y no lance ReferenceError.
  const resty = function(first, second, ...others) {
    return others.length === arguments.length
  }

  // Comprova que la longitud dels paràmetres rest és diferent de `arguments`
  // COMPROBACIÓN: 'arguments' cuenta TODO, 'others' solo lo que sobra después de los dos primeros.
  expect(resty()).toBe(true) 
  expect(resty(1)).toBe(false)
  expect(resty(1, 2)).toBe(false)
  expect(resty(1, 2, 3)).toBe(false)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10),
  ).toBe(false)
})

test('08_parameters-6: is an actual array, unlike arguments', () => {
  const resty = (...args) => args
  const argy = function() { return arguments } 

  const args = argy(1, 2, 3)
  const rests = resty(1, 2, 3)

  // Comprova que els paràmetres rest són un array real, a diferència de `arguments`
  // DIFERENCIA: 'arguments' es un objeto, 'rest (...args)' es un Array real.
  expect(
    Object.getPrototypeOf(args) === Object.getPrototypeOf(rests),
  ).toBe(false) 
  
  expect(args.splice).toBe(undefined) 
  
  expect(Object.getPrototypeOf(rests)).toBe(Array.prototype) 
  
  expect(rests.splice).toBeDefined() 
  expect(rests.splice).toBe(Array.prototype.splice) 
})

test('08_parameters-7: it can default all arguments, optionally', () => {
  // SOLUCIÓN: Definimos valores por defecto y un objeto vacío por defecto al final.
  const myFunction = ({
    name = 'Axel', 
    age = 37, 
    favoriteBand = 'Taylor Swift'
  } = {}) => {
    expect(name).toBeDefined()
    expect(age).toBeDefined()
    expect(favoriteBand).toBeDefined()
  }

  myFunction({name: 'Axel', age: 37, favoriteBand: 'Taylor Swift'})
  myFunction({name: 'Axel', age: 37})
  myFunction({name: 'Axel'})
  myFunction({})
  myFunction() 
})

/*
eslint
  no-unused-vars:0
  prefer-rest-params:0
*/
