// api.js - API functions with authentication

import { getAuthHeader } from '../../utils/auth.js';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Helper function to handle errors
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`API Error: ${response.status} ${response.statusText}`, errorText);
    throw new Error(`API Request Failed: ${response.status} ${response.statusText}`);
  }
  
  // If response is 204 (No Content - common for DELETE), return null
  if (response.status === 204) return null;

  // Otherwise return JSON
  return response.json();
};

// --- DEPARTMENT API ---

// GET all departments (Public)
export const getDepartments = async () => {
  const response = await fetch(`${BASE_URL}/api/departments/`);
  return handleResponse(response);
};

// ADD a department (Requires Auth)
export const addDepartment = async (data) => {
  const response = await fetch(`${BASE_URL}/api/departments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(), // Include auth token
    },
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

// UPDATE a department (Requires Auth)
export const updateDepartment = async (id, data) => {
  const response = await fetch(`${BASE_URL}/api/departments/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(), // Include auth token
    },
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

// DELETE a department (Requires Auth)
export const deleteDepartment = async (id) => {
  const response = await fetch(`${BASE_URL}/api/departments/${id}/`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(), // Include auth token
    }
  });
  return handleResponse(response);
};

// --- DOCTOR API ---

// GET all doctors (Public)
export const getDoctors = async () => {
  const response = await fetch(`${BASE_URL}/api/doctors/`);
  return handleResponse(response);
};

// ADD a doctor (Requires Auth)
export const addDoctor = async (data) => {
  const response = await fetch(`${BASE_URL}/api/doctors/`, {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      ...getAuthHeader(), // Include auth token
    },
    body: data // FormData directly
    // body: JSON.stringify(data)
  });
  return handleResponse(response);
};

// UPDATE a doctor (Requires Auth)
export const updateDoctor = async (id, data) => {
  const response = await fetch(`${BASE_URL}/api/doctors/${id}/`, {
    method: "PUT",
    headers: {
      // "Content-Type": "application/json",
      ...getAuthHeader(), // Include auth token
    },
    body: data // FormData directly
    // body: JSON.stringify(data)
  });
  return handleResponse(response);
};

// DELETE a doctor (Requires Auth)
export const deleteDoctor = async (id) => {
  const response = await fetch(`${BASE_URL}/api/doctors/${id}/`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(), // Include auth token
    }
  });
  return handleResponse(response);
};

// --- APPOINTMENT API ---

// GET all appointments (Public)
export const getAppointments = async () => {
  const response = await fetch(`${BASE_URL}/api/appointments/`);
  return handleResponse(response);
};

// ADD an appointment (Public - patients book appointments)
export const addAppointment = async (data) => {
  const response = await fetch(`${BASE_URL}/api/appointments/`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      ...getAuthHeader(), // Include auth token if available
    },
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

// UPDATE an appointment (Requires Auth)
export const updateAppointment = async (id, data) => {
  const response = await fetch(`${BASE_URL}/api/appointments/${id}/`, {
    method: "PUT",
    headers: { 
      "Content-Type": "application/json",
      ...getAuthHeader(), // Include auth token
    },
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

// DELETE an appointment (Requires Auth)
export const deleteAppointment = async (id) => {
  const response = await fetch(`${BASE_URL}/api/appointments/${id}/`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(), // Include auth token
    }
  });
  return handleResponse(response);
};
