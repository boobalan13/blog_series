import AdminNavbar from "@/Component/AdminNavbar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
};

export default AdminLayout;
