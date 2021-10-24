import React from 'react'
import './CharacterIcon.css'


const characterStars = (stars) => {
     let string = ''
     for (let i = 0; i < stars; i++) {
          string += '⭐️';
        }
        return <div>{string}</div>
}
const characterColor = (character) => {

     switch(character.vision){
          case 'pyro':
               return "character-icon red"
          case 'cryo':
               return "character-icon white"
          case 'geo':
               return "character-icon yellow"
          case 'anemo':
               return "character-icon green"
          case 'hydro':
               return "character-icon blue"
          case 'electro':
               return "character-icon violet"     
          default: return
     }
}


const CharacterIcon = (props) => {
     return (
     <div className={characterColor(props.character)}>
        <p>{props.character.name}</p>
        {characterStars(props.character.rarity)}
     </div>
     )
}
export default CharacterIcon