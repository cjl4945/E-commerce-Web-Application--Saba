import { Climate_Crisis } from "next/font/google";
import ProductNavBar from "@/_components/ProductNavBar";
import ProductHeader from "@/_components/ProductHeader";


const climate = Climate_Crisis({subsets: ['latin'], weight: '400'})


export default function RootLayout({ children }) {
  return (
    <div className="font-sans">
      
        <ProductHeader />
        <div className="justify-center text-center">
              <h2 className={`${climate.className} text-3xl pb-2 mb-5 mx-auto border-b-2 border-black`}>
                Products
              </h2>
        <ul className={`${climate.className} flex gap-32 text-center justify-center`}>
        <ProductNavBar />
        {/* <CartSidebar /> */}
        </ul>
        </div>
        {children}
    </div>
  )
}

// className={`${climate.className}`}