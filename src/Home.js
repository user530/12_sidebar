import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function App() {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
}
