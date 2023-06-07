import {  useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json";
//import cartFromFile from "../../data/cart.json";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

//import { t } from 'i18next';



function SingleProduct() {
 const {t} = useTranslation();
  const { id } = useParams();
  const result = productsFromFile.find((product) => product.id === Number(id));
  const found = productsFromFile.find(product => product.id === Number(id));
  
  //const [cart, setCart] = useState(cartFromFile);

  const addToCart = (productClicked) => {
    const cartLS =JSON.parse(localStorage.getItem("cart"))|| [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) {
      cartLS[index].quantity++;
    } else {
      cartLS.push({"product":productClicked, "quantity": 1});
    }
    localStorage.setItem ("cart", JSON.stringify(cartLS))
    //setProducts(productsFromFile.slice());
    toast.success(t('Item added to cart!'), {
      position: toast.position="bottom-right"
    })
  }
  
 /* const removeFromCart = (index) => {
    cartFromFile.splice(index, 1)
    setCart(cartFromFile.slice());
    toast.success("Cart is empty!");

  }

  const decreaseQuantity = (index) =>{
    cartFromFile[index].quantity--;
    if (cartFromFile[index].quantity === 0) {
      removeFromCart(index); //kutstutakse teine funkstioon välja
    }
    setCart(cartFromFile.slice()); 
  }
  const increaseQuantity = (index) =>{
    cartFromFile[index].quantity++;
    setCart(cartFromFile.slice());
  }*/



// kodus kui result on undefined !! ok aga midagi äedat lisada
  return (
    <div>
       {found === undefined && <div>Can t find product!</div>}
 {found !== undefined &&  
    <div>
    <div>ID: {id}</div>
    <div>Name: {result.name}</div>
    <div>Price: {result.price} €</div>
    <div>Description: {result.description}</div>
    <img  src={result.image} alt=""  /> 
     <br /> <br />
    <button onClick={() => addToCart(result)}>{t('Add to cart')}</button>
    <ToastContainer />
    </div>}
    </div>
  )
}
  






export default SingleProduct;