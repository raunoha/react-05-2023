import React from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json";

function SingelProduct() {
  const { id } = useParams();
  // kodus sattuge siia lehele .id 
  // ISESEISVALT KODUS: Sattuge siia lehele, editproduct.jsx järgi
  // Kuvage välja ka
  const found = productsFromFile.find(product => product.id === Number (id)); // tuleb üks toode
  // const tulem =tootedFailist.filter(toode =>toode.id ===id) filter leiab kogu hunniku 
  //const index = productsFromFile.findIndex(product => product.id === Number (id));
  
/* */

  return (
    <div>
      {found === undefined && <div>Product not found!</div>}
      {found !== undefined &&
        <div>
          <div>{found.name}</div>
          <div>{found.price}€</div>
          <img src={found.image} alt="" />
          <div>{found.category}</div>
          <div>{found.price}</div>
          <div>{found.description}</div>
          <div>{found.active}</div>
        </div>}
    </div>
  )
}

export default SingelProduct