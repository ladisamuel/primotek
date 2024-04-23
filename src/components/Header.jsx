import React from 'react'
import Logo from './Logo'

export default function Header(bg) {

    const menu_items = [
        {
            link: '/',
            text: 'Home'
        } ,
        {
            link: '/about',
            text: 'About'
        } ,
        {
            link: '/services',
            text: 'Services'
        } ,
        {
            link: '/portfolio',
            text: 'Portfolio'
        } ,
        {
            link: '/contact',
            text: 'Contact'
        } ,
    ]
  return (
    <div className={`${bg['bg']}
     py-3 z-40 h-[10%] flex flex-wrap items-center  justify-between px-[25px] md:px-[50px] lg:px-[100px]  text-sm`}>
        <Logo />
        <div className="menu hidden lg:block">
            <ul className="flex justify-center gap-[20px]">
                {menu_items.map((item, index)=>(
                    <li key={index} className="fontbold text-xs uppercase py-2 hover:cursor-pointer text-[#fff] hover:text-[#8080ff]">{item.text} </li>
                ))}
            </ul>
        </div>
        <div className="mobile_menu lg:hidden">
            <i className="pi pi-bars text-white text-4xl"></i>
        </div>
    </div>
  )
}
