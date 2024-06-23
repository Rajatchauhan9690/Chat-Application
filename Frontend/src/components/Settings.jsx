import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "..";

const Settings = ({ toggleProfileVisibility }) => {
  const { selectedUser } = useSelector((store) => store.user);
  const [fullName, setFullName] = useState(selectedUser?.fullName || "");
  const [email, setEmail] = useState(selectedUser?.email || "");
  const [description, setDescription] = useState(
    selectedUser?.description || ""
  );
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
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <div className="flex items-center mb-4">
          {/* User Avatar */}
          <img
            src={selectedUser.profilePhoto}
            alt="User Avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl">{selectedUser.fullName}</h2>
            <p className="text-gray-500">{selectedUser.email}</p>
          </div>
        </div>
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
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
