import { FC } from 'react'

interface CircleBottomProps {
  activeDotIndex: number
  onRotateCircle: (direction: number) => void
  dataLength: number
}

const CircleBottom: FC<CircleBottomProps> = ({ activeDotIndex, onRotateCircle, dataLength }) => {
  return (
    <div className="circle-bottom">
      <div className="count">
        0{activeDotIndex + 1}/0{dataLength}
      </div>
      <div className="btn-block">
        <button className="btn" onClick={() => onRotateCircle(-1)} disabled={activeDotIndex === 0}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M27.4999 18.75L21.2499 25L27.4999 31.25" stroke="#42567A" strokeWidth="2" />
          </svg>
        </button>
        <button className="btn" onClick={() => onRotateCircle(1)} disabled={activeDotIndex === dataLength - 1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M22.5001 18.75L28.7501 25L22.5001 31.25" stroke="#42567A" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CircleBottom
