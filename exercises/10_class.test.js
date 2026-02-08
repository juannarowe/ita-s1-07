test('10_class-1: has a constructor for initialization', () => {
  // SOLUCIÓN: Definimos la clase con un constructor básico.
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBeUndefined()
  expect(dog.name).toBe('Dog')
})

test('10_class-2: constructor can have default param values', () => {
  // SOLUCIÓN: Aplicamos lo que aprendimos en el módulo 08 (parámetros por defecto).
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name;
    }
  }

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBe('Honey Badger')
  expect(dog.name).toBe('Dog')
})

test('10_class-3: can have instance methods', () => {
  // SOLUCIÓN: Los métodos de instancia se definen sin la palabra 'function'.
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name;
    }
    sayName() {
      return `My name is: ${this.name}`;
    }
  }

  const animal = new Animal()

  expect(animal.sayName).toBeDefined()
  expect(Animal.sayName).toBeUndefined() // Los métodos de instancia no están en la clase, sino en el objeto.
  expect(animal.sayName()).toBe('My name is: Honey Badger')
})

test('10_class-4: can have static methods', () => {
  // SOLUCIÓN: Usamos 'static' para métodos que pertenecen a la Clase, no al objeto.
  class Animal {
    static create(name) {
      return new Animal(name);
    }
  }

  const animal = new Animal()

  expect(animal.create).toBeUndefined()
  expect(Animal.create).toBeDefined()
})

test('10_class-5: can extend another class', () => {
  // SOLUCIÓN: Usamos 'extends' para heredar y 'super' para llamar al padre.
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Dog extends Animal {
    constructor(name) {
      super(name); // Llama al constructor de Animal
    }
    sayName() {
      return this.name;
    }
  }

  const dog = new Dog('Fido')

  expect(dog instanceof Dog).toBe(true)
  expect(dog instanceof Animal).toBe(true)
  expect(Animal.prototype.sayName).toBeUndefined()
  expect(Dog.prototype.sayName).toBeDefined()
})

test('10_class-6: can use property setters and getters', () => {
  // SOLUCIÓN: Usamos 'get' y 'set' para interceptar el acceso a propiedades.
  class Animal {
    set name(newName) {
      this._name = newName; // Usamos _name para evitar recursión infinita
    }
    get name() {
      return `${this._name} type of animal`;
    }
  }

  const animal = new Animal()
  animal.name = 'Dog'
  expect(animal.name).toBe('Dog type of animal')
  animal.name = 'Cat'
  expect(animal.name).toBe('Cat type of animal')
})