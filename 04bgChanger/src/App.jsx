import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("brown")

  return (
    <>
      <div className='w-full h-screen flex justify-center ' style={{backgroundColor : color}}>

        <div className='w-300 h-20 bg-gray-300 flex items-center justify-center mt-10 rounded-xl gap-3'> 

          <button
          className='w-20 h-7 rounded-md bg-blue border-2 text-white flex items-center justify-center shadow'
          style={{backgroundColor : "black"}}
          onClick={() => setColor("black")}
          >
            Black
          </button>

          <button
          className='w-20 h-7 rounded-md bg-blue border-2 text-black flex items-center justify-center shadow '
          style={{backgroundColor : "white"}}
          onClick={() => setColor("white")}
          >
            White
          </button>


          <button
          className='w-20 h-7 rounded-md bg-blue border-2 text-black flex items-center justify-center shadow '
          style={{backgroundColor : "blue"}}
          onClick={() => setColor("blue")}
          >
            Blue
          </button>


          <button
          className='w-20 h-7 rounded-md bg-blue border-2 text-black flex items-center justify-center shadow '
          style={{backgroundColor : "yellow"}}
          onClick={() => setColor("yellow")}
          >
            Yellow
          </button>



          <button
          className='w-20 h-7 rounded-md bg-blue border-2 text-black flex items-center justify-center shadow '
          style={{backgroundColor : "pink"}}
          onClick={() => setColor("pink")}
          >
            Pink
          </button>



          <button
          className='w-20 h-7 rounded-md bg-blue border-2 text-black flex items-center justify-center shadow '
          style={{backgroundColor : "orange"}}
          onClick={() => setColor("orange")}
          >
            Orange
          </button>


          <button
          className='w-20 h-7 rounded-md bg-blue border-2 text-black flex items-center justify-center shadow '
          style={{backgroundColor : "red"}}
          onClick={() => setColor("red")}
          >
            Red
          </button>


          <button
          className='w-20 h-7 rounded-md bg-blue border-2 text-black flex items-center justify-center shadow '
          style={{backgroundColor : "gray"}}
          onClick={() => setColor("gray")}
          >
            Gray
          </button>



          <button
          className='w-20 h-7 rounded-md bg-blue border-2 text-black flex items-center justify-center shadow '
          style={{backgroundColor : "beige"}}
          onClick={() => setColor("beige")}
          >
            Beige
          </button>


          <button
          className='w-20 h-7 rounded-md bg-blue border-2 text-black flex items-center justify-center shadow '
          style={{backgroundColor : "skyblue"}}
          onClick={() => setColor("skyblue")}
          >
            Skyblue
          </button>

        </div>
      </div>
    </>
  )
}

export default App
