// La función que genera la promesa debe estar definida para que los tests la encuentren
const pickApple = (ripeness) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ripeness === 'ripe') {
        resolve('ripe apple')
      } else if (ripeness === 'unripe') {
        reject('unripe apple')
      } else {
        reject(new Error('out of apples'))
      }
    })
  })
}

test('14_promises-1: should resolve', () => {
  return pickApple('ripe')
    .then(
      result => {
        // SE EJECUTA: La promesa se resuelve correctamente
        expect(result).toBe('ripe apple')
      },
      error => {
        // NO SE EJECUTA
        throw new Error("això no s'hauria d'executar")
      },
    )
    .catch(error => {
      // NO SE EJECUTA
      throw new Error("això no s'hauria d'executar")
    })
})

test('14_promises-2: should reject', () => {
  return pickApple('unripe')
    .then(
      result => {
        // NO SE EJECUTA
        throw new Error("això no s'hauria d'executar")
      },
      error => {
        // SE EJECUTA: El segundo argumento de .then maneja el reject
        expect(error).toBe('unripe apple')
      },
    )
    .catch(error => {
      // NO SE EJECUTA: El error ya fue capturado arriba
      throw new Error("això no s'hauria d'executar")
    })
})

test('14_promises-3: errors can be caught', () => {
  return pickApple() // Sin argumentos va al error 'out of apples'
    .then(result => {
      // NO SE EJECUTA
      throw new Error("això no s'hauria d'executar")
    })
    .catch(error => {
      // SE EJECUTA: El .catch captura el error del reject
      expect(error.message).toBe('out of apples')
    })
})