import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/global/Cart';
import Shop from './pages/global/Shop';
import {ContactUs }from './pages/global/ContactUs';
import SingelProduct from './pages/global/SingelProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import AddProduct from './pages/admin/AddProduct';
import AdminHome from './pages/admin/AdminHome';
import EditProduct from './pages/admin/EditProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShop from './pages/admin/MaintainShop';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/global/HomePage';


function App() {
 const { t, i18n } = useTranslation();

/*const languageToEn = () => {  // funtsiooni taas kasutamine ja väljakutsummine 2 saada 1 funktsioon(nau kategoorias)
i18n.changeLanguage("en");
localStorage.setItem("language","en");
}

const languageToEe = () => {
i18n.changeLanguage("ee");
localStorage.setItem("language","ee");
}
const languageToFin = () => {
  i18n.changeLanguage("fin");
  localStorage.setItem("language","fin");
  }
  const languageToGer = () => {
    i18n.changeLanguage("ger");
    localStorage.setItem("language","ger");
    } */

    const filterByLanguage = (categoryClicked) => {  //koik funkstioonid on kokku tõstetud
      i18n.changeLanguage(categoryClicked) 
      localStorage.setItem("language",categoryClicked )
    }

  return (
    <div className="App"> 
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Brand as={Link} to="/">Rauno shop </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shop">{t("shops")}</Nav.Link>
          </Nav> 
          <Nav>
            <img className='lang' src="/english.png" onClick={()=> filterByLanguage("en") } alt="" />
            <img className='lang' src="/estonia.png" onClick={()=>filterByLanguage("ee")} alt="" />
            <img className='lang' src="/finland.png" onClick={()=>filterByLanguage("fin")} alt="" />
            <img className='lang' src="/germany.png" onClick={()=>filterByLanguage("ger")} alt=""/>
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shop" element={ <Shop /> } />
        <Route path="contact" element={  <ContactUs /> } />
        <Route path="product/:id" element={ <SingelProduct /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="/admin/edit-products/:id" element={ <EditProduct /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShop /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <SignUp /> } />
      </Routes>
    </div>
  );
}

export default App;
