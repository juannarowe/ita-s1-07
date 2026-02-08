test('19_iterators-1: can get the iterator from an array', () => {
  const array = [1, 2, 3]
  // Obtenemos el iterador usando el Symbol.iterator
  const iterator = array[Symbol.iterator]()
  expect(typeof iterator.next === 'function').toBe(true)
})

test('19_iterators-2: can next() the iterator multiple times', () => {
  const string = 'hello'
  const iterator = string[Symbol.iterator]()
  
  expect(iterator.next()).toEqual({value: 'h', done: false})
  expect(iterator.next()).toEqual({value: 'e', done: false})
  expect(iterator.next()).toEqual({value: 'l', done: false})
  expect(iterator.next()).toEqual({value: 'l', done: false})
  expect(iterator.next()).toEqual({value: 'o', done: false})
  expect(iterator.next()).toEqual({value: undefined, done: true})
  expect(iterator.next()).toEqual({value: undefined, done: true})
})

test('19_iterators-3: can iterate over an iterable with for .. of', () => {
  const array = [1, 2, 3]
  let sum = 0
  for (let val of array) {
    sum += val
  }
  expect(sum).toBe(6)
})

test('19_iterators-4: can use the ... operator on the iterator', () => {
  const set = new Set([1, 2, 2, 3])
  // Usamos destructuring para saltar el primer elemento y agrupar el resto
  const [, ...rest] = set
  expect(rest).toEqual([2, 3])
})

test('19_iterators-5: can create a custom iterator', () => {
  const randomRandomNumbersGenerator = {
    max: 20,
    min: 10,
    [Symbol.iterator]() {
      const { min, max } = this
      const count = Math.floor(Math.random() * (max - min + 1)) + min
      let index = 0
      
      return {
        next: () => {
          const done = index >= count
          const value = done 
            ? undefined 
            : Math.floor(Math.random() * (max - min + 1)) + min
          index++
          return { value, done }
        }
      }
    }
  }

  // Definimos la función aquí dentro para que el test la encuentre
  function iteratorWorks() {
    const randomNumbers = [...randomRandomNumbersGenerator]
    const {max, min} = randomRandomNumbersGenerator
    const tooManyNumbers = randomNumbers.length > max
    const tooFewNumbers = randomNumbers.length < min
    const numbersInBounds = randomNumbers.every(num => num <= max && num >= min)
    return !tooManyNumbers && !tooFewNumbers && numbersInBounds
  }

  expect(iteratorWorks()).toBe(true)
})

test('19_iterators-6: can create a custom iterator with a generator', () => {
  const randomRandomNumbersGenerator = {
    max: 20,
    min: 10,
    // Sintaxis de generador: *[Symbol.iterator]
    *[Symbol.iterator]() {
      const { min, max } = this
      const count = Math.floor(Math.random() * (max - min + 1)) + min
      for (let i = 0; i < count; i++) {
        yield Math.floor(Math.random() * (max - min + 1)) + min
      }
    }
  }

  function iteratorWorks() {
    const randomNumbers = [...randomRandomNumbersGenerator]
    const {max, min} = randomRandomNumbersGenerator
    const tooManyNumbers = randomNumbers.length > max
    const tooFewNumbers = randomNumbers.length < min
    const numbersInBounds = randomNumbers.every(num => num <= max && num >= min)
    return !tooManyNumbers && !tooFewNumbers && numbersInBounds
  }

  expect(iteratorWorks()).toBe(true)
})