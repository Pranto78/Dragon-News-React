import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { set } from "date-fns";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const handelSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const url = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name,url,email,password)

    createUser(email,password)
    .then(result=>{
     const user = result.user;
    //  console.log(user)
     
     updateUser({displayName:name,photoURL:url}).then(()=>{
      setUser({ ...user, displayName: name, photoURL: url });
     })
     .catch(error=>{
      console.log(error)
      setUser(user);
     })
     
    })
    .catch(error=>{
      console.log(error)
    })

  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center py-10 px-7">
          Register Your Account
        </h2>
        <form onSubmit={handelSignUp} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="name"
            />
            {/* url */}
            <label className="label">Photo Url</label>
            <input type="text" name="url" className="input" placeholder="url" />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <p className="my-5">
              Already have an account.{" "}
              <Link
                className="text-secondary font-semibold hover:font-bold"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
