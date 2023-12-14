import { FC, useEffect, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { data } from '../../data.ts'

import './Slider.scss'

import 'swiper/css'
import 'swiper/css/navigation'

interface SliderProps {
	activeSlider: number
}

const Slider: FC<SliderProps> = ({ activeSlider }) => {
	const [swiperVisible, setSwiperVisible] = useState(true)

	useEffect(() => {
		setSwiperVisible(false)

		const timeout = setTimeout(() => {
			setSwiperVisible(true)
		}, 500)

		return () => clearTimeout(timeout)
	}, [activeSlider])

	return (
		<div className={`slider-container ${swiperVisible ? 'visible' : 'hidden'}`}>
			<Swiper
				spaceBetween={40}
				slidesPerView={3}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}}
				modules={[Navigation]}
				className='swiper'
			>
				{data[activeSlider].slides.map((item, index) => (
					<SwiperSlide key={index} className='slider'>
						<div className='year'>{item.year}</div>
						<div className='text'>{item.text}</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='navigation'>
				<button className='swiper-button swiper-button-prev'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='8'
						height='12'
						viewBox='0 0 8 12'
						fill='none'
						transform='rotate(180)'
					>
						<path d='M1 1L6 6L1 11' stroke='#3877EE' strokeWidth='2' />
					</svg>
				</button>
				<button className='swiper-button swiper-button-next'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='8'
						height='12'
						viewBox='0 0 8 12'
						fill='none'
					>
						<path d='M1 1L6 6L1 11' stroke='#3877EE' strokeWidth='2' />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Slider
