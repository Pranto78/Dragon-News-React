import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userLogo from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logout Successfully!!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="empty">{user && user.email}</div>
      <div className="bars flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-5">
        <div>
          <img className="w-12 rounded-full" src={`${user?user.photoURL : userLogo}`} alt="" />
        </div>
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-8">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
