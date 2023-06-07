import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
//import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';
//import omnivaFromFile from "../../data/omniva.json";
import "../../css/Cart.css";



function Cart() {  //use<--- reacti hookid,erikood teeb lihtsaks.
  //useTranslate,useState,useRef,useParams,useNavi,useEffect,useContext
  // use lõpus alati sulud
  // use peab olema mutuja c võrdusmärk ja const mingi muutuja nimi
  // loogelised sulud siis arv pole piiratud:1 või rohkem
  //kandilised sulud siis sarv on määratud
  // kumbagi sulgi pole siis on 1 muutuja
  // kõik use-d ei tohi olla loodud mõne funktsiooni sees ega if abil
  // koik use-d peavad olema importitud

  const { t } = useTranslation();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
const [parcelMachines, setParcelMachine] = useState([]); //omnivaFromFile
const [dbParcelMachines, setDbParcelMachine] = useState([]);
const searchedRef = useRef();

//uef mingid päringud API päring
useEffect(() => {
  fetch("https://www.omniva.ee/locations.json")  // 0,5 sek aega
  .then(res => res.json())  // response lihtsalt nimi 
  .then(json => {
    setParcelMachine(json || []);  //console.log
    setDbParcelMachine(json || []);
  })  
}, []);

  const removeFromCart = (index) => {
    cart.splice(index, 1)
    setCart( cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Cart is empty!");

  }
const decreaseQuantity = (index) =>{
  cart[index].quantity--;
  if ( cart[index].quantity === 0) {
    removeFromCart(index); //kutstutakse teine funkstioon välja
  }
  setCart( cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart));
}
const increaseQuantity = (index) =>{
  cart[index].quantity++;
  setCart( cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart));
}

  const calculateCartSum = () => {
    let sum = 0;
    cart.forEach((element) => (sum = sum + element.product.price *element.quantity));
    return sum;
  }

  const emptyCart = () => {
        setCart([]); // muudab HTML-i
        localStorage.setItem("cart", JSON.stringify([])); // muudab salvestust

  }


const searchFromPMs =  () => {
const result = dbParcelMachines.filter(pm => 
  pm.NAME.toLowerCase().replace("õ","o")
  .includes(searchedRef.current.value.toLowerCase().replace("õ","o")));
setParcelMachine(result); //saab otsida väikse kui suure tähega.õ asedab o-ga, otib sõna järgi ülesse.
}

  return (
    <div>
      {cart.length !== 0 && <button onClick={emptyCart}>{t('empty-cart')}</button>}
      {cart.length === 1 && <div>{t('there-is')} {cart.length}  {t('item-in-the-cart')}.</div>}
      {cart.length >= 2 && <div>{t('there-are')} {cart.length}  {t('items-in-the-cart')}.</div>}
      {cart.map((element, index) =>
        <div className='cart-product' key= {index}>
          <img className="image" src={element.product.image} alt="" />
          <div className='name'>{element.product.name}</div>
          <div className='price'>{element.product.price} €</div>
          <div className='quantity'>
          <img className='button' onClick={ () => decreaseQuantity(index)} src="/minus.png" alt="" />
          <div >{element.quantity} pcs</div>
          <img className='button' onClick={ () => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          <div className='total'>{element.product.price * element.quantity} €</div>
          {/*<div>{t('remove-item')}</div>*/}
          
        <img className='button' onClick={() => removeFromCart(index)} src="/remove.png" alt="" />
        </div>)}

        {cart.length > 0 &&
        <div>
         <div> {t('total')}: {calculateCartSum()} €.</div>
         <input type="text" ref= {searchedRef} onChange={searchFromPMs} />
      <select>
        {parcelMachines
        .filter(pm => pm.ZIP !== "96331")
        .filter(pm => pm.A0_NAME === "EE") //filtreerib ainult eesti omad 
        .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)} 
        </select>
      </div>}

      {cart.length === 0 && <div>{t('shopping-cart-is-empty')}. 
      <img className='pilt' src="pilt.png" alt="" /> <br />
      <Link to="/">{t('add-products')}</Link> <br /> </div>}
      <br /> <br />
      <ToastContainer 
    position="bottom-right"
    />
    </div>
  )
}

export default Cart