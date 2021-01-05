import axios from "axios";
import { CART_ADD_ITEM,CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const res = await axios.get(`http://apis.restroqr.link:4040/product/${id}`);
  console.log(res.data.result);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: res.data.result.id,
      name: res.data.result.menuName,
      image: res.data.result.productImage,
      price: res.data.result.sellPrice,
      quantity: res.data.result.quantity,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart =(id) =>(dispatch,getState)=>{
  dispatch({
    type:CART_REMOVE_ITEM,
    payload:id
  })
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}