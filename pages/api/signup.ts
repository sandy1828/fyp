// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string; // Note: In a real app, you should hash passwords
}

const users: User[] = []; // Simulated user data storage

// pages/api/signup.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password } = req.body;

    // Check if the user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Add new user to the array
    users.push({ firstName, lastName, email, password });
    console.log("User created:", { firstName, lastName, email }); // Log user creation
    return res.status(201).json({ message: "User created successfully" });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

