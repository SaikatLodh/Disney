import React from 'react'
import img from '../assets/image/cta-logo-one.png'
import img2 from '../assets/image/cta-logo-two.png'



const Login = () => {
  return (
    <>
     <div className='w-full h-screen bg-black'>
     <div className='image flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <img src={img} alt="" className='w-[500px] object-cover' />

          <button className='w-[500px] h-[60px] bg-[#075EE6] text-[white] my-5 hover:-translate-y-1  transition ease-in-out' >GET ALL THERE</button>

          <p className='text-[white] w-[57%] text-center'>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
               As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1
              </p>

              <img src={img2} alt="" className='my-8'/>

        </div>
     </div>
     </div>
    </>
   
  )
}

export default Login
