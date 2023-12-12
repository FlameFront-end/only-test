import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import './Circle.scss'
import { data } from '../../data.ts'

interface CircleProps {
  onActiveDotIndexChange: (index: number) => void
}

const Circle: React.FC<CircleProps> = ({ onActiveDotIndexChange }) => {
  const circleRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<HTMLDivElement[]>([])
  const [activeDotIndex, setActiveDotIndex] = useState(0)

  const [minYear, setMinYear] = useState(data[activeDotIndex].minYear)
  const [maxYear, setMaxYear] = useState(data[activeDotIndex].maxYear)

  const [currentMinYear, setCurrentMinYear] = useState(data[activeDotIndex].minYear)
  const [currentMaxYear, setCurrentMaxYear] = useState(data[activeDotIndex].maxYear)

  useEffect(() => {
    setCurrentMinYear(data[activeDotIndex].minYear)
    setCurrentMaxYear(data[activeDotIndex].maxYear)
  }, [activeDotIndex])

  useEffect(() => {
    const circle = circleRef.current
    const dots = dotRefs.current

    if (circle && dots.length > 0) {
      const radius = 265
      const numDots = dots.length
      const angleIncrement = (2 * Math.PI) / numDots
      const startingAngle = -Math.PI / 6

      dots.forEach((dot, index) => {
        const angle = startingAngle + index * angleIncrement
        const isDotActive = index === activeDotIndex

        const dotSize = isDotActive ? 60 : 6
        const counterRotation = index * angleIncrement * (180 / Math.PI)

        const x = circle.clientWidth / 2 + radius * Math.cos(angle) - dotSize / 2
        const y = circle.clientHeight / 2 + radius * Math.sin(angle) - dotSize / 2

        gsap.to(dot, { x, y, width: dotSize, height: dotSize })
        gsap.to(dot.querySelector('.index'), { rotation: -angle + counterRotation })
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
        ease: 'power2.out',
      })
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (maxYear === currentMaxYear) {
        clearInterval(intervalId)
      } else {
        const increment = currentMaxYear > maxYear ? 1 : -1

        setMaxYear((prevYear) => prevYear + increment)
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

        setMinYear((prevYear) => prevYear + increment)
      }
    }, 50)

    return () => clearInterval(intervalId)
  }, [minYear, currentMinYear])

  return (
    <div className="center">
      <div ref={circleRef} className="circle">
        {data.map((_, index) => (
          <div
            key={index}
            ref={(element) => element && (dotRefs.current[index] = element)}
            className={`dot ${index === activeDotIndex ? 'active' : ''}`}
            onClick={() => rotateCircle(index - activeDotIndex)}
          >
            <div className="index" data-title={data[activeDotIndex].title}>
              {index + 1}
            </div>
          </div>
        ))}
      </div>
      <div className="circle-bottom">
        <div className="count">
          0{activeDotIndex + 1}/0{data.length}
        </div>
        <div className="btn-block">
          <button className="btn" onClick={() => rotateCircle(-1)} disabled={activeDotIndex === 0}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M27.4999 18.75L21.2499 25L27.4999 31.25" stroke="#42567A" strokeWidth="2" />
            </svg>
          </button>
          <button className="btn" onClick={() => rotateCircle(1)} disabled={activeDotIndex === data.length - 1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M22.5001 18.75L28.7501 25L22.5001 31.25" stroke="#42567A" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
      <div className="year">
        <div className="min">{minYear}</div>
        <div className="max">{maxYear}</div>
      </div>
    </div>
  )
}

export default Circle
