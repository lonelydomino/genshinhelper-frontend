import { combineReducers } from 'redux';
import domainsReducer from './domainsReducer'

const rootReducer = combineReducers({
    domains: domainsReducer

})
export default rootReducer