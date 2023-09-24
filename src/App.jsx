import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Component/Navber/Navber'
import PriceList from './Component/PriceList/PriceList'
import Chart from './Component/Chart/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber></Navber>
     <PriceList></PriceList>
     <Chart> </Chart>
   
    </>
  )
}

export default App
