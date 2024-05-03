import { React, useEffect, useState } from 'react';
import SliderImg from '../assets/backgrounds/slider-1.jpg';
import SolutionSection from '../componentscopy/SolutionSection';
// import HeroSlider from '../components/HeroSlider';
// import SliderComponent from "../components/Slider";

function Home() {
  const [show, setShow] = useState(false);

    const [mode, setMode] = useState(true)
    const [theme, setTheme] = useState('')
    const [textColor, setTextColor] = useState('')
    const changeTheme = () => {
        setTheme(!theme)
    }
    const sponsors = [
        {
            h1: 'Mit',
            p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repellat.',
            link: '',
        },
        {
            h1: 'Mit',
            p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repellat.',
            link: '',
        },
        {
            h1: 'Mit',
            p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repellat.',
            link: '',
        },
        {
            h1: 'Mit',
            p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repellat.',
            link: '',
        },  
    ]

    const checkTheme = () => {
        pass
        setMode(!mode)
        if (mode === false) {
            const theme = 'bg-white'
            const textColor = 'text-[#595959]'
            setTheme(theme)
            setTextColor(textColor)
        } else {
            const theme = 'bg-[#00001a]'
            const textColor = 'text-[#e6e6e6]'
            setTheme(theme)
            setTextColor(textColor)
        }
    }
        // useEffect(()=>{
        //     checkTheme()
        // }, [])

    return (
      <div className={theme}>
        {/* header and hero section  */}
        <div className="Header_Hero w-full h-[100vh] bg[url('/src/assets/backgrounds/schedule-bg.jpg')] bg-cover bg-no-repeat bg-center relative ">
            <button onClick={checkTheme} className='cursor-pointer border bg-white rounded-full w-fit p-2 hover:drop-shadow-lg flex justify-center items-center absolute bottom-[5%] right-[5%]'>
                {mode === true ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#00001a" className="bi bi-moon-fill" viewBox="0 0 16 16">
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                            </svg>
                
                :
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                    fill="#00001a" class="bi bi-brightness-low-fill" viewBox="0 0 16 16">
                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707"/>
                </svg>
                }
            </button>
            <div className= 'absolute w-[400px] h-[400px] bottom-[0%] left-[0px] z-0 hero_particle_square'></div>
            <div className=" absolute w-[150px] h-[150px] top-[10%] left-[150px] z-0 hero_particle_circle rounded-full"></div>
            <div className=" absolute w-[400px] h-[400px] top-[30%] right-[0px] z-0 hero_particle_circle rounded-full"></div>
  
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
                        <div key={index} className="flex flex-col gap-2 md:w-[20%]">    
                            <h1>{item.h1} </h1>
                            <p className=' text-xs'>{item.p.substr(0, 50)} </p>
                            <p className='hover:text-[#9494fb] hover:cursor-pointer text-[#8080ff] flex items-center gap-3'>view <i className='pi pi-arrow-right text-xs'></i></p>
                        </div>
                    ))}

                </div>
            </div>
            
        </div>
        <div className="section  ">
            <div className={`text-[#595959] py-10 md:px-[100px] lg:px-[20%] flex justify-center flex-wrap `}>
                <p className='border flex items-center gap-3 px-5 py-3 rounded-2xl mx-3 my-1'><i className='pi pi-phone text-[#8080ff]'></i> Surveillance System</p>
                <p className='border flex items-center gap-3 px-5 py-3 rounded-2xl mx-3 my-1'><i className='pi pi-phone text-[#8080ff]'></i> Access Control System</p>
                <p className='border flex items-center gap-3 px-5 py-3 rounded-2xl mx-3 my-1'><i className='pi pi-phone text-[#8080ff]'></i> FM 200 Extinguishing</p>
                <p className='border flex items-center gap-3 px-5 py-3 rounded-2xl mx-3 my-1'><i className='pi pi-phone text-[#8080ff]'></i> Fire Detection</p>
                <p className='border flex items-center gap-3 px-5 py-3 rounded-2xl mx-3 my-1'><i className='pi pi-phone text-[#8080ff]'></i> Fire Hydrant</p>
                <p className='border flex items-center gap-3 px-5 py-3 rounded-2xl mx-3 my-1'><i className='pi pi-phone text-[#8080ff]'></i> Building Management System</p>
            </div>
            <div className="md:flex items-center gap-5 md:px-[100px] xs:px-5 py-20 lg:px-[200px] ">
                <div className="md:w-[50%] flex flex-col gap-7 py-1 ">
                    <p className='text-xs'>WHO WE ARE</p>
                    <h1 className='text-3xl'>We run all kinds of software services that vow your success</h1>
                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                    <div className="flex flex-start gap-3 rounded-lg bg-[#8080ff7a] p-10">
                        <div className="bg-[#8080ff] rounded-md p-5 w-fit"></div>
                        <p className=''>Accelerate innovation with world-class tech teams We’ll match you to an entire remote.</p>
                    </div>
                    <div className="flex  items-center justify-center">
                        <div className="pr-3">
                            <div className='mb-3'>
                                <i className="pi pi-arrow-right text-xs text-white p-1 mr-2 rounded-full bg-black"></i>
                                <span className='text-sm font-bold'> Expert Team</span>
                            </div>
                            <p>Accelerate innovation with world-class tech teams</p>
                        </div>
                        <div className="pr-3">
                            <div className='mb-3'>
                                <i className="pi pi-arrow-right text-xs text-white p-1 mr-2 rounded-full bg-black"></i>
                                <span className='text-sm font-bold'> Expert Team</span>
                            </div>
                            <p>Accelerate innovation with world-class tech teams</p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] py-1 border"></div>
            </div>
        </div>
        <div className="bg-[#e3e3e3] border md:px-[100px] xs:px-5 py-20 lg:px-[200px]">
            <SolutionSection header="Total Solution In One" />
        </div>
      </div>
    )
  }
  
export default Home