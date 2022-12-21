import React from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <React.Fragment>
      <Home />
      <Modal />
      <Sidebar />
    </React.Fragment>
  );
}
