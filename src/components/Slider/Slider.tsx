import { FC, useEffect, useState } from 'react'
import SwiperCore from 'swiper/core'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { data } from '../../data/data.ts'

import './Slider.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Navigation, Pagination])

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
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}}
				pagination={{
					clickable: true,
					el: '.custom-pagination'
				}}
				modules={[Navigation, Pagination]}
				breakpoints={{
					0: {
						spaceBetween: 25,
						slidesPerView: 1.5
					},
					901: {
						spaceBetween: 80,
						slidesPerView: 3
					}
				}}
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
			<div className='custom-pagination'></div>
		</div>
	)
}

export default Slider
