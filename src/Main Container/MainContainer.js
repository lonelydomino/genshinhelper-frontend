import React from 'react'
import Clock from '../components/Clock/Clock'
import Domains from '../components/Domains/Domains'
import Characters from '../components/Characters/Characters'
import './MainContainer.css'


const MainContainer = (props) => {
     return (
        <div className="main-container">           
                <Clock />
                <Characters />  
                <Domains />
        </div>
     )
}
export default MainContainer