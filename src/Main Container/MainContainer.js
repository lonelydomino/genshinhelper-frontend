import React from 'react'
import Clock from '../components/Clock/Clock'
import Domains from '../components/Domains/Domains'
import Characters from '../components/Characters/Characters'
import './MainContainer.css'


const getDayOfTheWeek = () => {
        const date = new Date()
        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        let day = weekday[date.getDay()];
        return day

}

const MainContainer = (props) => {
        
     return (
        <div className="main-container">  
                <Clock />
                <Characters />  
                <Domains currentDay={getDayOfTheWeek()}/>
        </div>
     )
}
export default MainContainer