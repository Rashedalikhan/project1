const cartReducer = (state, action)=>{

    if(action.type==="ADD_TO_CART"){
        let {id,amount,product, quentaty} = action.payload;
    }
    return state;
}

export default cartReducer;