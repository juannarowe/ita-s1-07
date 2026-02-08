test('12_maps-1: has a map method', () => {
  // Crea un nou mapa anomenat 'myMap'
  // Afegeix una nova entrada. Utilitza 'name' com a clau i 'Aaron' com a valor
  
  // SOLUCIÓN: Usamos new Map() y el método .set(key, value)
  const myMap = new Map()
  myMap.set('name', 'Aaron')

  expect(myMap.get('name')).toBe('Aaron')
})

test('12_maps-2: can use objects as a key', () => {
  const user = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}

  // Crea un mapa anomenat 'myMap'
  // Afegeix una nova entrada. Utilitza user com a clau i value com a valor
  
  // SOLUCIÓN: A diferencia de los objetos literales, Map acepta objetos como claves reales
  const myMap = new Map()
  myMap.set(user, value)

  expect(myMap.has(user)).toBe(true)
  expect(myMap.get(user)).toBe(value)
})

test(`12_maps-3: doesn't coerce keys`, () => {
  const myMap = new Map()
  myMap.set(1, 'Aaron')
  
  // SOLUCIÓN: Map distingue tipos. El número 1 no es lo mismo que el string '1'.
  expect(myMap.get('1')).toBe(undefined)
  
  myMap.set('1', 'Aaron')
  expect(myMap.get('1')).toBe('Aaron')
})