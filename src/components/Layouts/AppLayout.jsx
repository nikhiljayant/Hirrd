import React from "react";
// Dependency
import { Outlet } from "react-router-dom";
// Components
import Header from "../Common/Header";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen px-20">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with ❤️ by Nikhil Jayant
      </div>
    </div>
  );
};

export default AppLayout;
