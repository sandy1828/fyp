// services/authService.ts

export const signupUser = async (firstName: string, lastName: string, email: string, password: string) => {
  const response = await fetch('http://localhost:3000/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName, email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to sign up');
  }

  return await response.json();
};

export const loginUser = async (email: string, password: string) => {
  const response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to log in');
  }

  return await response.json();
};
