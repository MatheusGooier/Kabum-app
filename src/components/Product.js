import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart  } from './actions/cartActions'

 class Product extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id, document.getElementById('qtdAdd').value); 
    }

    handleChange = (e, key) => {
        this.setState({[key]: e.target.value});
      }


    render(){        
         
        
        return(
        <div className="box">
                <div className="row">    
                    <div className="col s1"/>
                        <div className="col s4" >
                            <img src={this.props.items[this.props.match.params.id].img} alt={this.props.items[this.props.match.params.id].title}/>
                        </div>

                        <div className="col s6" ><br/>
                            <label className="large" style={{fontSize: "1.4rem"}}><b>Produto:</b> {this.props.items[this.props.match.params.id].title}</label><br/><br/>
                            <label><b>Descrição:</b> {this.props.items[this.props.match.params.id].desc}</label><br/>
                            <label><b>Valor: R$ {this.props.items[this.props.match.params.id].price},00</b></label><br/><br/><br/>
                            <div className="input-field row s4">
                                <div className="col s4">
                                <label className="active">Quantidade: </label>                                
                                <input id="qtdAdd" type="text" defaultValue="1"/> 
                                </div>
                                <a className="waves-effect deep-orange darken-2 btn" onClick={()=>{this.handleClick(this.props.items[this.props.match.params.id].id)}}>
                                    <i className="material-icons left">add_shopping_cart</i>Adicionar ao carrinho
                                </a>
                            </div>      
                            

                        </div>                
                </div>
        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        filteredItems: state.filteredItems,
        items: state.items
    }
  }

const mapDispatchToProps= (dispatch)=>{    
    return{
        addToCart: (id, qtdAdd)=>{dispatch(addToCart(id, qtdAdd))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)