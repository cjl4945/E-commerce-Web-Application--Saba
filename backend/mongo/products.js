import clientPromise from ".";

let client
let db 
let prods
let orders

 export async function init(){
  if(db) return
  try {
    client = await clientPromise
    db = await client.db("Saba")
    prods = await db.collection('products')
    orders = await db.collection('orders')
  } catch (error){
    throw new Error('failed to establish connection to database')
  }
}

(async () => {
  await init()
})()


export async function getProducts(){
  try{
    if(!prods) await init()
    const result = await prods
      .find({})
      .limit(20)
      .map(user => ({ ...user, _id: user._id.toString()}))
      .toArray()

    return { prods: result }
  } catch (error) {
    return {error: 'Failed to fetch movies!'}
  }
}

export async function addOrder(orderDetails) {
  if(!orders) await init()
  const response = await orders.insertOne(orderDetails)

  return response
}



  