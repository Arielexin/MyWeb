import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
    <h2> Hello here is my app</h2>
    <em>l3xin</em><br />
    <p>My name is lexin and I'm a <strong>creative technologist</strong> based in London </p>
    <AboutPage/>
    <MyButton/>
    </div>
 
  )
}

function MyButton(){
return (
  <button>I'm button</button>
)
}

function AboutPage(){
  return(
    <>
    <h3>About</h3>
    <p>Hello there.<br />How do you do?</p>
    </>
  )
}

const user = {
  name: 'Thermal Bunny',
  //imageUrl: 'https://raw.githubusercontent.com/Arielexin/MyWeb/main/20240515_0152.JPG',
  imageWidth: 500,
  imageHeight: 350,
}

export default function Profile(){
return(
  <>
  <h1>{user.name}</h1>
  <img
  className="avatar"
  src = {user.imageUrl}
  alt = {'Photo of ' + user.name}
  style={{
    width: user.imageWidth,
    height: user.imageHeight
  }}
  />
  </>
);
}
//export default App
