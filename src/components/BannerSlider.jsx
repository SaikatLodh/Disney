import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img from '../assets/image/slider-badag.jpg'
import img2 from "../assets/image/slider-badging.jpg"
import img3 from "../assets/image/slider-scale.jpg"
import img4 from "../assets/image/slider-scales.jpg"


const BannerSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <div className='py-[100px]'>
       <Slider {...settings} className='w-full h-full '>
      <div className='w-full h-full '>
        <a className='flex items-center justify-center center '>
          <img src={img} alt="" className='w-[90%] h-full shadow-lg saikat cursor-pointer  '/>
        </a>
      </div>

      <div className='w-full h-full '>
        <a className='flex items-center justify-center center'>
          <img src={img2} alt="" className='w-[90%] h-full saikat cursor-pointer' />
        </a>
      </div>

      <div className='w-full h-full '>
        <a className='flex items-center justify-center center'>
          <img src={img3} alt="" className='w-[90%] h-full saikat cursor-pointer '/>
        </a>
      </div>

      <div className='w-full h-full '>
        <a className='flex items-center justify-center center'>
          <img src={img4} alt="" className='w-[90%] h-full saikat cursor-pointer'  />
        </a>
      </div>
    </Slider>
    </div>
  )
}

export default BannerSlider
