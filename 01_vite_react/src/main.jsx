// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import {jsx as _jsx} from "react/jsx-runtime.js"


//import React from 'react'
import ReactDOM from 'react-dom/client'

 import App from './App.jsx'


/* const anotherElement = "Khushi"


function MyApp() {
  return(
    <>
    <h1>Custom App ! </h1>
    </>
  )
}

const ReactElement = {
    type:'a', //type of element
    props:{  // properties
        href:"http://google.com",
        target: '_blank'
    },
    children:'Click me to visit google' //text
} 

const anotherElement =(
  <a href ="https://google.com" target = "_blank">Visit google</a>
) 


  const reactElement = React.createElement('a',
    {href:"http://google.com" , target:'_blank'},
    'click me' , anotherElement
  ) */ 




ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    <App />
     //MyApp()
      // reactElement
    // anotherElement
  // </React.StrictMode>
)
