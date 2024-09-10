import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../images/optitech.jpg'
import { BiLogIn, BiLogOut, BiSolidUser } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function NavBar({ cart }) {

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('auth');

    const handleLogOut = () => {
        localStorage.removeItem('auth');
        navigate('/login')
    }

    const navData = [
        { name: "Home", path: "/" },
        { name: "Electronics", path: "/Electronics" },
        { name: "Men Clothing", path: "/Men Clothing" },
        { name: "Women Clothing", path: "/Women Clothing" },
        { name: "Laptops", path: "/laptops" },
        { name: "Desktops", path: "/desktops" },
        { name: "Phones", path: "/phones" },
        { name: "Jewelery", path: "/jewelery" },
    ];
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg shadow-sm bg-dark fw-bold navbar-dark container-fluid">
                <div className="container-fluid mx-5">
                    <img src={logo} alt="logo" width='50' style={{ backgroundColor: '#aeaeae', borderRadius: '50%', }} />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            {navData.map(({ name, path }, i) => (
                                <li className="nav-item" key={i}>
                                    <NavLink className="nav-link" aria-current="page" to={path}>
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button type="button" class="btn  dropdown-toggle " data-bs-toggle="dropdown">
                            <NavLink className="navbar-brand bg-white px-2 pb-2 were rounded-3" to="/">
                                <BiSolidUser size={25} color="white" style={{ backgroundColor: "grey", borderRadius: '20px', padding: '5px' }} /> <span className="fw-bold text-secondary" style={{ fontSize: '13px' }}>Account</span>
                            </NavLink>
                        </button>
                        <ul class="dropdown-menu">
                            {!isAuthenticated ? (
                                <>
                                    <li>
                                        <NavLink className="dropdown-item" to="/login"><BiLogIn/> Log In</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/signUp"><FaSignInAlt/> Sign Up</NavLink>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <NavLink className="dropdown-item" to="/logOut" onClick={handleLogOut}><BiLogOut /> Log Out</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    <NavLink to="/cart" className="d-flex align-items-center text-secondary bg-white p-2 were rounded-3" style={{ position: 'relative', display: 'inline-block', textDecoration: 'none' }}>
                        <FaCartShopping size={20} /><span style={{ textDecoration: "none" }}> Cart</span>
                        {totalItems > 0 && <span style={{
                            position: 'absolute',
                            top: '-6px',
                            right: '-10px',
                            background: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '3px 10px',
                            fontSize: '10px',
                        }} className="ms-2 text-white">{totalItems}</span>}
                    </NavLink>
                </div>
            </nav>
        </div>
    )
};
export default NavBar;