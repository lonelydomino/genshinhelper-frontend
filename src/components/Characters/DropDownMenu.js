import React from 'react'
import { useRef, useState,useEffect } from 'react'
import './DropDownMenu.css'
import { useDetectOutsideClick } from '../../utils/useDetectOutsideClick'
import { connect } from 'react-redux'

import { fetchCharacters, sortCharactersAbc,sortCharactersElement,sortCharactersRarity } from '../../actions/characterActions'

const DropDownMenu = (props) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  
    const handleActive = () => {
        setIsActive(!isActive)
    }
    const handleSort = (sort) => {
        sort()
    }
     return (
        <div className="menu-container">
            <button onClick={handleActive} className="menu-trigger">
                <span>Sort</span>
                <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li onClick={() => handleSort(props.sortCharactersAbc)}>Alphabetical</li>
                    <li onClick={() => handleSort(props.sortCharactersElement)}>Element</li>
                    <li onClick={() => handleSort(props.sortCharactersRarity)}>Rarity</li>
                </ul>
            </nav>
        </div>
     )
}
const mapStateToProps = (state) => {
    return {
        characters: state.characters.characters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: () => dispatch(fetchCharacters()),
        sortCharactersAbc: () => dispatch(sortCharactersAbc()),
        sortCharactersRarity: () => dispatch(sortCharactersRarity()),
        sortCharactersElement: () => dispatch(sortCharactersElement())


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu)