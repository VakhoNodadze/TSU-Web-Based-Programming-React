import { ACTION_TYPE } from './actionTypes'



export const reducer = (state, action) => {
  switch (action.type){
  case ACTION_TYPE.SAVE_ALL_PRODUCTS:
    return { ...state, products: action.payload }
  case ACTION_TYPE.ADD_PRODUCT_TO_CART:
    return { ...state, cart: [...state.cart, action.payload] }
  case ACTION_TYPE.HANDLE_LOADER:
    return { ...state, isLoading: !state.isLoading }
  default:
    return state
  }
}