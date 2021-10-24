const charactersReducer = (state ={characters: [], loading:false}, action) => {
    let array = []
    switch(action.type){
        case 'LOADING_CHARACTERS':
            return {
                ...state,
                characters: [...state.characters],
                loading: true
            }
        case 'SORTING_CHARACTERS_ABC':

            array = state.characters.sort((a,b) => {
                return (a.name > b.name) - (a.name < b.name)
            })
            return {
                ...state,
                characters: [...array]
            }
        case 'SORTING_CHARACTERS_ELEMENT':
            array = state.characters.sort((a,b) => {
                return (a.vision > b.vision) - (a.vision < b.vision)
            })
            return {
                ...state,
                characters: [...array]
            }
        case 'SORTING_CHARACTERS_RARITY':

        array = state.characters.sort((a,b) => {
            return (a.rarity > b.rarity) - (a.rarity < b.rarity)
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