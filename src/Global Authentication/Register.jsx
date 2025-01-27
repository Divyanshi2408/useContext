import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const Register = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    register(username, password);
    alert("User registered successfully!");
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Register</h2>
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
      <button onClick={handleRegister} style={{ padding: "10px 20px" }}>
        Register
      </button>
    </div>
  );
};

export default Register;
