import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,FILTER_ITEMS,CLEAR_CART } from '../actions/action-types/cart-actions'

function Get(){
    var Httpreq = new XMLHttpRequest(); 
    Httpreq.open("GET",`https://5f75e808fdffe3001637f57c.mockapi.io/api/all/produtos`,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
  }
  var produtos = JSON.parse(Get("http://192.168.1.1:3000"));  

const initState = {
    items: produtos,
    addedItems:[],
    total: 0,
    qtd: 0,
    filteredItems: produtos
}

const cartReducer= (state = initState,action)=>{
   
    state.items = JSON.parse(Get("http://192.168.1.1:3000"));  

    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += parseInt(action.qtdAdd,10)
             return{
                ...state,
                 total: state.total + addedItem.price,
                 qtd: state.qtd + parseInt(action.qtdAdd, 10)
                  }
        }
         else{
            addedItem.quantity =parseInt(action.qtdAdd, 10);
            let newTotal = state.total + (addedItem.price * addedItem.quantity)
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                qtd: state.qtd + addedItem.quantity
            }            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        return{
            ...state,
            addedItems: new_items,
            total: newTotal,
            qtd: state.qtd - itemToRemove.quantity
        }
    }    
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal,
              qtd: state.qtd + 1
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id)         
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            let newQtd = state.qtd - addedItem.quantity
            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                qtd: newQtd
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal,
                qtd: state.qtd - 1
            }
        }
    }

  
  if(action.type=== FILTER_ITEMS){  
    let new_items = state.items
    let filterById = state.items.filter(item=>item.id === action.id)

    if ((action.title === '' && action.id === '')||( typeof action.title === 'undefined' && typeof action.id === 'undefined')){
        return{
            ...state,
            filteredItems: state.items
        } 
    } else if (filterById.length > 0){
        new_items = filterById.filter(item => {
            return item.title.toLowerCase().includes(action.title.toLowerCase());
        });
        return{
            ...state,
            filteredItems: new_items
        }
    } else {
        if (action.title) {
            new_items = state.items.filter(item => {
                return item.title.toLowerCase().includes(action.title.toLowerCase());
            });
    
            return{
                ...state,
                filteredItems: new_items
            }
        } else{
            new_items = filterById.filter(item => {
                return item.title.toLowerCase().includes(action.title.toLowerCase());
            });
            return{
                ...state,
                filteredItems: new_items
            }    
        }

    }
  }

  if (action.type === CLEAR_CART){
    return{
        ...state,
        addedItems: [],
        total: 0,
        qtd: 0
    }
  }

    
  else{
    return state
    }
    
}

  
export default cartReducer