// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string; // Normally, you wouldn't return the password for security reasons
}

// Simulated user data storage (could be moved to a database)
const users: User[] = []; // This should persist data across requests in a real app

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(users); // Return all users
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
