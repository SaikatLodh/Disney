import React from 'react'
import img from '../assets/image/viewers-disney.png'
import img2 from '../assets/image/viewers-marvel.png'
import img3 from '../assets/image/viewers-national.png'
import img4 from '../assets/image/viewers-pixar.png'
import img5 from '../assets/image/viewers-starwars.png'
import video from '../assets/video/1564674844-disney.mp4'
import video1 from '../assets/video/1564676115-marvel.mp4'
import video2 from '../assets/video/1564676296-national-geographic.mp4'
import video3 from '../assets/video/1564676714-pixar.mp4'
import video4 from '../assets/video/1608229455-star-wars.mp4'


const HoverVideo = () => {
  return (
    <div>

        <div className='flex items-center justify-between gap-[25px] px-6 '>

            <div className='relative cursor-pointer overflow-hidden rounded-[10px] video'>
             <img src={img} alt="" className='w-[100%] h-[100%] object-cover hover:scale-125 ease-in-out duration-300 ' />
             
             <video autoPlay={true} loop={true} playsInline={true} className='absolute object-cover top-0 left-0 w-full hover:scale-125 ease-in-out duration-300 opacity-0 hover:opacity-100'>
          <source src={video} type="video/mp4" />
        </video>

            </div>

            <div className='relative cursor-pointer overflow-hidden rounded-[10px] video' >
             <img src={img2} alt="" className='w-[100%] h-[100%] object-cover hover:scale-125 ease-in-out duration-300 '/>
             <video autoPlay={true} loop={true} playsInline={true} className='absolute object-cover top-0 left-0 w-full hover:scale-125 ease-in-out duration-300 opacity-0 hover:opacity-100'>
          <source src={video1} type="video/mp4" />
        </video>
            </div>

            <div className='relative cursor-pointer overflow-hidden rounded-[10px] video'>
             <img src={img3} alt="" className='w-[100%] h-[100%] object-cover hover:scale-125 ease-in-out duration-300'  />
             <video autoPlay={true} loop={true} playsInline={true} className='absolute object-cover top-0 left-0 w-full hover:scale-125 ease-in-out duration-300 opacity-0 hover:opacity-100'>
          <source src={video2} type="video/mp4" />
        </video>
            </div>

            <div className='relative cursor-pointer overflow-hidden rounded-[10px] video'>
             <img src={img4} alt="" className='w-[100%] h-[100%] object-cover hover:scale-125 ease-in-out duration-300' />
             <video autoPlay={true} loop={true} playsInline={true} className='absolute object-cover top-0 left-0 w-full hover:scale-125 ease-in-out duration-300 opacity-0 hover:opacity-100'>
          <source src={video3} type="video/mp4" />
        </video>
            </div>


            <div className='relative cursor-pointer overflow-hidden rounded-[10px] video'>
             <img src={img5} alt=""  className='w-[100%] h-[100%] object-cover hover:scale-125 ease-in-out duration-300'/>
             <video autoPlay={true} loop={true} playsInline={true} className='absolute object-cover top-0 left-0 w-full hover:scale-125 ease-in-out duration-300 opacity-0 hover:opacity-100'>
          <source src={video4} type="video/mp4" />
        </video>
            </div>

            
        </div>
      
    </div>
  )
}

export default HoverVideo
