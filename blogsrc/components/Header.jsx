import React from 'react'
import { menuItems } from "../data/generalData";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
        className="flex justify-between items-center py-5 px-[200px] bg-[#121111] text-[white]"
        style={{ position: "sticky", top: 0, zIndex: 2000 }}
      >
        <div>
          <h1 className="font-medium">Product</h1>
        </div>

        <ul className="flex items-center justify-between gap-[40px]">
          <li className="cursor-pointer text-xs hover:text-[#F7B405] font-medium transition duration-150 ease-out hover:ease-in">
            HOME
          </li>
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="text-xs hover:text-[#F7B405] cursor-pointer transition duration-150 ease-out hover:ease-in font-medium"
            >
              <Link to="myform">{item.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </div>
  )
}
