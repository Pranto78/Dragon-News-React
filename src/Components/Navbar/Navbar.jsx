import React from 'react';
import { NavLink } from 'react-router';
import userLogo from '../../assets/user.png'

const Navbar = () => {
    return (
      <div className="flex justify-between items-center">
        <div className="empty"></div>
        <div className="bars flex gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex gap-5">
          <div>
            <img src={userLogo} alt="" />
          </div>
          <button className="btn btn-primary px-8">Login</button>
        </div>
      </div>
    );
};

export default Navbar;