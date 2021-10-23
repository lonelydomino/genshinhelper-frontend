const charactersReducer = (state ={characters: [], loading:false}, action) => {
    switch(action.type){
        case 'LOADING_CHARACTERS':
            return {
                ...state,
                characters: [...state.characters],
                loading: true
            }
        case 'SORTING_CHARACTERS':

            let array = state.characters.sort((a,b) => {
                return (a.name > b.name) - (a.name < b.name)
            })
            return {
                ...state,
                characters: [...array]
            }
        case 'ADD_CHARACTERS':
            return {
                ...state,
                characters: action.characters,
                loading: false
            }
        default: return state
    }

}
export default charactersReducer