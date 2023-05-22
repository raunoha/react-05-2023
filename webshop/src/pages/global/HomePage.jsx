import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import productsFromFail from "../../data/products.json"; //../../ läheb 2 kausta üles
import cartFromFile from "../../data/cart.json";
import "../../css/HomePage.css"
import { useTranslation } from 'react-i18next';


function Homepage() {
const [products, setProduct] = useState (productsFromFail);

const { t } = useTranslation();

//const addToCart = () => { }   //lisage ostukorvi:

// Lisage ostukorvi:
    // * Tehke uus fail, nt cart.json
    // * Lisage sinna sisse

    // NING TEHKE VALMIS KA Cart.jsx fail nagu tehtud eesti keelse
const AZ = () => {
  products.sort((a,b) => a.name.localeCompare(b.name));
 setProduct(products.slice())
}
const ZA = () => {
  products.sort((a, b) => b.name.localeCompare(a.name));
  setProduct(products.slice())
}
const sortPriceAsc = () => {   //hinnad kasvavalt
  products.sort((a,b) => a.price - b.price);
  setProduct(products.slice());
}
const sortPriceDesc = () => {   //hinnad kahanevalt
  products.sort((a,b) => b.price - a.price);
  setProduct(products.slice());
}
const filterByCategoryTent = () => {
  const result = products.filter((product) => product.category.includes("tent"));
  setProduct(result)
}
const filterByCategoryCamping = () => {
  const result = products.filter((product) => product.category.includes("camping"));
  setProduct(result)
}
const filterByCategoryMotors = () => {
  const result = products.filter((product) => product.category.includes("motors"));
  setProduct(result)
}
const filterByCategoryMotorcycle = () => {
  const result = products.filter((product) => product.category.includes("motorcycle"));
  setProduct(result)
}
const add =(product) => {
  //const index = productsFromFail.findIndex(element => element.product.id === product.id)
  cartFromFile.push(product);
  toast.success("Product added!");
  }

  return (
    <div>
      <button onClick= {AZ}>{t('Sort A-Z')}</button>
      <button onClick= {ZA}>{t('Sort Z-A')}</button>
      <button onClick= {sortPriceAsc}>{t('Price Ascending')}</button>
      <button onClick= {sortPriceDesc}>{t('Price Descending')}</button>
      <button onClick= {filterByCategoryTent}>{t('Category Tent')}</button>
      <button onClick= {filterByCategoryCamping}>{t('Category Camping')}</button>
      <button onClick= {filterByCategoryMotors}>{t('Category Motors')}</button>
      <button onClick= {filterByCategoryMotorcycle}>{t('Category Motorcycle')}</button>
      <div className='products'>
      {products.map((product, id) =>
       <div key={product.id} className='product'>
        <Link to={"/product/"+  product.id}>
          <img src={product.image} alt="" />
          <div className='name'>{product.name}</div>
          <div>{product.price}  €</div>
          </Link>
          <button onClick={() => add(product)}>{t('Add to cart')}</button>
          <ToastContainer position="bottom-right"/>
          </div>
          )}
       </div>
      </div>
  );
  } 

export default Homepage;