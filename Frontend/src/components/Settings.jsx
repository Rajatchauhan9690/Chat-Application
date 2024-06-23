import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "..";

const Settings = ({ toggleProfileVisibility }) => {
  const { authUser } = useSelector((store) => store.user);
  const [fullName, setFullName] = useState(authUser?.fullName || "");
  const [email, setemail] = useState(authUser?.email || ""); // Corrected to lowercase 'email'
  const [description, setdescription] = useState(authUser?.description || "");
  const dispatch = useDispatch();

  const saveChanges = async () => {
    try {
      const res = await axios.put(`${BASE_URL}/api/v1/user/update`, {
        fullName,
        email, // Corrected to use 'email'
        description,
      });
      toast.success("Profile updated successfully");
      dispatch(setAuthUser(res.data.user));
      toggleProfileVisibility();
    } catch (error) {
      toast.error("Failed to update profile");
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-2xl mb-4">Profile Settings</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            description
          </label>
          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
