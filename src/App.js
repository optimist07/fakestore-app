import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fontawesome/css/all.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Laptops from './pages/Laptops';
import Desktops from './pages/Desktops';
import Electronics from './pages/Electronics';
import ManClothing from './pages/ManClothing';
import WomanClothing from './pages/WomanClothing';
import Phones from './pages/Phones';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LogOut from './pages/LogOut';
import Jewelry from './pages/Jewelry';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);
    const currentTime = new Date().toLocaleString();

    if (itemIndex >= 0) {
      const updatedCartItems = [...cart];
      updatedCartItems[itemIndex].quantity += 1;
      updatedCartItems[itemIndex].addedTime = currentTime;
      setCart(updatedCartItems);
    } else {
      setCart([...cart, { ...product, quantity: 1, addedTime: currentTime },]);
    }
  };

  const incrementQuantity = (id) => {
    setCart(cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (id) => {
    setCart(cart.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  }

  const removeFromCart = (id) => {
    console.log("removeFromCart function is called with id:", id);
    setCart(cart.filter((item) => item.id !== id));
  };


  return (
    <Router>
      <NavBar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Electronics" element={<Electronics addToCart={addToCart} />} />
        <Route path="/Men Clothing" element={<ManClothing addToCart={addToCart} />} />
        <Route path="/Women Clothing" element={<WomanClothing addToCart={addToCart} />} />
        {/* <Route path="/footwears" element={<FootWears addToCart={addToCart}/>} /> */}
        <Route path="/laptops" element={<Laptops addToCart={addToCart} />} />
        <Route path="/desktops" element={<Desktops addToCart={addToCart} />} />
        <Route path="/phones" element={<Phones addToCart={addToCart} />} />
        <Route path="/jewelery" element={<Jewelry addToCart={addToCart} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/logOut' element={<LogOut />} />
        <Route path="/cart" element={<Cart cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeFromCart={removeFromCart} />} />
        {/* <Switch>
        <Route path="/orders"><OrderHistory orders={orders} /></Route>
        <Route path="/product/:id"><ProductPage addToCart={addToCart} /></Route>
        <Route path="/"><ProductList  addToCart={addToCart} /></Route>
      </Switch> */}
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;