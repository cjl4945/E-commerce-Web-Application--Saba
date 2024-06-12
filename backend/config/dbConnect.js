// // import mongoose, { mongo } from 'mongoose'

// // const dbConnect = async () => {
// // //   if (mongoose.connection.readyState >= 1) {
// // //     return;
// // //   }

// // //   mongoose.set("strictQuery", false)
// // //   mongoose.connect(process.env.DB_URI)
// // try{
// //   await mongoose.connect(process.env.DB_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// //   })
// //   console.log("Mongo connection succesful")
// // } catch (error){
// //   throw new Error("Error in connection to mongodb.")
// // }
// // }

// // import clientPromise from;

// let client
// let db 
// let movies

// async function init(){
//   if(db) return
//   try {
//     client = await clientPromise
//     db = await client.db("Saba")
//     prods = await db.collection('products')
//   } catch (error){
//     throw new Error('failed to establish connection to database')
//   }
// }

// ;(async () => {
//   await init()
// })()


// export async function getProducts(){
//   try{
//     if(!prods) await init()
//     const result = await prods
//       .find({})
//       .limit(20)
//       .map(user => ({ ...user, _id: user._id.toString()}))
//       .toArray()

//     return { prods: result }
//   } catch (error) {
//     return {error: 'Failed to fetch movies!'}
//   }
// }
