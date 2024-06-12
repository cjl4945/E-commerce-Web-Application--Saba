import { placeOrderApi } from "@/pages/api/orders";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'


const initialState = Cookies.get('cart')
  ? { ...JSON.parse(Cookies.get('cart')), loading: true }
  : {
      loading: true,
      cartItems: [],
      shippingAddress: {},
      paymentMethod: '',
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    }

export const placeOrderAsync = createAsyncThunk(
  'cart/placeOrderAsync',
  async (orderDetails, { dispatch }) => {
    try {
      //const response = await placeOrderApi(orderDetails);
      //removed ('Order placed successfully:', response);
      console.log('Order placed successfully:', orderDetails);
    

      dispatch(cartSlice.actions.clearCart())
      // Return the order details or any other data you want to use in the reducer
      return orderDetails;
    } catch (error) {
      console.error('Failed to place order:', error.message);
      // You can also throw an error here if you want to handle it in the component
      throw error;
    }
  }
);
const savedCart = Cookies.get('cart');
console.log('Saved Cart:', savedCart);
if (savedCart) {
  try {
    const parsedCart = JSON.parse(savedCart);
    initialState.cartItems = parsedCart.cartItems || [];
    initialState.shippingAddress = parsedCart.shippingAddress || {};
    initialState.paymentMethod = parsedCart.paymentMethod || '';
    // Update other properties accordingly
  } catch (error) {
    console.error('Error parsing cart from cookie:', error);
  }
}
  

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2) // 12.3456 to 12.35
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existItem = state.cartItems.find((x) => x._id === item._id)
      const existItemIndex = state.cartItems.findIndex((x) => x._id === item._id);
      console.log(existItem)
      if (existItemIndex !== -1) {
        // If the item exists, update it in a new array
        state.cartItems = [
          ...state.cartItems.slice(0, existItemIndex),
          item,
          ...state.cartItems.slice(existItemIndex + 1),
        ];
      } else {
        state.cartItems = [...state.cartItems, item]
      }
      state.itemsPrice = addDecimals( state.cartItems.reduce((acc,item) => acc + item.price * item.qty, 0)
      )
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100)
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice))
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      )
      Cookies.set('cart', JSON.stringify(state))
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload)
      state.itemsPrice = addDecimals( state.cartItems.reduce((acc,item) => acc + item.price * item.qty, 0)
      )
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100)
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice))
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      )
      Cookies.set('cart', JSON.stringify(state))
    },
    saveShipppingAddress: (state, action) => {
      state.shippingAddress = action.payload
      Cookies.set('cart', JSON.stringify(state))
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload
      Cookies.set('cart', JSON.stringify(state))
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.itemsPrice = 0;
      state.shippingPrice = 0;
      state.taxPrice = 0;
      state.totalPrice = 0;
      state.shippingAddress = {};
      state.paymentMethod = '';
      Cookies.remove('cart');
    },
    placeOrder: async (state) => {
      try{
        // const orderDetails = action.payload

        //const response = await placeOrderApi(orderDetails)
        //
        console.log('Order placed successfully:')
        //clear cart state after placing order
        state.clearCart() 
      } catch (error) {
        console.error('Failed to place order:', error.message)
      }
    },
    hideLoading: (state) => {
      state.loading = false
    }
  },
  extraReducers: (builder) => {
    // Handle the fulfilled action of the async thunk
    builder.addCase(placeOrderAsync.fulfilled, (state) => {
      // Clear cart state after placing order
      state.cartItems = [];
      state.itemsPrice = 0;
      state.shippingPrice = 0;
      state.taxPrice = 0;
      state.totalPrice = 0;
      state.shippingAddress = {};
      state.paymentMethod = '';
      Cookies.remove('cart');
    });
  },
})

export const { addToCart, removeFromCart, saveShipppingAddress, savePaymentMethod, clearCart, placeOrder, hideLoading } = cartSlice.actions


export default cartSlice.reducer