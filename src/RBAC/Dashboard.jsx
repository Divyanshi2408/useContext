import React from "react";
import ProtectedComponent from "./ProtectedComponent";
import { useRole } from "./RoleContext";

const Dashboard = () => {
  const { userRole, setUserRole } = useRole();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Role-Based Access Control Dashboard</h1>
      <p>Current Role: <strong>{userRole}</strong></p>
      
      <select
        value={userRole}
        onChange={(e) => setUserRole(e.target.value)}
        style={{ marginBottom: "20px", padding: "5px" }}
      >
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </select>

      <div>
        <ProtectedComponent permission="view-dashboard">
          <div style={{ padding: "10px", backgroundColor: "#e3f2fd", margin: "10px" }}>
            <h2>Dashboard Overview</h2>
            <p>This is the main dashboard accessible to all roles.</p>
          </div>
        </ProtectedComponent>

        <ProtectedComponent permission="edit-users">
          <div style={{ padding: "10px", backgroundColor: "#fff3e0", margin: "10px" }}>
            <h2>User Management</h2>
            <p>Admins and Editors can manage user data here.</p>
          </div>
        </ProtectedComponent>

        <ProtectedComponent permission="manage-settings">
          <div style={{ padding: "10px", backgroundColor: "#ede7f6", margin: "10px" }}>
            <h2>Settings Management</h2>
            <p>Admins can manage application settings here.</p>
          </div>
        </ProtectedComponent>
      </div>
    </div>
  );
};

export default Dashboard;
