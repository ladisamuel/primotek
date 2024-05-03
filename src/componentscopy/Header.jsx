import React from 'react'

export default function Header() {
    
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
    <div className={`border py-3 z-40 h-[10%] flex flex-wrap items-center  justify-between px-[25px] md:px-[50px] lg:px-[100px]  text-sm`}>
        <div className="logoContainer">
            <p className="font-bold text-2xl text-[#fff]">Test <span className="text-[#8080ff]">NG</span></p>
        </div>
        <div className="menu">
            <ul className="hidde
            lg:flex justify-center gap-[20px]">
                {menu_items.map((item, index)=>(
                    <li className="fontbold text-xs uppercase py-2 hover:cursor-pointer text-[#fff] hover:text-[#8080ff]">{item.text} </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
