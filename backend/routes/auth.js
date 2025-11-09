import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) return res.status(400).json({ message: "Email already in use" });

		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await User.create({ name, email, password: hashedPassword });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
		res.status(201).json({ token, user: { name: user.name, email: user.email } });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// LOGIN
router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(400).json({ message: "User not found" });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
		res.json({ token, user: { name: user.name, email: user.email } });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

router.get("/dashboard", verifyToken, async (req, res) => {
	try {
		// req.user.id comes from the verified token
		const user = await User.findById(req.user.id).select("-password");
		if (!user) return res.status(404).json({ message: "User not found" });

		res.json({ user });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

export default router;
