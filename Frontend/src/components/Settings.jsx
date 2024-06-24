import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "..";

const Settings = ({ toggleProfileVisibility }) => {
  const { authUser } = useSelector((store) => store.user);
  const [fullName, setFullName] = useState(authUser?.fullName || "");
  const [email, setEmail] = useState(authUser?.email || "");
  const [description, setDescription] = useState(authUser?.description || "");
  const dispatch = useDispatch();

  const saveChanges = async () => {
    try {
      const res = await axios.put(`${BASE_URL}/api/v1/user/update`, {
        fullName,
        email,
        description,
      });
      toast.success("Profile updated successfully");
      dispatch(setAuthUser(res.data.user));
      toggleProfileVisibility();
    } catch (error) {
      toast.error("Failed to update profile");
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-blue-100 p-6 rounded-md w-96">
        {/* Profile Avatar Section */}
        <div className="flex items-center mb-4">
          <img
            src={authUser?.profilePhoto || "default-avatar-url"}
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl text-black">
              {authUser?.fullName || "Full Name"}
            </h2>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-black"
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-sm font-medium text-black">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white text-black"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={toggleProfileVisibility}
            className="btn btn-sm bg-red-500 text-white mr-2"
          >
            Cancel
          </button>
          <button
            onClick={saveChanges}
            className="btn btn-sm bg-blue-500 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
