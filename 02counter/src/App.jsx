import { useState } from 'react'
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 
//let counter = 15
const [counter,setcounter]= useState(5)

const addValue =()=> {
 // console.log("value added", counter)
  //counter= counter+1
  if(counter<20) {

  
setcounter(counter+1)
}
}

const removeValue = ()=> {
  if(counter>0) {
  setcounter(counter-1)
}
}

  return (
    <>
  <h1>Chai aur code</h1>
  <br />
  <h2>Counter  Value: {counter} </h2>

  <br />

  <button
  onClick={addValue}>Add value : {counter}</button>
  <button
     onClick={removeValue}>Remove value : {counter}</button>
   <br/>
  
  <p>footer:{counter}</p> 
    </>
  )
}

export default App
