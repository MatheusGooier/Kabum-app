  
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends Component{

    render(){
  
        return(
            <nav className="nav-wrapper ">
                <div className="container">
                    <Link to="/" className="brand-logo">
                    <img src="https://static.kabum.com.br/conteudo/temas/001/imagens/topo/logo_kabum_.png" alt="Kabum" />
                    </Link>
                    
                    <ul className="right">
                        <li><Link to="/">Produtos</Link></li>
                        <li><Link to="/cart">Carrinho<span className="badge blue-grey lighten-4">{this.props.addedItems.length}</span></Link>
                        </li>                        
                    </ul>
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


export default connect(mapStateToProps)(Navbar)