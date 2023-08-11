import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function Layouts() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
