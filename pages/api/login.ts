// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string; // Note: In a real app, you should hash passwords
}

const users: User[] = []; // This should ideally come from a database

// pages/api/login.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Find the user by email
    const user = users.find((user) => user.email === email);
    console.log("Login attempt for:", email); // Log login attempts
    console.log("User found:", user); // Log found user details

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // If authentication is successful
    return res.status(200).json({ message: "Login successful", name: user.firstName });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
