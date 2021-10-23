import React from 'react'
import { useRef, useState,useEffect } from 'react'
import './DropDownMenu.css'
import { useDetectOutsideClick } from '../../utils/useDetectOutsideClick'
const DropDownMenu = (props) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  
    const handleActive = () => {
        setIsActive(!isActive)
    }

     return (
        <div className="menu-container">
            <button onClick={handleActive} className="menu-trigger">
                <span>Sort</span>
                <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                <li><a href="#">Alphabetical</a></li>
                <li><a href="#">Element</a></li>
                <li><a href="#">Rarity</a></li>
                </ul>
            </nav>
        </div>
     )
}
export default DropDownMenu