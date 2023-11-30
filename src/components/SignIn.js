import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');  // New state for holding a message

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      setMessage(`Error: ${response.statusText}`);  // Set error message
      return;
    }

    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);  // Store the token in local storage
      setMessage('Sign-in successful!');  // Set success message
      // Optionally, redirect to a different page
      // For example: props.history.push('/profile');
    } else {
      setMessage('Invalid credentials');  // Set error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {message && <div className="message">{message}</div>}  {/* Render message if it's set */}
    </div>
  );
}

export default SignIn;
