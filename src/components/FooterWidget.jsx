import React from 'react'
import Logo from './Logo'

export default function FooterWidget() {
  return (
    <div className='FooterWidget  py-5 px-[25px] md:px-[50px] lg:px-[100px] '>
        <div className="grid grid-row lg:grid-cols-12 gap-5">
            <div className=" py-3 col-span-5 flex flex-col gap-4">
                <Logo />                
                <p className='text-sm'>contact.us@primotekng.net</p>
                <p className='text-sm'>158, 3, LSDPC Phase 4, Oba Ogunji RD , Agege, Lagos, Nigeria</p>
                <p className='text-white text-lg'>+234-802-301-0022</p>
            </div>
            <div className=" py-3 col-span-3  flex flex-col gap-4">
                <p className='text-2xl text-white'>Company</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Support</p>
                <p>FAQ</p>
            </div>
            <div className=" py-3 col-span-2">
                <p className='text-2xl text-white'>Quick Links</p>
                <p>About</p>
                <p>Services</p>
                <p>Team</p>
                <p>Contact</p>

            </div>
        </div>
    </div>
  )
}
