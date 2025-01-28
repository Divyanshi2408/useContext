import React, { createContext, useContext, useState } from "react";

// Define roles and their permissions
const roles = {
  admin: ["view-dashboard", "edit-users", "manage-settings"],
  editor: ["view-dashboard", "edit-users"],
  viewer: ["view-dashboard"],
};

// Create Role Context
const RoleContext = createContext();

// Role Provider Component
export const RoleProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("viewer"); // Default role: viewer

  // Check if a role has specific permission
  const hasPermission = (permission) => roles[userRole]?.includes(permission);

  return (
    <RoleContext.Provider value={{ userRole, setUserRole, hasPermission }}>
      {children}
    </RoleContext.Provider>
  );
};

// Custom hook to use Role Context
export const useRole = () => useContext(RoleContext);
