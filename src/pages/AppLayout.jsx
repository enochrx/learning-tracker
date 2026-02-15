import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">Insight</footer>
    </div>
  );
};

export default AppLayout;
