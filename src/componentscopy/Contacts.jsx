import React from 'react'
import icon1 from '../assets/icons/cctv.png'
import icon2 from '../assets/icons/acess_control.png'
import icon3 from '../assets/icons/firefighting.png'
import icon4 from '../assets/icons/fire_detection.png'
import icon5 from '../assets/icons/fire_hydrant.png'
import icon6 from '../assets/icons/building_management.png'

export default function Contacts({header}) {
  return (
    <div className=' w-[90%] mx-auto  md:w-full'>
        {header ? 
        <h2 className='text-4xl mt-20 font-bold text-center'>{header}</h2>
         : ''}
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-20 items-start text-center">
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className=' border-4 rounded-full p-1 border-[#d1d1d1]'>
                    <div className='bg-[#d1d1d1] p-5 border   rounded-full '>
                        <img src={icon1} alt=""  />
                    </div>
                </div>
                <h3 className='text-lg font-bold  text-white'>+234-802-3010022</h3>
                <p className='textsm text-white'>Call Us</p>
            </div>
            
            <div className="flex flex-col gap-3 items-center text-white justify-center">
                <div className=' border-4 rounded-full p-1 border-[#d1d1d1]'>
                    <div className='bg-[#d1d1d1] p-5 border   rounded-full '>
                        <img src={icon1} alt=""  />
                    </div>
                </div>
                <h3 className='text-lg font-bold max-w-[400px] lg:w-full'>158, 3, LSDPC Phase 4, Oba Ogunji RD , Agege, Lagos, Nigeria</h3>
                <p className='text-sm text-white'>Visit Us.</p>
            </div>
            
            <div className="flex flex-col gap-3 items-center  text-white justify-center">
                <div className=' border-4 rounded-full p-1 border-[#d1d1d1]'>
                    <div className='bg-[#d1d1d1] p-5 border   rounded-full '>
                        <img src={icon1} alt=""  />
                    </div>
                </div>
                <h3 className='text-lg font-bold'>contact.us@primotekng.net</h3>
                <p className='text-sm  text-white'>Email Us</p>
            </div>
            
        </div>        
    </div>
  )
}
