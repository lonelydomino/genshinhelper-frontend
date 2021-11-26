
const itemsReducer = (state = {items: [],loading: false}, action) => {
    switch(action.type){
        case 'LOADING_items':
            return {...state,
                items: [...state.items],
                loading: true
            }
        case 'ADD_items':
            return {
                ...state,
                items: action.items,
                loading: false
            }

        default:
            return state
    }

}
export default itemsReducer