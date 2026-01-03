// api.js - API functions with authentication

import { getAuthHeader } from '../../utils/auth.js';

const BASE_URL = "https://mallika-hospital.onrender.com/api";

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
  const response = await fetch(`${BASE_URL}/departments/`);
  return handleResponse(response);
};

// ADD a department (Requires Auth)
export const addDepartment = async (data) => {
  const response = await fetch(`${BASE_URL}/departments/`, {
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
  const response = await fetch(`${BASE_URL}/departments/${id}/`, {
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
  const response = await fetch(`${BASE_URL}/departments/${id}/`, {
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
  const response = await fetch(`${BASE_URL}/doctors/`);
  return handleResponse(response);
};

// ADD a doctor (Requires Auth)
export const addDoctor = async (data) => {
  const response = await fetch(`${BASE_URL}/doctors/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(), // Include auth token
    },
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

// UPDATE a doctor (Requires Auth)
export const updateDoctor = async (id, data) => {
  const response = await fetch(`${BASE_URL}/doctors/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(), // Include auth token
    },
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

// DELETE a doctor (Requires Auth)
export const deleteDoctor = async (id) => {
  const response = await fetch(`${BASE_URL}/doctors/${id}/`, {
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
  const response = await fetch(`${BASE_URL}/appointments/`);
  return handleResponse(response);
};

// ADD an appointment (Public - patients book appointments)
export const addAppointment = async (data) => {
  const response = await fetch(`${BASE_URL}/appointments/`, {
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
  const response = await fetch(`${BASE_URL}/appointments/${id}/`, {
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
  const response = await fetch(`${BASE_URL}/appointments/${id}/`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(), // Include auth token
    }
  });
  return handleResponse(response);
};
