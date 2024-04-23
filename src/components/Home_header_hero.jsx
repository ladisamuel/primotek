import React from 'react'
import Header from './Header';
import Gradient_Btn from './Gradient_Btn';

export default function Home_header_hero() {
  return (
    <div className=' home_hero_polygon w-full h-[80vh] mdh-[70vh] lg:h-[110vh] relative '>
            <Header />
            {/* <Header bg='bg-[rgba(0,0,0,0.5)] ' /> */}
            <div className="hero flex items-center justify-center h-[90%] ">
                
                <div className='md:w-[80%] flex flex-col gap-10 item-center justify-center text-center'>
                    <p className='text-lg text-[#fff]'>PREPARE FOR NEW FUTURE</p>
                    <h1 className="text-5xl md:text-7xl text-white">Powering your world with <span className='h1_text_gradient_dark'>precision</span> and <span className='h1_text_gradient_dark'>efficiency</span>.</h1>
                    <Gradient_Btn />
                </div>
            </div>
            <div className='absolute top-[90%] right-2/4 translate-x-1/2'>
                <button className='bounce_arrow'><i className="pi pi-arrow-down text-white"></i> </button>
            </div>
            
    </div>
  )
}
