

export const cartReducer = (state = {cartItems : []} , action)=>{

    switch(action.type){
        case 'success3':
            const item = action.payload ;
            console.log(item);
            const exist = state.cartItems.find(product=>product.id===item.id);
            if(exist){
                return {...state , cartItems : state.cartItems.map(data => data.product === exist.product ? item : data )}
            }
            else {
                return { ...state , cartItems : [...state.cartItems , item]}
            }
        case 'remove':
            return {...state , cartItems : state.cartItems.filter(product => product.id !== action.payload)};

        default:
            return state ;
    }
}


