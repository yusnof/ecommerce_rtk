import { createSlice } from "@reduxjs/toolkit";

//Creating CarSlice object and the logic of the adding/removing function. 
const CartSlice = createSlice({
    name:"cart",
    initialState,
    
    //logic behind some functions behind the cart
    reducers:{
        addItemToCart(state,action){
            const existingItem = state.cartItems.find(item => item.id === action.payload.id); // returns a bool if found or not
            if(existingItem){
                existingItem.quantity +=1; 
            }
            else{
                existingItem.cartItems.push({...action.payload, quantity:1})
            }
        }
    },
        removeItemFromCart(state,action){
            state.cartItems = state.cartItems.fliter(item => item.id !== action.payload); //updates the array with filter function.
    },
    clearCart(state){

    },
    increaseItemQuantity(state, action) {
        const itemToDecrease = state.cartItems.find(item => item.id === action.payload); // returns a bool
        if(itemToDecrease && itemToDecrease.quantity > 1){
            itemToDecrease.quantity -= 1;
        }


    }
});

const initialState = {
    cartItems: [],
  };


export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;
export default CartSlice.reducer;
