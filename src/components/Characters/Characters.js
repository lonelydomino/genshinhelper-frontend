import React from 'react'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchCharacters, sortCharacters } from '../../actions/characterActions'
import './Characters.css'
import CharacterIcon from './CharacterIcon'
import DropDownMenu from './DropDownMenu'





const CharactersContainer = (props) => {

    useEffect(() => {
        props.fetchCharacters()
    }, []);
     return (
     <div className="characters-container">
        <h1>Characters</h1><DropDownMenu />
        {props.characters.map(character => <CharacterIcon character={character}/>)}
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
        sortCharacters: () => dispatch(sortCharacters())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer)