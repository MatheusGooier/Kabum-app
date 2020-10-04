import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ClearCart  } from './actions/cartActions'

class Recipe extends Component{
    
    handleClick = ()=>{
        this.props.ClearCart(); 
    }

    render(){
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item"><b>Quantidade total de itens: {this.props.qtd}</b></li>
                    <li className="collection-item"><b>Total: R$ {this.props.total},00</b></li>
                    </div>
                    <div className="row">
                        <div className="checkout col s3">
                            <button className="waves-effect deep-orange darken-2 btn">Finalizar compra</button>                        
                        </div>
                        <div className="checkout col s3">
                            <button className="waves-effect red darken-4 btn" onClick={()=>{this.handleClick()}}>Limpar Carrinho</button>
                        </div>
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

const mapDispatchToProps= (dispatch)=>{    
    return{
        ClearCart: ()=>{dispatch(ClearCart())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)