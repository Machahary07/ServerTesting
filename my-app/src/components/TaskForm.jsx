// components/UserForm.jsx
import React, { useState } from 'react';
import './styles/UserForm.scss';

const UserForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add API call here
    console.log('🧑 New User:', user);
    setUser({ name: '', email: '' });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter name"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter email"
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
