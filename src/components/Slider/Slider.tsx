import { FC, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './Slider.scss'
import { data } from '../../data.ts'

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
      <Swiper spaceBetween={40} slidesPerView={3} navigation={false} modules={[Navigation]} className="swiper">
        {data[activeSlider].slides.map((item, index) => (
          <SwiperSlide key={index} className="slider">
            <div className="year">{item.year}</div>
            <div className="text">{item.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
