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
    <div className="container">
      <div className="wrapper">
        <h1 className="heading">Исторические даты</h1>
        <Circle onActiveDotIndexChange={handleActiveDotIndexChange} />
        <Slider activeSlider={activeDotIndex} />
      </div>
    </div>
  )
}

export default App
