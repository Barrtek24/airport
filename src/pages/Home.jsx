import React from "react";
import NavBar from "../components/NavBar";
import { Route, Routes } from "react-router-dom";
import Test1 from "./Test1";
import Inventory from "./Inventory";
export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <NavBar />
      <Routes>
        <Route path="/inv" element={<Inventory/> }/>
      </Routes>
      <div className=""></div>
    </div>
  );
}
