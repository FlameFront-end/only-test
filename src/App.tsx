import './App.scss'
import { useState } from 'react'
import Circle from './components/Circle/Circle.tsx'
import Slider from './components/Slider/Slider.tsx'

function App() {
  const [activeDotIndex, setActiveDotIndex] = useState(0)

  const handleActiveDotIndexChange = (index: number) => {
    setActiveDotIndex(index)
  }

  return (
    <div className="wrapper">
      <div className="top">
        <h1 className="heading">Исторические даты</h1>
        <Circle onActiveDotIndexChange={handleActiveDotIndexChange} />
      </div>
      <div className="container">
        <Slider activeSlider={activeDotIndex} />
      </div>
    </div>
  )
}

export default App
