const BASE_URL = "https://mallika-hospital.onrender.com/api";

// Helper function to handle errors
const handleResponse = async (response) => {
  if (!response.ok) {
    // If the server says 404, 405, 500, etc., we throw an error here.
    const errorText = await response.text();
    throw new Error(`API Request Failed: ${response.status} ${response.statusText}`);
  }
  
  // If response is 204 (No Content - common for DELETE), return null
  if (response.status === 204) return null;

  // Otherwise return JSON
  return response.json();
};

// GET all departments
export const getDepartments = async () => {
  const response = await fetch(`${BASE_URL}/departments/`);
  return handleResponse(response);
};

// ADD a department
export const addDepartment = async (data) => {
  const response = await fetch(`${BASE_URL}/departments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

// UPDATE a department
export const updateDepartment = async (id, data) => {
  const response = await fetch(`${BASE_URL}/departments/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

// DELETE a department
export const deleteDepartment = async (id) => {
  const response = await fetch(`${BASE_URL}/departments/${id}/`, {
    method: "DELETE"
  });
  return handleResponse(response);
};