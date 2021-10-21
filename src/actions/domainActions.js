export const fetchDomains = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_DOMAINS'})
        fetch('http://localhost:3000/domains')
        .then(resp => resp.json())
        .then( json => {
            dispatch({ type: 'ADD_DOMAINS', domains: json})
        })
    }
}