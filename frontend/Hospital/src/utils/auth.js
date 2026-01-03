// auth.js - Authentication utilities

const TOKEN_KEY = 'authToken';

// Get the API base URL
const getBaseUrl = () => {
  // Check if we're in a browser environment with Vite
  if (typeof window !== 'undefined') {
    // Try to get from Vite env
    try {
      const envUrl = import.meta.env?.VITE_BACKEND_URL;
      if (envUrl) {
        console.log('Using env URL:', envUrl);
        return `${envUrl}/api`;
      }
    } catch (e) {
      // Ignore errors
    }
  }
  
  // Fallback: Check if running on localhost
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    console.log('Using localhost URL');
    return 'http://127.0.0.1:8000/api';
  }
  
  // Production fallback
  console.log('Using production URL');
  return 'https://mallika-hospital.onrender.com/api';
};

const BASE_URL = getBaseUrl();

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
  console.log('Attempting login to:', `${BASE_URL}/login/`);
  
  const response = await fetch(`${BASE_URL}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  console.log('Login response status:', response.status);

  if (!response.ok) {
    const errorData = await response.json();
    console.log('Login error:', errorData);
    throw errorData;
  }

  const data = await response.json();
  console.log('Login success, token received');
  return data;
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