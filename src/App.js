import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useEffect, useRef, useState } from 'react';

const PureComponentExample = ({ data }) => {
  return (
    <div>HELLO</div>
  )
}


const ImpureComponentExample = () => {
  const [data, setData] = useState("impure-component-example-data")
  return (
    <div>{data}</div>
  )
}

const ComponentWithPropsExample = ({ someProp, anotherProp, someAnotherProp }) => {

  // const { someProp, anotherProp } = props

  // const a = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   email: "john@mail.com"
  // }

  // const { firstName } = a

  return (
    <div>
      {/* {JSON.stringify(props)} */}
      {someProp} - {anotherProp} - {someAnotherProp}
    </div>
  )
}

let rerender = 0

const Navbar = () => {
  const [count, setCount] = useState(0)

  rerender++
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      Count: {count} - Rerender Count: {rerender}
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

const MySampleHOCComponent = (WrappedComponent) => {
  const name = "Shehzad Ahmed"
  return () => {
    return (
      <div>
        <WrappedComponent name={name} />
      </div>
    )
  }
}

const MyComponent = MySampleHOCComponent(({ name }) => {
  return (
    <h1>
      {name}
    </h1>
  )
})

// const useFn = () => {
//   const [count,setCount] =useState()
// }

const MyComponentWithEvents = () => {
  return (
    <div>
      <button onClick={() => alert("Hello")}>Click Me</button>
      <br />

      <button onDoubleClick={() => alert("Hello")}>Click Me</button>
      <br />

      <input type='text' onChange={(e) => console.log(e)} />
      <br />

      <input type='text' onBlur={(e) => console.log(e.target.value)} />
      <br />

    </div>
  )
}



const MyUseEffectExample = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Component Did Mount")
  }, [])

  useEffect(() => {
    console.log("Component Did Update")
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      Count: {count}
    </div>
  )
}

const MyUseRefExample = () => {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      Count: {count}
    </div>
  )
}


const useMyHook = (value) => {
  const [count, setCount] = useState(value)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return [count, increase, decrease]
}

function App() {

  const [count, increase, decrease] = useMyHook(0)

  return (
    <div className="App">
      <h1>Learning React</h1>
      {/* <h1>Pure Component</h1>
      <PureComponentExample data="pure-component-example-data" />
      <br />

      <h1>Impure Component Example</h1>
      <ImpureComponentExample />
      <br />

      <h1>Component With Props Example</h1>
      <ComponentWithPropsExample
        someProp="somePropValue"
        anotherProp="anotherPropValue"
        someAnotherProp="someAnotherPropValue"
      />
      <br />

      <Navbar /> */}



      {/* <MyComponentWithEvents /> */}

      <button onClick={() => increase()}>Increase</button>

      <button onClick={() => decrease()}>Decrease</button>

      <h1>{count}</h1>

      {/* <MyComponent /> */}

      {/* <MyUseEffectExample /> */}

      {/* <MyUseRefExample /> */}
    </div>
  );
}

export default App;


