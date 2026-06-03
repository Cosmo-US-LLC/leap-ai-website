import { Outlet } from "react-router-dom";
import { NewHomeHeader } from "./NewHomeHeader.jsx";
import { NewHomeFooter } from "./NewHomeFooter.jsx";
import "../../assets/style/new-home.css";
import "../../assets/style/about.css";

export function NewHomeLayout() {
  return (
    <div className="new-home min-h-screen bg-white">
      <NewHomeHeader />
      <main>
        <Outlet />
      </main>
      <NewHomeFooter />
    </div>
  );
}
