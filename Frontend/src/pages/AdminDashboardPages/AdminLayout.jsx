import React from "react";
import Sidebar from "../../components/Admin-Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-0 bg-white overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
