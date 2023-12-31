import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

import ArrowCircle from '../../assets/arrow-circle.svg'
import { data } from '../../data/data.ts'

import './Circle.scss'

interface CircleProps {
	onActiveDotIndexChange: (index: number) => void
}

const Circle: React.FC<CircleProps> = ({ onActiveDotIndexChange }) => {
	const circleRef = useRef<HTMLDivElement>(null)
	const dotRefs = useRef<HTMLDivElement[]>([])
	const [activeDotIndex, setActiveDotIndex] = useState(0)

	const [minYear, setMinYear] = useState(data[activeDotIndex].minYear)
	const [maxYear, setMaxYear] = useState(data[activeDotIndex].maxYear)

	const [currentMinYear, setCurrentMinYear] = useState(
		data[activeDotIndex].minYear
	)
	const [currentMaxYear, setCurrentMaxYear] = useState(
		data[activeDotIndex].maxYear
	)

	useEffect(() => {
		const circle = circleRef.current
		const dots = dotRefs.current

		if (circle && dots.length > 0) {
			const radius = 265
			const numDots = dots.length
			const angleIncrement = (2 * Math.PI) / numDots
			const startingAngle = -Math.PI / 3

			dots.forEach((dot, index) => {
				const angle = startingAngle + index * angleIncrement
				const isDotActive = index === activeDotIndex

				const dotSize = isDotActive ? 60 : 6
				const counterRotation = index * angleIncrement * (180 / Math.PI)

				const x =
					circle.clientWidth / 2 + radius * Math.cos(angle) - dotSize / 2
				const y =
					circle.clientHeight / 2 + radius * Math.sin(angle) - dotSize / 2

				gsap.to(dot, { x, y, width: dotSize, height: dotSize })
				gsap.to(dot.querySelector('.index'), {
					rotation: -angle + counterRotation
				})
				dot.classList.toggle('active', isDotActive)
			})
		}
	}, [activeDotIndex])

	const rotateCircle = (direction: number) => {
		const numDots = dotRefs.current.length
		const newActiveDotIndex = (activeDotIndex + direction + numDots) % numDots

		if (newActiveDotIndex >= 0 && newActiveDotIndex < numDots) {
			setActiveDotIndex(newActiveDotIndex)
			onActiveDotIndexChange(newActiveDotIndex)
			gsap.to(circleRef.current, {
				rotation: `-=${direction * (360 / numDots)}`,
				ease: 'power2.out'
			})
		}
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (maxYear === currentMaxYear) {
				clearInterval(intervalId)
			} else {
				const increment = currentMaxYear > maxYear ? 1 : -1

				setMaxYear(prevYear => prevYear + increment)
			}
		}, 50)

		return () => clearInterval(intervalId)
	}, [maxYear, currentMaxYear])

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (minYear === currentMinYear) {
				clearInterval(intervalId)
			} else {
				const increment = currentMinYear > minYear ? 1 : -1

				setMinYear(prevYear => prevYear + increment)
			}
		}, 50)

		return () => clearInterval(intervalId)
	}, [minYear, currentMinYear])

	useEffect(() => {
		setCurrentMinYear(data[activeDotIndex].minYear)
		setCurrentMaxYear(data[activeDotIndex].maxYear)
	}, [activeDotIndex])

	return (
		<div className='circle-wrapper'>
			<div className='center'>
				<div ref={circleRef} className='circle'>
					{data.map((_, index) => (
						<div
							key={index}
							ref={element => element && (dotRefs.current[index] = element)}
							className={`dot ${index === activeDotIndex ? 'active' : ''}`}
							onClick={() => rotateCircle(index - activeDotIndex)}
						>
							<div className='index' data-title={data[activeDotIndex].title}>
								{index + 1}
							</div>
						</div>
					))}
				</div>
				<div className='year'>
					<div className='min'>{minYear}</div>
					<div className='max'>{maxYear}</div>
				</div>
			</div>
			<div className='circle-bottom'>
				<div className='count'>
					0{activeDotIndex + 1}/0{data.length}
				</div>
				<div className='btn-block'>
					<button
						className='btn'
						onClick={() => rotateCircle(-1)}
						disabled={activeDotIndex === 0}
					>
						<img src={ArrowCircle} alt='ArrowCircle' />
					</button>
					<button
						className='btn btn-next'
						onClick={() => rotateCircle(1)}
						disabled={activeDotIndex === data.length - 1}
					>
						<img src={ArrowCircle} alt='ArrowCircle' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Circle
