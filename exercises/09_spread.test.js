test('09_spread-1: should be able to call a function and spread the arguments', () => {
  // Utilitza l'operador spread per passar arguments a una funció
  const args = ['a', 'b', 'c']
  let calls = 0

  const myFunction = (a, b, c) => {
    expect(a).toBe('a')
    expect(b).toBe('b')
    expect(c).toBe('c')
    calls++
  }
  
  // SOLUCIÓN: "Esparcimos" el array dentro de la llamada a la función
  myFunction(...args)
  
  expect(calls).toBe(1)
})

test('09_spread-2: should be easier to concatenate arrays', () => {
  // Utilitza l'operador spread per concatenar arrays
  const array1 = [1, 2, 3]
  const array2 = [4, 5, 6] // Definimos el segundo array
  
  // SOLUCIÓN: Creamos un nuevo array con los elementos de ambos
  const result = [...array1, ...array2]
  
  expect(result).toEqual([1, 2, 3, 4, 5, 6])
})

test('09_spread-3: should be able to merge properties from objects', () => {
   // crea un objecte resultat que utilitzi l'operador spread per afegir `eggs: 'spam'` al que existeix a obj1
  const obj1 = {
    foo: 'bar',
    baz: 'foobar',
  }

  // SOLUCIÓN: Clonamos obj1 y añadimos la nueva propiedad
  const result = { ...obj1, eggs: 'spam' }

  expect(result).toEqual({
    foo: 'bar',
    baz: 'foobar',
    eggs: 'spam',
  })
})