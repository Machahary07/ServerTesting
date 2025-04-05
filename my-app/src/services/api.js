const BASE_URL = 'http://localhost:5000';

// TASKS API
export const getTasks = async () => {
  const res = await fetch(`${BASE_URL}/tasks`);
  return res.json();
};

export const createTask = async (taskData) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData),
  });
  return res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${BASE_URL}/tasks/${id}`, { method: 'DELETE' });
};

export const updateTask = async (id, updatedData) => {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });
  return res.json();
};

// USERS API
export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
};

export const createUser = async (userData) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const deleteUser = async (id) => {
  await fetch(`${BASE_URL}/users/${id}`, { method: 'DELETE' });
};
