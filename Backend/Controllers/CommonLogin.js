import Judge from "../Models/Login.js";

export const signupUser = async (req, res) => {
  const { username, password, email, role } = req.body;

  try {
    const existingUser = await Judge.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const newUser = new Judge({ username, password, email, role });
    await newUser.save();

    return res.status(201).json({status: true, newUser});
  } catch (error) {
    console.error("Error signing up:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Judge.findOne({ username, password });

    if (!user) {
      return res.status(404).json({ message: "Invalid username or password" });
    }

    return res.status(200).json({status:true, message: `${username} login successfully`, user});
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Judge.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error getting user by ID:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await Judge.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error getting all users:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
