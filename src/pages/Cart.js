import React from 'react';
import { useNavigate } from 'react-router-dom';
// import SignUp from './SignUp';
import Login from './Login';
import { FaStar } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
// import Payment from '../components/Payment';

function Cart({ cart, removeFromCart, placeOrder, incrementQuantity, decrementQuantity }) {
  const total = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/')
  }

  // const handleToken =(token)=>{
  //   placeOrder();
  // }

  const isAuthenticated = localStorage.getItem('auth');
  if (!isAuthenticated) {
    alert('You need to login to view the cart');
    navigate('/login');
    return (<>
      <h1 className='container text-center'>Sign Up before you can have access to cart or Login if you have account before </h1>
      <div className='d-flex'>
        {/* <SignUp /> */}
        <Login />
      </div>
    </>
    )
  }

  console.log("removeFromCart prop:", removeFromCart);

  return (
    <div className='container my-5 bg-light shadow-lg border border-3'>
      <h2 className='text-center py-3'>Your Shopping Cart</h2><hr />
      {cart.length === 0 ? (
        <div className='text-center'>
          <p className='text-center'>Your cart is empty</p>
          <FaCartShopping className='mb-2 text-secondary' style={{ fontSize: "50px" }} />
          <div className='mx-2 text-center' style={{ height: '50px', width: 'auto' }}>
            <button className='btn btn-primary' onClick={handleHome}>Start Shopping</button>
          </div>
        </div>
      ) : (
        <ul>
          {cart.map((item) => (
            <li className='row' key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', width: '100%' }}>
              <img className='col-2' src={item.image} alt={item.name} style={{ width: '12%', height: '90px', marginRight: '10px' }} />
              <div className='shadow-sm d-flex col-lg-8 col-sm-12 justify-content-between align-items-center'>
                <div style={{ flexGrow: 1, height: '100px' }} className='ms-4' >
                  <><span className='fw-bold'>Product:</span> {item.name}</><br />
                  <><span className='fw-bold'>Price:</span> ${item.price} </><br />
                  <><span className='fw-bold'>Rating:</span> {item.rating.rate}
                    <FaStar color="yellow" />
                  </><br />
                  <><span className='fw-bold'>Added on: </span>{item.addedTime}</>
                </div>
                <div className='me-5'>
                  <button className='btn btn-secondary fw-bold me-2' onClick={() => decrementQuantity(item.id)}>-</button>
                  <button className='btn bg-primary text-white me-2'>x{item.quantity}</button>
                  <button className='btn btn-success fw-bold me-2' onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
              </div>
              <div className='col-2'>
                <button className='btn btn-danger ' onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px', padding: '5px 10px' }}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className='bg-primary text-white text-center'>Total: ${Math.ceil(total)}</h3>
      <button className="btn btn-primary">Pay Now</button>

      {/* <Payment total={total} onToken={handleToken} /> */}
    </div>
  );
}
export default Cart;
