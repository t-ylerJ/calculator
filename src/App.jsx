import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [screen, setScreen] = useState(0)

  return (
    <>
      <div className='border-2'>
        <div className="flex justify-end">
          <button>-</button>
          <button>X</button>
        </div>
        <div className="flex flex-row justify-end border-2 rounded-xl w-40">
          <button className="">Regular</button>
        </div>
        <div className="h-20 p-4 m-4 border-2 bg-white">
          {screen}
        </div>
        <div>
          <div className="flex p-2 align-middle justify-end gap-4">
            <button>Back</button>
            <button>CE</button>
            <button>C</button>
          </div>
          <div className="grid grid-cols-5 gap-4 px-10">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>/</button>
            <button>sqrt</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
            <button>%</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>=</button>
            <button>0</button>
            <button>.</button>
            <button>+/-</button>
            <button>+</button>
            
       
          </div>
        </div>
      </div>
    </>
  )
}

export default App
