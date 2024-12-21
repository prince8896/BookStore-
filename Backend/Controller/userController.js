const User = require("../Model/userModel");
const bcryptjs = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const exist = await User.findOne({ email: email });
    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create new user
    const data = new User({ name, email, password: hashPassword });

    // Save user data to the database
    await data.save();

    // Return success response with created user details
    return res.status(201).json({
      message: "User created successfully",
      user: {
        _id: data._id,
        name: data.name,
        email: data.email,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Validate the password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Respond with user information if successful
    return res.status(200).json({
      message: "Login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  createUser,
  login
};
