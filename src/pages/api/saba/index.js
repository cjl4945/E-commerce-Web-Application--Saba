//import sabaProduct from "../../../../backend/models/sabaProduct";
import { getProducts } from "../../../../backend/mongo/products";
// import { getMovies } from "../../../../backend/mongo/products";
// import { init } from "../../../../backend/mongo/products";


const handler = async (req, res) => {
  try{
    const {prods, error} = await getProducts()
    if (error) throw new Error(error)
    //const p = await sabaProduct.find();
    // const titles = prods.map((product) => product.title);

    return res.status(200).json({prods})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

export default handler;