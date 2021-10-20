export const fetchDomains = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_DOMAINS'})
        fetch('https://temp/domains')
         .then(resp => resp.json())
          .then( json => {
        dispatch({ type: 'ADD_DOMAINS', domains: json})
      })
    }
}