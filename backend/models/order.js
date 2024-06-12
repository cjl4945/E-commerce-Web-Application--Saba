// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//    fulllname: {
//       type: String,
//       required: true,
//     }, 
//     address: {
//       type: String,
//       required: true,
//     },
//     city: {
//       type: String,
//       required: true,
//     },
//     postalCode: {
//       type: String,
//       required: true,
//     },
//     country: {
//       type: String,
//       required: true,
//     },
//     completed: {
//       type: Boolean,
//       required: true,
//     },
// },
// {
//    timestamps: true,
// }
// )


// export default mongoose.models.Order || mongoose.model('Order',orderSchema ) 



import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  cartItems: [/* Define your cart item schema here */],
  itemsPrice: Number,
  shippingPrice: Number,
  totalPrice: Number,
  taxPrice: Number,
  shippingAddress: {/* Define your shipping address schema here */},
  paymentMethod: {/* Define your payment method schema here */},
  // Add other fields as needed
});

const Order = mongoose.model('Order', orderSchema);

export default Order;