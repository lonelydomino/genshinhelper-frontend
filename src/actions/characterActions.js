export const fetchCharacters = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CHARACTERS'})
        fetch('http://localhost:3000/characters')
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: 'ADD_CHARACTERS', characters: json})
        })
    }

}