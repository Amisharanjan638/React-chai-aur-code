//import { useState } from 'react'



//import heroImg from './assets/hero.png'



//import reactLogo from './assets/react.svg'



//import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
   {/*let myObj = {
    username: "Amisha",
    age:22
  } */}

   //let myArr = [1,2,3] 
   //const [count, setCount] = useState(0)
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl ">
        Tailwind test
      </h1>
{/*

 <Card channel = "amisha" myArr = [1,2,3] /> (gives error)  
 <Card channel = "khushi" myArr={name:"Amisha"} /> 
  <Card channel = "Khush" someArr = {myArr}   (correct)*/} 
 <Card username = "Khushi" btnText = "Click me"/> 
 <Card username= "Amisha" />
 <Card />
    </>
  )
}

export default App

