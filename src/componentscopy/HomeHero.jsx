import React from 'react'

export default function HomeHero() {
  return (
    
    <div className='h-[90%] z-50 flex flex-col justify-center gap-10'>
        <div className=' px-[25px] md:px-[100px] lg:px-[200px]  flex items-center gap-10 justify-center z-[9999]'>
            <div className='md:w-[50%] text-left flex flex-col gap-10'>
                <p className=' text-sm text-[#07072c]'>PREPARE FOR NEW FUTURE</p>
                <h1 className={`h1_text_gradient_dark text-5xl text-[#595959]`}>Powering your world with precision and efficiency.</h1>
                <button className=' bg-[#8080ff] rounded-lg text-white w-fit py-1 px-6 '>Know More</button>
            </div>
            <div className="hidden md:block w-[50%] overflow-hidden">
                <img src={SliderImg} alt="" className='filter backdrop-grayscale-0  contrat-200 rounded-3xl float-right ' />
                {/* <div className='p-5 rounded-3xl bg-[#c3c2c2] h-[250px]'></div> */}
                {/* <SliderComponent /> */}
                {/* <HeroSlider  /> */}
            </div>
        </div>
        <hr className='mx-[200px]'/>
        <div className={`text-[#595959] px-[25px] md:px-[100px] lg:px-[200px] justify-between flex flex-wrap`}>
            {sponsors.map((item, index)=>(
                <div className="flex flex-col gap-2 md:w-[20%]">    
                    <h1>{item.h1} </h1>
                    <p className=' text-xs'>{item.p.substr(0, 50)} </p>
                    <p className='hover:text-[#9494fb] hover:cursor-pointer text-[#8080ff] flex items-center gap-3'>view <i className='pi pi-arrow-right text-xs'></i></p>
                </div>
            ))}

        </div>
    </div>
  )
}
