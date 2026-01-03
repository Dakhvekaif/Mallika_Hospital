// auth.js - Authentication utilities

const TOKEN_KEY = 'authToken';
const BASE_URL = "https://mallika-hospital.onrender.com/api";

// Get stored auth token
export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Store auth token
export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Remove auth token (logout)
export const clearAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = getAuthToken();
  return !!token;
};

// Login API call
export const apiLogin = async (username, password) => {
  const response = await fetch(`${BASE_URL}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }

  return response.json();
};

// Get auth header for API requests
export const getAuthHeader = () => {
  const token = getAuthToken();
  if (token) {
    return {
      'Authorization': `Token ${token}`,
    };
  }
  return {};
};
