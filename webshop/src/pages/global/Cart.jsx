import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Button }from 'react-bootstrap';
import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

function Cart() {
// võtke failist nille nimi oli nt cart.json ja pange useState
// tühjendamine emptyCart()
const { t } = useTranslation();


const [cart, setCart] = useState(cartFromFile)
//const { setCartSum } = useState(0);

const empty = () => {
  setCart([]);
  localStorage.setItem("cart", JSON.stringify([]));
  toast.error("Empty cart!")
  //setCartSum("0.00");
}

const deletecart = (index) => {
  cartFromFile.splice(index,1);
  setCart(cartFromFile.slice())
  toast.success("Cart is empty!");
  
}
const sumAll = () => {
  let summa = 0;
  cartFromFile.forEach(product => summa = summa + product.price);
  return summa//.toFixed(2);
} 
/* const remove = () =>   
} */
  return (
    <div>
      {cart.length > 0 && <Button onClick={empty}>{t('Empty')}</Button>} 
      {cart.length > 0 && <div>{t('Total of:')} {cart.length} {t('products in cart!')}  </div>}
      {cart.map((product, index) => 
    <div key={index}>
      <img className='image' src={product.image} alt="" />
      <div> {product.name}</div>
      <div> {product.price} € </div>
    <button onClick={ () => deletecart ( index)}>{t('Delete')}</button>  
    </div>)} 
    { cart.length === 0 && <div>{t('Cart is empty.')} <br />
      <img className='pilt' src="pilt.png" alt="" /> <br />
    <Link to="/">{t('Add products')}</Link></div>}
    <div>{t('Total Value:')} {sumAll()} € </div>
    <ToastContainer 
    position="bottom-right"
    />
    
    
  </div>
  )
}

export default Cart