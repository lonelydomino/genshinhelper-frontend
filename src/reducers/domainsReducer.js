
const domainsReducer = (state = {domains: [],loading: false}, action) => {
    switch(action.type){
        case 'LOADING_DOMAINS':
            return {...state,
                domains: [...state.domains],
                loading: true
            }
        case 'ADD_DOMAINS':
            return {
                ...state,
                domains: action.domains,
                loading: false
            }

        default:
            return state
    }

}
export default domainsReducer