import { useState } from 'react'

import Circle from './components/Circle/Circle.tsx'
import Slider from './components/Slider/Slider.tsx'

import './App.scss'

function App() {
	const [activeDotIndex, setActiveDotIndex] = useState(0)

	const handleActiveDotIndexChange = (index: number) => {
		setActiveDotIndex(index)
	}

	return (
		<div className='container'>
			<div className='wrapper'>
				<h1 className='heading'>Исторические даты</h1>
				<Circle onActiveDotIndexChange={handleActiveDotIndexChange} />
			</div>
			<Slider activeSlider={activeDotIndex} />
		</div>
	)
}

export default App
