// auth.js - Authentication utilities

const TOKEN_KEY = 'authToken';

// Get the API base URL
const getBaseUrl = () => {
  // 1. Check Vite env (Removed optional chaining so Vite can statically replace it during build)
  if (typeof window !== 'undefined' && import.meta.env.VITE_BACKEND_URL) {
    console.log('Using env URL:', import.meta.env.VITE_BACKEND_URL);
    return `${import.meta.env.VITE_BACKEND_URL}/api`;
  }
  
  // 2. Fallback: Check if running on localhost
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    console.log('Using localhost URL');
    return 'http://127.0.0.1:8000/api';
  }
  
  // 3. Production fallback
  console.log('Using production URL');
  return 'https://mallikahospital.co.in/api';
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

  // Handle errors gracefully (prevents HTML crash if Django throws a 500 error)
  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch (e) {
      errorData = { detail: 'Server error occurred. Please try again later.' };
    }
    console.log('Login error:', errorData);
    throw errorData;
  }

  const data = await response.json();
  
  // Extract only the string based on backend auth package
  const tokenString = data.token || data.access || data.key;

  if (tokenString) {
    console.log('Login success, saving token string');
    setAuthToken(tokenString); 
  } else {
    console.error('Data received but no token string found. Check backend response keys.');
  }

  return data;
};

// Get auth header for API requests
export const getAuthHeader = () => {
  const token = getAuthToken();
  if (token) {
    // Note: If you are using standard Django REST Framework Token Auth, 'Token' is correct. 
    // If you ever switch to SimpleJWT, you will change this to 'Bearer ${token}'.
    return {
      'Authorization': `Token ${token}`,
    };
  }
  return {};
};