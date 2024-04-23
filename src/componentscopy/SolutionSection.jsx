import React from 'react'
import icon1 from '../assets/icons/cctv.png'
import icon2 from '../assets/icons/acess_control.png'
import icon3 from '../assets/icons/firefighting.png'
import icon4 from '../assets/icons/fire_detection.png'
import icon5 from '../assets/icons/fire_hydrant.png'
import icon6 from '../assets/icons/building_management.png'

export default function SolutionSection({header}) {
  return (
    <div className=' w-[90%] mx-auto  md:w-full'>
        {header ? 
        <h2 className='text-4xl mt-20 font-bold text-center'>{header}</h2>
         : ''}
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-20 text-center">
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className=' border-4 rounded-full p-1 border-[#d1d1d1]'>
                    <div className='bg-[#d1d1d1] p-5 border   rounded-full '>
                        <img src={icon1} alt=""  />
                    </div>
                </div>
                <h3 className='text-2xl font-bold'>Surveillance System</h3>
                <p className='text-sm'>Lborsperiores officiis quia quibusdam ducimus aut, labore in.</p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className=' border-4 rounded-full p-1 border-[#d1d1d1]'>
                    <div className='bg-[#d1d1d1] p-5 border   rounded-full '>
                        <img src={icon1} alt=""  />
                    </div>
                </div>
                <h3 className='text-2xl font-bold'>Access Control System</h3>
                <p className='text-sm'>Lborsperiores officiis quia quibusdam ducimus aut, labore in.</p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className=' border-4 rounded-full p-1 border-[#d1d1d1]'>
                    <div className='bg-[#d1d1d1] p-5 border   rounded-full '>
                        <img src={icon1} alt=""  />
                    </div>
                </div>
                <h3 className='text-2xl font-bold'>FM 200 Extinguishing</h3>
                <p className='text-sm'>Lborsperiores officiis quia quibusdam ducimus aut, labore in.</p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className=' border-4 rounded-full p-1 border-[#d1d1d1]'>
                    <div className='bg-[#d1d1d1] p-5 border   rounded-full '>
                        <img src={icon1} alt=""  />
                    </div>
                </div>
                <h3 className='text-2xl font-bold'>Fire Detection</h3>
                <p className='text-sm'>Lborsperiores officiis quia quibusdam ducimus aut, labore in.</p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className=' border-4 rounded-full p-1 border-[#d1d1d1]'>
                    <div className='bg-[#d1d1d1] p-5 border   rounded-full '>
                        <img src={icon2} alt=""  />
                    </div>
                </div>
                <h3 className='text-2xl font-bold'>Fire Hydrant</h3>
                <p className='text-[#5f5f5f] text-sm'>Lborsperiores officiis quia quibusdam ducimus aut, labore in.</p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className=' border-4 rounded-full p-1 border-[#d1d1d1]'>
                    <div className='bg-[#d1d1d1] p-5 border   rounded-full '>
                        <img src={icon3} alt=""  />
                    </div>
                </div>
                <h3 className='text-2xl font-bold'>Building Management System</h3>
                <p className='text-[#5f5f5f] text-sm'>Lborsperiores officiis quia quibusdam ducimus aut, labore in.</p>
            </div>
        </div>        
    </div>
  )
}
