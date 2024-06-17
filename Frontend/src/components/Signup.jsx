import React, { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-4 rounded-xl shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-center text-3xl text-white font-bold">Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-based label-text font-bold">Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full input  input-bordered-10 bg-black"
              type="text"
              placeholder="FullName"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-based label-text font-bold">User Name</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input  input-bordered-10 bg-black"
              type="text"
              placeholder="UserName"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-based label-text font-bold">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input  input-bordered-10 bg-black"
              type="text"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-based label-text font-bold">
                Confirm Password
              </span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full input  input-bordered-10 bg-black"
              type="text"
              placeholder="ConfirmPassword"
            />
          </div>
          <div className="flex items-center my-4 text-white font-bold">
            <div className="flex items-center mx-2">
              <p>Male</p>
              <input
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                type="checkbox"
                defaultChecked
                className="checkbox ml-2 bg-black"
              />
            </div>
            <div className="flex items-center mx-4">
              <p>Female</p>
              <input
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                type="checkbox"
                defaultChecked
                className="checkbox ml-2 bg-black"
              />
            </div>
          </div>
          <div className="w-full mx-auto flex items-center justify-center">
            <p className="text-white my-2">
              Already have an account ,Please Login
            </p>
            <Link to="/login"></Link>
          </div>
          <div className="flex items-center justify-center ">
            <button
              type="submit"
              className="btn btn-block btn-md mt-2  border-slate-700 hover:bg-black"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
