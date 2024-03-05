import React from "react";
import NavBar from "../components/NavBar";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Test1 from "./Test1";
import Inventory from "./Inventory";

const Menu = () => {
  return(
    <div className="">menu</div>
  )
}



export default function Home() {

const loc = useLocation();

console.log(loc.pathname);

  return (
    <div className="flex w-full h-screen">
      <NavBar />
      <div className="">
        {(loc.pathname === "/home" || loc.pathname === "/") ? <Menu /> : <Outlet />}
        
      </div>
    </div>
  );
}
