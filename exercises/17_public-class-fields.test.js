test('17_public-class-fields-1: public class fields help us avoid .bind-ing everything', () => {
  class FakeReactComponent {
    constructor(props) {
      this.props = props
      this.setState = () => {} 
    }
  }

  class MyComponent extends FakeReactComponent {
    // Usamos Public Class Field con Arrow Function para auto-bindear el 'this'
    handleClick = ({target: {value}}) => {
      this.props.onClick(value)
    }

    render() {
      // JSX ficticio
    }

    testClick(value) {
      const fakeEvent = {target: {value}}
      this.handleClick(fakeEvent)
    }
  }

  // SOLUCIÓN AL ERROR: Creamos un mock manual en lugar de usar jest.fn()
  let callCount = 0
  let calledWith = null
  const onClick = (val) => {
    callCount++
    calledWith = val
  }

  const myComponent = new MyComponent({onClick})
  myComponent.testClick('hello world')
  
  expect(callCount).toBe(1)
  expect(calledWith).toBe('hello world')
})