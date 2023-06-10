import React, {  useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
//import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';
//import omnivaFromFile from "../../data/omniva.json";
import styles from "../../css/Cart.module.css";
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';



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




  return (
    <div>
      {cart.length !== 0 && <button onClick={emptyCart}>{t('empty-cart')}</button>}
      {cart.length === 1 && <div>{t('there-is')} {cart.length}  {t('item-in-the-cart')}.</div>}
      {cart.length >= 2 && <div>{t('there-are')} {cart.length}  {t('items-in-the-cart')}.</div>}
      {cart.map((element, index) =>
        <div className={styles.product} key= {index}>
          <img className={styles.image }src={element.product.image} alt="" />
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} €</div>
          <div className={styles.quantity}>
          <img className={styles.button} onClick={ () => decreaseQuantity(index)} src="/minus.png" alt="" />
          <div >{element.quantity} pcs</div>
          <img className={styles.button} onClick={ () => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          <div className={styles.total}>{element.product.price * element.quantity} €</div>
          {/*<div>{t('remove-item')}</div>*/}
          
        <img className={styles.button} onClick={() => removeFromCart(index)} src="/remove.png" alt="" />
        </div>)}

        {cart.length > 0 &&
        <div>
         <div> {t('total')}: {calculateCartSum()} €.</div>
        {/*SIIT PARCELMACHINE  */}   
        <ParcelMachines/>
        <Payment sum={calculateCartSum()} />
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