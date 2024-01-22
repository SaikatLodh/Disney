import React from 'react'
import { TbArrowNarrowRight } from "react-icons/tb";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import img from '../assets/image/google-playstore.webp'
import img2 from '../assets/image/ios-appstore.webp'

const Footer = () => {
    return (
        <div className='p-6'>
            <div className='flex justify-between w-full'>
                <div><h5 className='text-[white] text-[22px]'> Company</h5>
                    <div>
                        <h6 className='text-[#777373] mt-7 cursor-pointer'>About Us</h6>
                        <h6 className='text-[#777373] mt-2 cursor-pointer'>Careers</h6>
                    </div>
                </div>

                <div><h5 className='text-[white] cursor-pointer text-[22px]'>View Website in</h5>
                    <div>
                        <h6 className='text-[#777373] mt-7 flex items-center gap-2 cursor-pointer'> <TbArrowNarrowRight /> English</h6>

                    </div>
                </div>


                <div><h5 className='text-[white] text-[22px]'>Need Help?</h5>
                    <div>
                        <h6 className='text-[#777373] mt-7 cursor-pointer'>Visit Help Center</h6>
                        <h6 className='text-[#777373] mt-2 cursor-pointer'> Share feedback</h6>
                    </div>
                </div>

                <div><h5 className='text-[white] text-[22px]'>Contact us</h5>
                    <div className='flex items-end gap-3'>
                        <h6 className='text-[#777373] mt-7 text-[30px] cursor-pointer'><CiFacebook /></h6>
                        <h6 className='text-[#777373] mt-2 text-[30px] cursor-pointer'><CiTwitter /></h6>
                    </div>
                </div>
            </div>
            <div className='flex justify-between my-8'>
                <div><h6 className='text-[#777373] pb-3'>© 2023 STAR. All Rights Reserved.</h6>
                    <div className='flex items-center gap-2'>
                        <h6 className='text-[#777373]'>Terms Of Use</h6>
                        <h6 className='text-[#777373]'>Privacy Policy</h6>
                        <h6 className='text-[#777373]'>FAQ</h6>
                    </div>

                </div>

                <div className='flex items-center gap-3 cursor-pointer'>
                    <img src={img} alt="" className='w-[150px]' />
                    <img src={img2} alt="" className='w-[150px]' />
                </div>
            </div>
        </div>
    )
}

export default Footer
