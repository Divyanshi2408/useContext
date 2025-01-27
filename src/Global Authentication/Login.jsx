import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const Login = () => {
  const { login, user } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    console.log("Attempting login with:", username, password);
    if (!login(username, password)) {
      setError("Invalid credentials!");
    } else {
      setError("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <h2>Welcome, {user.username}!</h2>
      ) : (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "8px", marginBottom: "10px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "8px", marginBottom: "10px" }}
          />
          <br />
          <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
            Login
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Login;
