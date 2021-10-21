import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import domainsReducer from './domainsReducer'

const rootReducer = combineReducers({
    domains: domainsReducer,
    characters: charactersReducer
})
export default rootReducer