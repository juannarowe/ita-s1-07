test('27_callbacks-1: Basic callback - invoke callback passing a number', () => {
  const processNumber = (num, callback) => {
    callback(num)
  }

  // SOLUCIÓN: En lugar de jest.fn(), usamos una función manual para evitar el ReferenceError
  let calledWith = null
  let callCount = 0
  
  const mockCallback = (val) => {
    calledWith = val
    callCount++
  }

  processNumber(5, mockCallback)

  expect(calledWith).toBe(5)
  expect(callCount).toBe(1)
})

test('27_callbacks-2: Callbacks with mathematical operations - calculator', () => {
  const calculator = (a, b, callback) => {
    return callback(a, b)
  }

  const sum = (a, b) => a + b
  const result = calculator(3, 4, sum)

  expect(result).toBe(7)
})

test('27_callbacks-3: Callbacks in asynchronous functions - wait and greet', (done) => {
  const waitAndGreet = (name, callback) => {
    setTimeout(() => {
      callback(name)
    }, 2000)
  }

  const startTime = Date.now()

  waitAndGreet('Maria', (name) => {
    const elapsed = Date.now() - startTime
    expect(name).toBe('Maria')
    expect(elapsed).toBeGreaterThanOrEqual(1900)
    expect(elapsed).toBeLessThan(2500)
    done()
  })
}, 3000)

test('27_callbacks-4: Callbacks with arrays - process elements', () => {
  const processElements = (arr, callback) => {
    arr.forEach(element => callback(element))
  }

  const elements = ['a', 'b', 'c']
  const results = []

  processElements(elements, (element) => {
    results.push(element.toUpperCase())
  })

  expect(results).toEqual(['A', 'B', 'C'])
})

test('27_callbacks-5: Process string with callback - transform to uppercase', () => {
  const processString = (str, callback) => {
    callback(str.toUpperCase())
  }

  processString('hola món', (transformedString) => {
    expect(transformedString).toBe('HOLA MÓN')
  })
})

test('27_callbacks-6: Chained callbacks - multiple transformations', () => {
  const double = (num, callback) => {
    callback(num * 2)
  }

  const addTen = (num, callback) => {
    callback(num + 10)
  }

  let finalResult

  double(5, (result1) => {
    addTen(result1, (result2) => {
      finalResult = result2
    })
  })

  expect(finalResult).toBe(20)
})