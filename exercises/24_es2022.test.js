test('24_es2022-1: Class fields and private methods', () => {
  // Crea una classe amb un camp privat i un mètode privat. Afegeix un getter per accedir al camp privat.
  class Person {
    // Los campos privados comienzan con #
    #secret = 'secret';
    
    // Campos estáticos públicos
    static publicField = 'public';

    // Método privado
    #privateMethod() {
      return this.#secret;
    }

    // Método público para acceder a lo privado
    getSecret() {
      return this.#privateMethod();
    }
  }

  const person = new Person()
  expect(person.getSecret()).toBe('secret')
  expect(Person.publicField).toBe('public')
  // Nota: si intentaras hacer person.#secret, JS lanzaría un error de sintaxis
})

test('24_es2022-2: at() method for indexing arrays and strings', () => {
  // Utilitza el mètode at() per accedir als elements d'un array i una cadena.
  const array = [1, 2, 3, 4]
  const string = 'hello'

  // SOLUCIÓN: .at(-1) es el último, .at(-2) el penúltimo, etc.
  const lastArrayElement = array.at(-1)
  const secondLastStringChar = string.at(-2)

  expect(lastArrayElement).toBe(4)
  expect(secondLastStringChar).toBe('l')
})

test('24_es2022-3: Top-level await in modules', async () => {
  // Utilitza await a nivell superior per resoldre una promesa.
  // Nota: En este entorno de test simulamos el comportamiento de un módulo ES.
  const result = await Promise.resolve('Top-level await works!')

  expect(result).toBe('Top-level await works!')
})