import React from 'react'
import './CharacterIcon.css'
const CharacterIcon = (props) => {
     return (
     <div className="character-icon">
        <p>{props.character.name}</p>
        <p>{props.character.rarity}</p>
     </div>
     )
}
export default CharacterIcon