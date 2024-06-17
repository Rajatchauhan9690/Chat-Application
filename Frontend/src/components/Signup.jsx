import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-4 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-center text-3xl text-gray-300 font-bold">Signup</h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-based label-text">Full Name</span>
            </label>
            <input
              className="w-full input  input-bordered-10"
              type="text"
              placeholder="FullName"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-based label-text">User Name</span>
            </label>
            <input
              className="w-full input  input-bordered-10"
              type="text"
              placeholder="UserName"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-based label-text">Password</span>
            </label>
            <input
              className="w-full input  input-bordered-10"
              type="text"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-based label-text">Confirm Password</span>
            </label>
            <input
              className="w-full input  input-bordered-10"
              type="text"
              placeholder="ConfirmPassword"
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center mx-2">
              <p>Male</p>
              <input type="checkbox" defaultChecked className="checkbox ml-2" />
            </div>
            <div className="flex items-center mx-4">
              <p>Female</p>
              <input type="checkbox" defaultChecked className="checkbox ml-2" />
            </div>
          </div>
          <div className="w-full mx-auto flex items-center justify-center">
            <p>Already have an account ,Please Login</p>
            <Link to="/login"></Link>
          </div>
          <div className="flex items-center justify-center ">
            <button className="btn btn-block btn-md mt-2 border border-slate-700">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
