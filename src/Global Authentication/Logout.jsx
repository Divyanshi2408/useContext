import React from "react";
import { useAuth } from "./AuthContext";

const Logout = () => {
  const { logout, user } = useAuth();

  if (!user) {
    return null; // Only show if logged in
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={logout} style={{ padding: "10px 20px" }}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
