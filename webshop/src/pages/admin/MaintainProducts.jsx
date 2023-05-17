import React, { useState } from 'react'
import productsFromFail from "../../data/products.json"; //../../ läheb 2 kausta üles
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function MaintainProducts() {
const [products, setProduct] = useState (productsFromFail);

const deleteProduct =() => {
  //koju kustuta toode 
  //testi kustuta ja mine avalehe
  // refresh ilmub tagasi
  /*const kustuta =(jrknr)=> {
    poed.splice(jrknr,1)
    uuendaPoed(poed.slice())
  } {poed.map((yksPood,jrknr) => <div>{yksPood} <button onClick={() => kustuta(jrknr)}>x</button></div>)}
  */ 
}

  return (
    <div>
      {products.map(product =>
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.image}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>{product.category}</div>
          <div>{product.active}</div>
          <Button variant="danger">Delete</Button>
          <Button as={Link} to={"/admin/edit-products/" + product.id} variant="warning">Edit</Button>
       </div>
        )}
      </div>
  )
}

export default MaintainProducts;