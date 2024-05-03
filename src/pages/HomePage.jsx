import { React, useEffect, useState } from 'react';
import './HomePage.css'
import Home_header_hero from '../components/Home_header_hero';
import Separator from '../components/Separator';
import SolutionSection from '../componentscopy/SolutionSection';
import Contacts from '../componentscopy/Contacts';
import ImageSection from '../assets/backgrounds/home-8.jpg';
import Gradient_Btn from '../components/Gradient_Btn';
import numberImg from '../assets/icons/cctv.png';
import TitiOmo from '../assets/persons/engr_titi.png';
import Bode from '../assets/persons/bode.png';
import Kayode from '../assets/persons/kayode.png';
import Jibola from '../assets/persons/jibola.png';
import Zaynab from '../assets/persons/zaynab.png';
import Tobi from '../assets/persons/tobi.png';
import Img1 from '../assets/icons/download.avif'
import Img2 from '../assets/icons/949.jpg'
import Img3 from '../assets/icons/video-surveillance.png'



function HomePage() {

    const Teams = [
        {
            name: 'Engr Titi Omo-Ettu',
            position: 'Chairman',
            linkedin:'https://www.linkedin.com/in/titi-omo-ettu-44b632116/?originalSubdomain=ng',
            img: TitiOmo,
            images: 'engr_titi.png'
        },
        {
            name: 'Olabode Idowu-Bismark',
            position: 'Executive Vice Chairman',
            linkedin:'https://www.linkedin.com/in/bode-idowu-bismark-mnse-coren-ph-d-17149716/',
            img: Bode,
            images: 'bode.png'
        },
        {
            name: 'Kayode Akinfenwa',
            position: 'Managing Director',
            linkedin:'https://www.linkedin.com/in/kayode-akinfenwa-17b381108/',
            img: Kayode,
            images: 'kayode.png'
        },
        {
            name: 'Zaynab Oshinberu',
            position: 'Operations Manager',
            linkedin:'https://www.linkedin.com/in/zaynab-oshinberu-13b461161/',
            img: Zaynab,
            images: 'jibola.png'
        },
        {
            name: 'Ajibola Azeez Yusuf',
            position: 'Project Manager',
            linkedin:'https://www.linkedin.com/in/ajibola-azeez-yusuf-7913b9166/',
            img: Jibola,
            images: 'zaynab.png'
        },
        {
            position: 'Cheif Technical Officer',
            name: 'Oluwatobi Idowu-Bismark',
            linkedin:'https://www.linkedin.com/in/tobi-bismark-b87779128/',
            img: Tobi,
            images: 'tobi.png'
        },
    ]
    const [isVisible, setIsVisible] = useState(false);

    // // Function to check if the element is in the viewport
    // const isInViewport = (element) => {
    //     const rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // };

    // // Function to handle scroll event
    // const handleScroll = () => {
    //     const container = document.querySelector('.container');
    //     if (isInViewport(container)) {
    //         setIsVisible(true);
    //     }
    // };

    // // Effect to add scroll event listener when component mounts
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []); // Empty dependency array ensures this effect runs only once
    
    return (
        <div>
            <Home_header_hero />
            <Separator />
            <div className={` ${isVisible ? 'show' : ''} w-[70%] lg:w-[40%] mx-auto text-center `}>
                <h2 className='text-2xl mb-2 font-sans font-bold'>We Provide Best Engineering Solution To Client With Their Business Problem</h2>
                <p className='text-sm'>Including CCTV, access control, PBX, and home automation. Our article reveals the benefits of these cutting-edge technologies and how they can transform your property.</p>
            </div>
            <Separator />
            <div className="text-center">
                <Gradient_Btn bg="bg-white" />
            </div>
            <Separator />
            <div className={`md:px-[50px] lg:px-[100px] pb-10 mb-10 ${isVisible ? 'show' : ''}`}>
                <SolutionSection />
            </div>
            <div className='slant_t_r relative h-[150px] z-0  lg:-mb-24 '>
                <div className="absolute bottom-0 z-50 left-1/2 -translate-x-1/2  ">
                    <Separator my='my-0'/>
                </div>
            </div>
            <div className="slant_b_r relative bg-[rgb(35,35,35)] pt-10">
                <div className="absolute top-0 z-50 left-1/2 -translate-x-1/2 p-2  ">
                    <Separator my='my-0' color='border-white' />
                </div>
                <div className="my-20 md:px-[100px] lg:px-[20%] flex justify-center flex-wrap pt-20 min-h-[100px]">
                    <p className='services_list '><i className='pi pi-phone text-[white]'></i> Surveillance System</p>
                    <p className='services_list'><i className='pi pi-phone text-[white]'></i> Access Control System</p>
                    <p className='services_list'><i className='pi pi-phone text-[white]'></i> FM 200 Extinguishing</p>
                    <p className='services_list'><i className='pi pi-phone text-[white]'></i> Fire Detection</p>
                    <p className='services_list'><i className='pi pi-phone text-[white]'></i> Fire Hydrant</p>
                    <p className='services_list'><i className='pi pi-phone text-[white]'></i> Building Management System</p>
                </div>
                
                <div className="px-[25px] md:px-[50px] xs:px-5 pt-20 pb-10 lg:px-[100px] relative ">
                    <div className="lg:flex items-center gap-20">
                        <div className="lg:w-[50%] text-white flex flex-col gap-7 py-1 mb-20 ">
                            
                            <p className='text-xs text-white'>WHO WE ARE</p>
                            <h1 className='text-3xl'>We run all kinds of software services that vow your success</h1>
                            <p className='text-white'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                            <div className="flex flex-start items-center gap-3 rounded-lg bg-[#4869e8] p-10">
                                <div className=" rounded-md w-fit"><i className="pi pi-bolt text-2xl"></i></div>
                                <p className='text-white'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote.</p>
                            </div>
                            <div className="flex  items-center justify-center">
                                <div className="pr-3">
                                    <div className='mb-3'>
                                        <i className="pi pi-arrow-right text-xs text-[#4869e8] p-1 mr-2 rounded-full bg-white"></i>
                                        <span className='text-sm font-bold'> Expert Team</span>
                                    </div>
                                    <p className='text-white text-xs'>Accelerate innovation with world-class tech teams</p>
                                </div>
                                <div className="pr-3">
                                    <div className='mb-3'>
                                        <i className="pi pi-arrow-right text-xs text-[#4869e8] p-1 mr-2 rounded-full bg-white"></i>
                                        <span className='text-sm font-bold'> Expert Team</span>
                                    </div>
                                    <p className='text-white text-xs'>Accelerate innovation with world-class tech teams</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[50%]">
                            <div className='rounded-2xl overflow-hidden'>
                                <img src={ImageSection} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Separator my='my-[0]' color='border-white'/>

                {/* <div className=''>
                    <Separator color='border-white absolute bottom-[20px] left-1/2  -translate-x-1/2' />
                </div> */}
                {/*  absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2  */}
                {/*   rounded-5 w-fit my-2 border_gradient */}
                {/* <div className='border border-red-400 z-[50] '>
                    <Separator color='border-white'/>
                    <div className='text-center '>
                        <Gradient_Btn/>
                    </div>
                    <Separator />
                </div> */}
                {/* <div className='pt-1 bg-[white]  '>
                    <Separator />

                </div> */}

            </div>
            <Separator my='my-[0]' />
            <div>
                <div className='px-[25px] md:px-[50px] xs:px-5 lg:px-[100px] pt-20 bg[red] m-auto'>
                    <div className='grid  grid-cols-1 lg:grid-cols-3 items-center gap-y-10'>
                        <div className='flex items-center  justify-center lg:justify-start '>
                            <h4 className=' text-[10rem] text-[#9999ff] font-bold'>01</h4>
                            <p className='text-4xl -ml-5 text-[#303030]'>Mechanical Fire Fighting</p>
                        </div>
                        <div className='w-[250px] h-[250px] m-auto border-4 border-[#9999ff] flex items-center justify-center rounded-full overflow-hidden'>
                            <img src={Img1} className=' w-full h-full m-auto rounded-ful' alt="" />
                        </div>
                        <p className='float-end text-[#9999ff]   m-auto max-w-[400px] lg:w-full text-center'>We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.</p>
                    </div>
                </div>
                <div className='px-[25px] md:px-[50px] xs:px-5 lg:px-[100px] pt-20 bg[red] m-auto'>
                    <div className='grid  grid-cols-1 lg:grid-cols-3 items-center  gap-y-10 '>
                        <p className='order-last lg:order-first float-end text-[#ffa366]  m-auto max-w-[400px] lg:w-full text-center'>We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.</p>
                        <div className='w-[250px] h-[250px] m-auto border-4 border-[#ffa366] flex items-center justify-center rounded-full overflow-hidden'>
                            <img src={Img2} className=' w-full bg-white h-full m-auto rounded-ful' alt="" />
                        </div>
                        <div className='order-first lg:order-last flex items-center  justify-center lg:justify-start'>
                            <h4 className=' text-[10rem] text-[#ffa366] font-bold'>02</h4>
                            <p className='text-4xl -ml-5 text-[#303030]'>Extra Low Voltage</p>
                        </div>
                        
                    </div>
                </div>
                <div className='px-[25px] md:px-[50px] xs:px-5 lg:px-[100px] pt-20 bg[red] m-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 items-center gap-y-10'>
                        <div className='flex items-center justify-center lg:justify-start '>
                            <h4 className=' text-[10rem] text-[#b4ee5d] font-bold'>03</h4>
                            <p className='text-4xl -ml-5 text-[#303030]'>Extra Low Voltage</p>
                        </div>
                        <div className='w-[250px] h-[250px] m-auto border-4 border-[#b4ee5d] flex items-center justify-center rounded-full overflow-hidden'>
                            <img src={Img3} className=' w-full  h-full m-auto rounded-ful' alt="" />
                        </div>
                        <p className='float-end text-[#b4ee5d] m-auto max-w-[400px] lg:w-full text-center'>We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.</p>
                    </div>
                </div>

                <Separator />
                <div className="text-center">
                    <Gradient_Btn bg="bg-white" />
                </div>
                <Separator />
                
                <div className=" my-5 md:px-[100px] lg:px-[20%] flex justify-center flex-wrap">
                    <p className='services_list '><i className='pi pi-phone text-[white]'></i> Surveillance System</p>
                    <p className='services_list'><i className='pi pi-phone text-[white]'></i> Access Control System</p>
                    <p className='services_list'><i className='pi pi-phone text-[white]'></i> FM 200 Extinguishing</p>
                    <p className='services_list'><i className='pi pi-phone text-[white]'></i> Fire Detection</p>
                    <p className='services_list'><i className='pi pi-phone text-[white]'></i> Fire Hydrant</p>
                    <p className='services_list'><i className='pi pi-phone text-[white]'></i> Building Management System</p>
                </div>
                
                <Separator />
                    
                <div>
                    <div className='w-[70%] lg:w-[40%] mx-auto text-center '>
                        <h2 className='text-2xl mb-2 font-sans font-bold'>Amazing Team</h2>
                        <p className='text-sm'>Meet our exceptional team of passionate engineers committed to delivering high-quality solutions for you.</p>
                    </div>

                    <Separator />
                    <div className="px-[25px] md:px-[50px] lg:px-[100px] my-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        
                        {Teams.map((item, index)=>(
                            <div key={index} className=''>
                                <div className="team_cover ">
                                    <img src={item.img} alt="" className='w-full '/>
                                    <div className='team_content '>
                                        <div className='flex flex-col text-center'>

                                            <p className='text-white text-lg'>{item.name} </p>
                                            <p className=' text-white'>{item.position} </p>
                                            <i className="pi pi-linkedin bg-whit text-white text-lg hover:cursor-pointer"></i>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        ))
                            
                        }
                    </div>

                </div>
                {/* <Separator /> */}
            </div>
            <Separator my='my-[0]' />
            <div className="bg-[grey] pb-20">
                <Separator my='my-[0] '  color='border-white' />
            
                <div className="my20 md:px-[50px] lg:px-[100px] flex items-start justify-center flex-wrap pt-20 min-h-[100px]">
                    <Contacts />
                </div>            
            </div>


        </div>

    )
  }
  
export default HomePage