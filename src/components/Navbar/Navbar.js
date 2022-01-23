import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark shadow-light">
                <div className="container">
                    <Link to='/' className='navbar-brand fs-4 fw-bold text-light'>Redux Toolkit CRUD App</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;