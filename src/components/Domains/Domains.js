import React from 'react'
import {connect} from 'react-redux'
import { useEffect } from 'react'
import { fetchDomains } from '../../actions/domainActions'
import './Domains.css'
const Domains = (props) => {
   useEffect(() => {
      props.fetchDomains()
   }, [])
     return (
        <div className="domains-container">
            {props.domains.map(domain => <div>{domain.id} - {domain.name} - {domain.items.map(item => <li key={item.id}>{item.name}</li>)}</div>)}
        </div>
     )
}
const mapStateToProps = (state) => {
   return {
      domains: state.domains.domains
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      fetchDomains: () => dispatch(fetchDomains())
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Domains)