import Order from "../../../../backend/models/order";
import { mongooseConnect } from "../../../../backend/mongo/mongoose";

// export default async function handler(req, res) {
//   if (req.method !== 'POST'){
//     res.json('should be a POST request')
//     return
//   }
//   const{ 
//     cartItems,
//     itemsPrice,
//     shippingPrice,
//     totalPrice,
//     taxPrice,
//     shippingAddress,
//     paymentMethod,
//   } = req.body

//   await mongooseConnect();

//   res.json(cartItems,itemsPrice,
//     shippingPrice,
//     totalPrice,
//     taxPrice,
//     shippingAddress,
//     paymentMethod,)
// }

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to the MongoDB database
      await mongooseConnect();

      // Get order details from the request body
      const orderDetails = req.body;

      // Create a new order using the Mongoose model
      const order = new Order(orderDetails);

      // Save the order to the database
      await order.save();

      // Respond with a success message
      res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
      // Handle any errors and respond with an error message
      res.status(500).json({ error: 'Failed to place order' });
    }
  } else {
    // Respond with an error if the request method is not supported
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}