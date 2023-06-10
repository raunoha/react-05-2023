import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
//import productsFromFail from "../../data/products.json"; //../../ läheb 2 kausta üles
//import cartFromFile from "../../data/cart.json";
import styles from "../../css/HomePage.module.css"
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json";
import FilterButtons from '../../components/home/FilterButtons';


function HomePage() {
const [products, setProducts] = useState ([]); // oli productfromfile ennem
const [dbProducts, setDbProducts] = useState ([]);
const { t } = useTranslation();
const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(config.productsDbUrl)
  .then(res => res.json())
  .then(json => {
    setProducts(json || [])
    setDbProducts(json || [])
    setLoading(false);
  }); //loogelised sulud, mitu rida

  fetch(config.categoriesDbUrl)
  .then(res => res.json())
  .then(json => setCategories(json || []));
}, []);

const AZ = () => {
  products.sort((a,b) => a.name.localeCompare(b.name));
 setProducts(products.slice())
}
const ZA = () => {
  products.sort((a, b) => b.name.localeCompare(a.name));
  setProducts(products.slice())
}
const sortPriceAsc = () => {   //hinnad kasvavalt
  products.sort((a,b) => a.price - b.price);
  setProducts(products.slice());
}
const sortPriceDesc = () => {   //hinnad kahanevalt
  products.sort((a,b) => b.price - a.price);
  setProducts(products.slice());
}
/*const filterByCategoryTent = () => {
  const result = productsFromFail.filter((product) => product.category === ("tent"));  // =
  setProduct(result)
}
const filterByCategoryCamping = () => {
  const result = productsFromFail.filter((product) => product.category.includes("camping"));
  setProduct(result)
}
const filterByCategoryMotors = () => {
  const result = productsFromFail.filter((product) => product.category.includes("motors"));
  setProduct(result)
}
const filterByCategoryMotorcycle = () => {
  const result = productsFromFail.filter((product) => product.category.includes("motorcycle"));
  setProduct(result)
}*/


const add =(productClicked) => {   // see on nyyd uus json faili ühendus.
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cartLS.findIndex(element =>element.product.id === productClicked.id);
  if (index >= 0) {   // kui ei leita on -1
// lisab ühe juurde
cartLS[index].quantity++;
//cartFromFile[index].quantity+=1;
//cartFromFile[index].quantity = cartFromFile[index].quantity + 1;
  } else {
    cartLS.push({"product": productClicked, "quantity":1});
  }
  localStorage.setItem("cart", JSON.stringify(cartLS)); // paneb ise jutumärgid
    toast.success(t("Product added!")); // niisaab tölkida tastifyd 
  };

  if (loading === true) {       //products.length === 0 oli ennem
  return <div>Loading...</div>
}

  return (
    <div>
      
      <button onClick= {AZ}>{t('Sort A-Z')}</button>
      <button onClick= {ZA}>{t('Sort Z-A')}</button>
      <button onClick= {sortPriceAsc}>{t('Price Ascending')}</button>
      <button onClick= {sortPriceDesc}>{t('Price Descending')}</button>
      {/*<button onClick= {() => filterByCategory("tent")}>{t('Category Tent')}</button>
      <button onClick= {() => filterByCategory("camping")}>{t('Category Camping')}</button>
      <button onClick= {() => filterByCategory("motors")}>{t('Category Motors')}</button>
  <button onClick= {() => filterByCategory("motorcycle")}>{t('Category Motorcycle')}</button> */}
  <FilterButtons 
      dbProducts={dbProducts}
      setProducts={setProducts}
      categories={categories}
      />
    <div>{products.length} </div>
      <div className={styles.products}>
      {products.filter(e=> e.active === true).map((product, id) =>
       <div key={product.id} className={styles.product}>
        <Link to={"/product/" +  product.id}>
          <img src={product.image} alt="" />
          <div className={styles.name}>{product.name}</div>
          <div>{product.price}  €</div>
          </Link>
          <button onClick={() => add(product)}>{t('Add to cart')}</button>
          </div>
          )}
       </div>
       <ToastContainer position="bottom-right"/> 
      </div>
  );
  } 

export default HomePage;