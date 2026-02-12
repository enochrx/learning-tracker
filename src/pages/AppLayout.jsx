import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <main className="container">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
