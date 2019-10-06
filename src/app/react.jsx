/* import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// eslint-disable-next-line react/prop-types
const Title = ({ text }) => <h5 className="text-bold">{text}</h5>

const carList = [
  'test1', 'test2'
]

// eslint-disable-next-line no-unused-vars
const Card = () => {
  return (
    <div>
      {carList.map((el, inx) => {
        return <Title key={inx} text={el}/>
      })
      }
      <Card2/>
    </div>
  )
}

const Card2 = () => {
  return <div>
    <Title text={'我是測試'}/>
  </div>
}

// var Index = function Index () {
// return React.createElement('div', {
// className: 'helloworld'
// }, 'Hello React,Webpack4,Babel7!')
// }
var App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>You clicked {count} times!</h2>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
*/

import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/counter'

const MainScreen = () => <div className='alert'>
  <h3>計數器</h3>
  <App/>
</div>

const rootElement = document.getElementById('root')
ReactDOM.render(<MainScreen/>, rootElement)
