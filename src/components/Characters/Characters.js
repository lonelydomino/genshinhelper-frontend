import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchCharacters } from '../../actions/characterActions'
import './Characters.css'
const CharactersContainer = (props) => {
    useEffect(() => {
        props.fetchCharacters()
    }, []);
     return (
     <div className="characters-container">
        {props.characters.map(character => <li key={character.id}>{character.name} - {character.rarity}</li>)}
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
        fetchCharacters: () => dispatch(fetchCharacters())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer)