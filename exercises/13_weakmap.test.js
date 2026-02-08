test('13_weakmap-1: has a WeakMap method', () => {
  const key = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}
  
  // SOLUCIÓN: Creamos el WeakMap y usamos .set()
  const myMap = new WeakMap()
  myMap.set(key, value)
  
  expect(myMap.has(key)).toBe(true)
})

test('13_weakmap-2: should enable private members in classes', () => {
  // SOLUCIÓN: Usamos WeakMaps fuera de la clase para guardar datos 
  // que no sean accesibles desde la instancia (propiedades privadas).
  const privateData = new WeakMap()

  class Person {
    constructor(name, age) {
      // Guardamos el objeto de la instancia (this) como clave
      privateData.set(this, { name, age })
    }

    getName() {
      return privateData.get(this).name
    }

    getAge() {
      return privateData.get(this).age
    }
  }

  const person = new Person('Kent C. Dodds', 26)
  
  // Estas propiedades ya no existen directamente en el objeto
  expect(person._name).toBeUndefined()
  expect(person.getName()).toBe('Kent C. Dodds')
  expect(person._age).toBeUndefined()
  expect(person.getAge()).toBe(26)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
