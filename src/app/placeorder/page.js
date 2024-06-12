'use client'
import CheckoutWizard from '@/_components/CheckoutWizard'
import { placeOrderAsync } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function PlaceOrderScreen() {
  const dispatch = useDispatch();

  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    totalPrice,
    taxPrice,
    shippingAddress,
    paymentMethod,
    loading,
  } = useSelector((state) => state.cart)

  const handlePlaceOrder = async () => {
    // Assuming you have the order details to pass
    const orderDetails = {
      cartItems,
      itemsPrice,
      shippingPrice,
      totalPrice,
      taxPrice,
      shippingAddress,
      paymentMethod,
    };

    // Dispatch the placeOrder action
    await dispatch(placeOrderAsync(orderDetails));
    try {
      // Send a POST request to the API route with the order details
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });
  
      if (response.ok) {
        // Redirect to the confirmation page on success
        router.push('/confirmation');
      } else {
        // Handle errors, e.g., display an error message
        console.error('Failed to place order:', await response.text());
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    //   .then(() => {
    //     const response = await fetch ('/api/orders')
    //     router.push('/confirmation')
    //   })
    //   .catch((error) => {
    //     console.error('Failed to place order in pc:', error.message)
    //   })
    // // Additional logic or navigation after placing the order
  };
  const router = useRouter()

  

  useEffect(() => {
    if (!paymentMethod) {
      router.push('/payment')
    }
  }, [paymentMethod, router])


  return (
    <div>
      <CheckoutWizard activeStep={2} />
      <h1 className="mb-4 text-xl">Place Order</h1>
      {loading ? (
        <div>Loading</div>
      ) : !cartItems || cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Shipping Address</h2>
              {shippingAddress && (
                <div>
                  {shippingAddress.fullName}, {shippingAddress.address},{' '}
                  {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                  {shippingAddress.country}
                </div>
              )}
              <div>
                <Link className="default-button inline-block" href="/shipping">
                  Edit
                </Link>
              </div>
            </div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Payment Method</h2>
              <div> {paymentMethod.paymentMethod}</div>
              <div>
                <Link className="default-button inline-block" href="/payment">
                  Edit
                </Link>
              </div>
            </div>
            <div className="card overflow-x-auto p-5">
              <h2 className="mb-2 text-lg">Order Items</h2>
              {cartItems && cartItems.length > 0 ? (
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="    p-5 text-right">Quantity</th>
                    <th className="  p-5 text-right">Price</th>
                    <th className="p-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id} className="border-b">
                      <td>
                        <Image
                           src={item.image}
                           alt={item.title}
                           width={50}
                           height={50}
                           style={{
                           maxWidth: '100%',
                           height: 'auto',
                           }}
                           className="p-1"
                        ></Image>
                        {item.title}
                      </td>
                      <td className=" p-5 text-right">{item.qty}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-right">
                        ${item.qty * item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              ) : (
                <div> No items in the cart </div>
              )}
              <div>
                <Link className="default-button inline-block" href="/cart">
                  Edit
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>${itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>${totalPrice}</div>
                  </div>
                </li>
                <li>
                  <button
                    onClick={handlePlaceOrder}
                    className="primary-button w-full"
                  >
                    Place Order
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}