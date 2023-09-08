import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friend from './Friend'

function App() {
  function handleClick(){
    alert('Hello Dim I miss you ')
  }
  const handleClick2 =()=>{
    alert('alert using arrow function')
  }
  const addNumber =(num)=>{
    alert(num +5)
  }
  return (
    <>
      
      <h3>React Core Concepts</h3>
      <Friend></Friend>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>ClickReact</button>
      <button onClick={handleClick2}>ClickReact</button>
      <button onClick={()=>{alert('Hello mama')}}>ClickReact2</button>
      <button onClick={()=>{addNumber(10)}}>addNum</button>
     
      
    </>
  )
}

export default App
