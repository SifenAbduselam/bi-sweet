import { loginAdmin } from "../services/authService.js";

export function login(req, res) {
  const { email, password } = req.body;

  const token = loginAdmin(email, password);

  if (!token) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ token });
}