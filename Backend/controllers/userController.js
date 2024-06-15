import { User } from "../models/userModel";
export const register = async (req, res) => {
  try {
    const { fullName, username, password, profilePhoto, gender } = req.body;
    if (!fullName || !username || !password || !profilePhoto || !gender) {
      return res.status(400).json({ message: "All Fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password Do Not Match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ message: "username already exit try different" });
    }
    await User.create({
      fullName,
      username,
      password,
      profilePhoto,
      gender,
    });
  } catch (error) {}
};
