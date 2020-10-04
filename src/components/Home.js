import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, filterItems } from './actions/cartActions'
import { Link } from 'react-router-dom'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id, 1); 
    }

    handlefilter = ()=>{
        this.props.filterItems(document.getElementById('filteredId').value, document.getElementById('filteredTitle').value);
    }

    handlefilterClear = ()=>{
        this.props.filterItems();
        document.getElementById('filteredTitle').value = ''
        document.getElementById('filteredId').value = ''
    }

    render(){
        let itemList = this.props.filteredItems.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <Link to={"product/" + (item.id-1)}>
                                <img src={item.img} alt={item.title}/>
                            </Link>
                            <span to="/" className="btn-floating halfway-fab waves-effect deep-orange darken-2" onClick={()=>{this.handleClick(item.id)}}>
                                <i className="material-icons">add</i>
                            </span>
                        </div>

                        <div className="card-content">
                            <p className="card-title">{item.title}</p>
                            <p>{item.desc}</p>
                            <p><b>Valor: R$ {item.price},00</b></p>
                        </div>
                 </div>
            )
        })
        return(
            <div className="container" style={{marginBottom: "80px"}} >
                <h3 className="center">Produtos</h3>                           
                <div className="row">
                    <div className="input-field col s4">
                    <label>Buscar por nome:</label>
                        <input id="filteredTitle" type="text" onChange={()=>{this.handlefilter()}} />
                    </div>
                    <div className="input-field col s4">
                    <label>Buscar por Id:</label>
                        <input id="filteredId" type="text" onChange={()=>{this.handlefilter()}} />
                    </div>
                    <div className="input-field col s2">
                        <a className="waves-effect deep-orange darken-2 btn" onClick={()=>{this.handlefilterClear()}}>
                            <i className="material-icons left">clear</i>Limpar
                        </a>
                    </div>
                </div>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        filteredItems: state.filteredItems
    }
  }

const mapDispatchToProps= (dispatch)=>{    
    return{
        addToCart: (id, qtdAdd)=>{dispatch(addToCart(id, qtdAdd))},
        filterItems: (id, title)=>{dispatch(filterItems(id, title))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)