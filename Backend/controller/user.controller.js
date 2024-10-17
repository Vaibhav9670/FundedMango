import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// Signup controller
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });

        // Check if user already exists
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving it
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Send a successful response
        return res.status(201).json({
            message: "Account Created Successfully",
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.log("Error:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Login controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // If the user does not exist or the password does not match
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Send a successful response if the password matches
        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.log("Error:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
