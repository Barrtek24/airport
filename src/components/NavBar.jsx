import React, { useState } from "react";
import logo from '../assets/200x113.png'
import { Link } from "react-router-dom";
export default function NavBar() {

    


    

    return (
        <div className=" basis-64 border-r-2 p-4 border-slate-600 h-screen sticky top-0">
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col justify-center ">
                    <img src={logo} alt="logo" />
                    <div className="text-4xl">Miejsce na side menu</div>
                </div>
                <div className="">Tu będą podstawowe statystyki dotyczące info kasy itp</div>
            </div>
        </div>
    );
}
