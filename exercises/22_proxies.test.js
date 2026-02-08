// Mueve o asegúrate de que esta función esté disponible al principio del archivo
const getCharacter = () => {
  return {
    _id: '9RKDLS02580GHCXNZLA0',
    password: 'isolemnlysweariamuptonogood',
    name: {first: 'Ron', last: 'Weasly'},
    classes: [
      {name: 'Divination', teacher: 'Sybill Trelawney'},
      {name: 'Defence Against the Dark Arts', teacher: 'Dolores Umbridge'},
    ],
    greet(greeting = 'Hi') {
      const {first, last} = this.name
      return `${greeting}! My name is ${first} ${last} and my ID is ${this._id} and my password is ${this.password}!`
    },
    getTeachers() {
      return this.classes.map(({teacher}) => teacher)
    },
  }
}

test('22_proxies-1: can wrap an existing object', () => {
  const character = getCharacter()
  // SOLUCIÓN
  const proxy = new Proxy(character, {})
  
  expect(proxy).not.toBe(character)
  expect(proxy).toEqual(character)
})

test('22_proxies-2: handler can intercept gets, sets, and deletes', () => {
  const character = getCharacter()

  const handler = {
    get(target, prop) {
      if (typeof prop === 'string' && prop.includes('.')) {
        return prop.split('.').reduce((acc, part) => acc && acc[part], target)
      }
      return Reflect.get(target, prop)
    },
    set(target, prop, value) {
      if (typeof prop === 'string' && prop.includes('.')) {
        const parts = prop.split('.')
        const last = parts.pop()
        const nested = parts.reduce((acc, part) => acc[part], target)
        nested[last] = value
        return true
      }
      return Reflect.set(target, prop, value)
    },
    deleteProperty(target, prop) {
      if (typeof prop === 'string' && prop.startsWith('_')) {
        return true 
      }
      return Reflect.deleteProperty(target, prop)
    }
  }
  
  const proxy = new Proxy(character, handler)

  proxy['classes.1.teacher'] = 'Severus Snape'
  proxy.awesome = 10 
  delete proxy._id 

  expect(proxy['classes.1.teacher']).toBe('Severus Snape')
  expect(proxy.awesome).toBe(10)
  expect(proxy._id).toEqual('9RKDLS02580GHCXNZLA0') 

  delete proxy.awesome 
  expect(proxy.awesome).toBe(undefined)
})

test('22_proxies-3: can intercept function calls', () => {
  const character = getCharacter()

  const handler = {
    apply(target, thisArg, argumentsList) {
      const result = Reflect.apply(target, thisArg, argumentsList)
      if (typeof result === 'string') {
        return result
          .replace(thisArg._id, 'REDACTED')
          .replace(thisArg.password, 'REDACTED')
      }
      return result
    }
  }

  character.greet = new Proxy(character.greet, handler)
  character.getTeachers = new Proxy(character.getTeachers, handler)
  
  const result = character.greet('Hey there')
  expect(result).not.toContain(character.password)
  expect(result).not.toContain(character._id)
})