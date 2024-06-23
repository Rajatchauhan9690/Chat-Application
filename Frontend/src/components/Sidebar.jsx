import React, { useState } from "react";
import { BiSearchAlt2, BiCog } from "react-icons/bi";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthUser,
  setOtherUsers,
  setSelectedUser,
} from "../redux/userSlice";
import { setMessages } from "../redux/messageSlice";
import { BASE_URL } from "..";
import Settings from "./Settings";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const { otherUsers, authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
      navigate("/login");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
      dispatch(setMessages(null));
      dispatch(setOtherUsers(null));
      dispatch(setSelectedUser(null));
    } catch (error) {
      console.log(error);
    }
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const conversationUser = otherUsers?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversationUser) {
      dispatch(setOtherUsers([conversationUser]));
    } else {
      toast.error("User not found!");
    }
  };

  const toggleProfileVisibility = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  const toggleSettingsVisibility = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col justify-between h-full overflow-y-auto">
      <div>
        <form
          onSubmit={searchSubmitHandler}
          action=""
          className="flex items-center gap-2"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered rounded-md"
            type="text"
            placeholder="Search..."
          />
          <button type="submit" className="btn bg-zinc-700 text-white">
            <BiSearchAlt2 className="w-6 h-6 outline-none" />
          </button>
        </form>
        <div className="divider px-3"></div>
        <OtherUsers />
      </div>
      <div className="flex flex-col items-start">
        {isProfileVisible && (
          <div className="profile-section p-4 border rounded-md mb-2">
            <img
              src={authUser?.avatar || "default-avatar-url"}
              alt="User Avatar"
              className="w-16 h-16 rounded-full mb-2"
            />
            <h3 className="text-lg font-semibold">
              {authUser?.fullName || "Full Name"}
            </h3>
            <p className="text-sm">
              {authUser?.description || "No description"}
            </p>
            {/* Add other profile information as needed */}
          </div>
        )}
        <button onClick={logoutHandler} className="btn btn-sm mb-2">
          Logout
        </button>

        {/* Settings Button with Icon */}
        <button
          onClick={toggleSettingsVisibility}
          className="btn btn-sm mt-2 flex items-center"
        >
          <BiCog className="mr-1" style={{ fontSize: "1.5rem" }} />
          Settings
        </button>

        {/* Settings Modal */}
        {isSettingsVisible && (
          <Settings toggleProfileVisibility={toggleSettingsVisibility} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
