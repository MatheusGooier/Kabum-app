import React, { Component } from 'react'
import { connect } from 'react-redux'
class Recipe extends Component{
    



    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item"><b>Quantidade total de itens: {this.props.qtd}</b></li>
                    <li className="collection-item"><b>Total: R$ {this.props.total},00</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect deep-orange darken-2 btn">Finalizar compra</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total,
        qtd: state.qtd
    }
}

export default connect(mapStateToProps)(Recipe)