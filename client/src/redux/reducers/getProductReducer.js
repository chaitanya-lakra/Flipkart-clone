


export const getProductsReducer = (state = {products:[]} , action)=>{
    switch(action.type){
        case 'success':
            return {products : action.payload}
        case 'fail':
            return {error : action.payload}

        default:
            return state
    }
}

export const getProductDetailsReducer = (state = {product : {}} , action) =>{
    switch(action.type){
        case 'loading' : 
        return {laoding : true}
        case 'success1' : 
        return {laoding : false , product : action.payload}
        case 'fail1':
            return {error : action.payload , laoding : false}
        default:
            return state
    }
}