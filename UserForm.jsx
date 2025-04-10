import React, { useState } from 'react';
import { validateEmail } from './validators';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors as user types
    setErrors(prev => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      formValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      console.log('Form submitted:', formData);
      alert('Form submitted!');
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <h2>User Form</h2>

      <div>
        <label>Name:</label><br />
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          required
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label><br />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
