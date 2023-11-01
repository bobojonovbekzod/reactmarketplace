import Cards from "./Cards"
import { useState, useEffect } from "react"

function TopCreators() {
  const [productdatas, setProductData] = useState([])
  const [error, setError] = useState('')

  const getProducts = () =>{
    fetch("https://fakestoreapi.com/products")
    .then ((res) => res.json())
    .then((data) => {
      console.log(data);
     setProductData(data)
    })
    .catch((err) =>{
      setError(err)
      console.log(err);
    })
  }
  
  useEffect (() =>{
    getProducts()
  }, [])

  return (
    <div className="w-[1000px] p-12 m-auto">
      <div className="text-white">
        <h3 className="text-2xl">Top creators</h3>
        <p className="mt-2 opacity-80">Checkout Top Rated Creators on the NFT Marketplace</p>
      </div>

      <div className="flex flex-wrap gap-20 w-[1000px] m-auto p-10">
        {/* {!productdatas &&
        <div>
          <h1>{error}</h1>  
        </div>} */}
        {productdatas.map((productdata) =>{
          return(
            <Cards 
            id={productdata.id} 
            img={productdata.image}
            title={productdata.title}
            category={productdata.category}
            price={productdata.price}
            />
          )
        })}

        

      </div>
        
    </div>
  )
}

export default TopCreators