import React from 'react'
import './CharacterIcon.css'


const characterStars = (stars) => {
     let string = ''
     // debugger
     for (let i = 0; i < stars; i++) {
          // debugger
          string += '⭐️';
        }
        return <div>{string}</div>
}


const CharacterIcon = (props) => {
     return (
     <div className="character-icon">
        <p>{props.character.name}</p>
        {characterStars(props.character.rarity)}
     </div>
     )
}
export default CharacterIcon