import React from 'react'

export default function Separator({color, my}) {
  return (
    <div className={`h-[100px] my-8 mx-auto border-dashed w-fit border-2 border-[#4869e8] ${color}  ${my}`}></div>
  )
}
