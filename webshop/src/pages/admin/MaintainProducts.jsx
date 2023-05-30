import React, { useRef, useState } from 'react'
import productsFromFail from "../../data/products.json"; //../../ läheb 2 kausta üles
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../../css/MaintainProducts.css";

function MaintainProducts() {
const [products, setProduct] = useState (productsFromFail);
const searchedRef = useRef();

const deleteProduct = (index) => { // index lisamata oli products
    productsFromFail.splice(index,1)        // index lisamata oli products, productFromFile panna
    setProduct(productsFromFail.slice())
  }
  const { t } = useTranslation();
  //koju kustuta toode 
  //testi kustuta ja mine avalehe
  // refresh ilmub tagasi
  /*const kustuta =(jrknr)=> {
    poed.splice(jrknr,1)
    uuendaPoed(poed.slice())
  } {poed.map((yksPood,jrknr) => <div>{yksPood} <button onClick={() => kustuta(jrknr)}>x</button></div>)}
  */ 


const searchFromProducts = () => {                        // otsingu, hakkab otsima
const result = productsFromFail.filter(element => element.name.includes(searchedRef.current.value))
setProduct(result);  // kodus teha otsingut;case sensitivity
}



  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <span>{products.length } {t('tk')}</span>
      <table>
        <thead> 
          <tr>
          <th>Pilt</th>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Actions</th>
          </tr>
        </thead>
       <tbody>
       {products.map((product, index)=>
        <tr key={product.id} className={product.active === true ? "active" : "inactive"}>
          <td><img className={product.active === true ? "image": "image-blurred"} src={product.image} alt="" /></td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
          <td>{product.category}</td>
          <td>
          <Button onClick={() => deleteProduct(index)} variant="danger">{t('Delete')}</Button>
          <Button as={Link} to={"/admin/edit-products/" + product.id} variant="warning">{t('Edit')}</Button>
          </td>
       </tr>
        )}
     </tbody>
    </table>
   </div>
  )
}

export default MaintainProducts;