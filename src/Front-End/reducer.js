

export const initialState={
    basket:[],
}
// hear the action that has been taken
const reducer=(state,action)=>{
   
    // console.log(action)
    switch(action.type){  
    case "ADD_TO_BASKET":
        return{
       ...state,
         basket:[...state.basket,action.item],
        }

        case "REMOVE_FROM_BSKET":
            const indx = state.basket.findIndex((basketItem)=>
                basketItem.id === action.id
            );
            let newBasket=[...state.basket];
            if(indx>=0) {
                newBasket.splice(indx,1)
                
            }
            else
            console.warn(
        `cant remove (id:${action.id} )since it is not in side the basket`)
        return{
            ...state,
            basket:newBasket,
        };

        case EMPTY_BASKET:
            return{
                ...state,
                basket:[]
            }
        default:
        return state;
      
}
}
export default reducer