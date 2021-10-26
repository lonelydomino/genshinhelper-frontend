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
               return "red"
          case 'cryo':
               return "white"
          case 'geo':
               return "yellow"
          case 'anemo':
               return "green"
          case 'hydro':
               return "blue"
          case 'electro':
               return "violet"     
          default: return
     }
}


const CharacterIcon = (props) => {
     return (
     <div className={"character-icon"}>
        {/* {characterStars(props.character.rarity)} */}
        <img className={"character-icon-image  " + characterColor(props.character)} src={props.character.image} alt={props.character.name}/>
     </div>
     )
}
export default CharacterIcon