import React, { useEffect, useState } from 'react'

export default function Gradient_Btn( {bg} ) {
  const [color, setColor] = useState()
  // useEffect(()=>{
  //   setColor(bg + ' ')
  // }, [])
  console.log(bg);
  console.log(typeof(bg));
  return (
    // border_gradient gradient_bg rounded-full text-[#4869e8] w-fit 
    <div className="border_gradient">
      <button className={bg}>Get Started</button>
    </div>
  )
}
