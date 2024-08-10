import { useState } from 'react'
import './App.css'
import MyContext from './MyContext'
import Card from './Components/Card'

function App() {
  const [Background, setBackground] = useState('')
  const [TextColor, setTextColor] = useState('')

  return (
    <MyContext.Provider value={{Background,setBackground,TextColor,setTextColor}}>
            <Card/>
    </MyContext.Provider >
  )
}

export default App

    //  <div className='h-[100vh] w-[100vw] flex justify-center items-center'>


    //  </div>
    