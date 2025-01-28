import React from "react";
import { useRole } from "./RoleContext";

const ProtectedComponent = ({ permission, children }) => {
  const { hasPermission } = useRole();

  // Check permission
  if (!hasPermission(permission)) {
    return <div style={{ color: "red" }}>Access Denied</div>;
  }

  return <>{children}</>;
};

export default ProtectedComponent;
