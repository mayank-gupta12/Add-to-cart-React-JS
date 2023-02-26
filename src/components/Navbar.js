import React from 'react';
import '../styles/navbar.css';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="navbar">
            <span className="my-shop" onClick={()=>setShow(true)}>
                E-Commerce
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span className='power'>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar