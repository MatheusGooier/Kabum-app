  
import React, { Component } from 'react';
import { connect } from 'react-redux'

class Footer extends Component{

    render(){
  
        return(
            <nav className="nav-wrapper row"  style={{position: "fixed", fontSize: "0.7rem", bottom: 0, marginBottom: "0px", height: "53px", lineHeight: "53px", zIndex: 999}}>
                <div className="col s6 offset-s9">
                    Site desenvolvido por <a href="https://www.linkedin.com/in/matheusdsouza/">Matheus Cometti</a>
                </div>
            </nav>        
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        qtd: state.qtd
    }
}


export default connect(mapStateToProps)(Footer)