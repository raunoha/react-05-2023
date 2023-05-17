import React, { useState } from 'react'
import productsFromFail from "../../data/products.json"; //../../ läheb 2 kausta üles
import "../../css/HomePage.css"

function Homepage() {
const [products, setProduct] = useState (productsFromFail);

const addToCart = () => {
  //lisage ostukorvi:
}

  return (
    <div>
      {/* sorteerimine
      */}
      <div className='products'>
      {products.map(product =>
        <div key={product.id} className='product'>
          <img src={product.image} alt="" />
          <div className='name'>{product.name}</div>
          <div>{product.price}</div>
          <button>Add to cart</button>
          </div>
          )}
       </div>
      </div>
  )
}

export default Homepage;