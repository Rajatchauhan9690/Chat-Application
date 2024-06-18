import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "..";

function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data && res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error("unexpected response from the server");
        console.log("unexpected response:", res);
      }
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response);
        toast.error(error.response.data.message || "An error occurred.");
      } else if (error.request) {
        console.log("Error request:", error.request);
        toast.error("No response from the server.");
      } else {
        console.log("Error message:", error.message);
        toast.error("Request setup error.");
      }
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-4 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-center text-3xl font-bold text-white ">Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className="text-based label-text font-bold text-white text-lg">
                Full Name
              </span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full input  input-bordered-10 bg-black text-white"
              type="text"
              placeholder="FullName"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-based label-text font-bold text-white text-lg">
                User Name
              </span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input  input-bordered-10 bg-black text-white"
              type="text"
              placeholder="UserName"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-based label-text font-bold text-white text-lg">
                Password
              </span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input  input-bordered-10 bg-black text-white"
              type="text"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-based label-text font-bold text-white text-lg">
                Confirm Password
              </span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full input  input-bordered-10 bg-black text-white"
              type="text"
              placeholder="ConfirmPassword"
            />
          </div>
          <div className="flex items-center my-4  font-bold text-white text-lg">
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
            <p className="text-white text-lg font-bold my-2">
              Already have an account ?
            </p>
            <Link to="/login">Login</Link>
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
