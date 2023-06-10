import React, { useEffect, useRef, useState } from 'react'
//import productsFromFail from "../../data/products.json"; //../../ läheb 2 kausta üles
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
//import "../../css/MaintainProducts.module.css";
import config from "../../data/config.json";
import styles from "../../css/MaintainProducts.module.css";

function MaintainProducts() {
const [products, setProducts] = useState ([]); //kõikuv suurus kord 3  kord 60 näidatakse välja
const [dbProducts, setDbProducts] = useState([]); // siin on alati sama palju kui andmebaasis
const searchedRef = useRef();
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(config.productsDbUrl)
  .then(res => res.json())
  .then(json => {
    setProducts(json || []);  // 244
    setDbProducts(json || [])  // 244
    setLoading(false);
  });
}, []);

const deleteProduct = (product) => {   // index lisamata oli products
  const index = dbProducts.findIndex(element => element.id === product.id);
  dbProducts.splice(index,1)        // index lisamata oli products, productFromFile panna
    setDbProducts(dbProducts.slice()); //244-->243 andmebaasitoodete uuendus mida lehel kasutan
    //setProducts(dbProducts.slice()); //visuaali uuendus mida kasutaja näeb 10-->243
    searchFromProducts();
    fetch(config.productsDbUrl, {"method": "PUT","body":JSON.stringify(dbProducts)}); // (oli ennem products)
  }
  const { t } = useTranslation();
 
  

const searchFromProducts = () => {                        // otsingu, hakkab otsima
  const result = dbProducts.filter(element =>
   element.name.toLowerCase().replace("õ","o")
   .includes(searchedRef.current.value.toLowerCase().replace("õ","o")))
  setProducts(result);  // kodus teha otsingut;case sensitivity
  } 

  if (products.length === 0) {
    return <div>Loading...</div>
  }

  if (loading === true) {       
    return <div>Loading...</div>
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
        <tr key={product.id} className={product.active === true ? styles.active : styles.inactive }>
          <td><img className={product.active === true ? styles.image : styles["image-blurred"]} src={product.image} alt="" /></td> 
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
          <td>{product.category}</td>
          <td>
          <Button onClick={() => deleteProduct(product)} variant="danger">{t('Delete')}</Button>
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

/*styles["image-blurred"] styles.imageblurred */