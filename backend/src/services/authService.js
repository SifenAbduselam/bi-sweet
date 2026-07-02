import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

export function loginAdmin(email, password) {
  if (email !== adminEmail) return null;

  const isValid = password === adminPassword;
  if (!isValid) return null;

  const token = jwt.sign(
    { role: "admin", email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
}