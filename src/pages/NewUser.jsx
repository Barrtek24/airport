import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import tfi from "../assets/takeOffIcon.svg";
import pI from "../inits/personDataInit.json";
export default function NewUser() {
    const nav = useNavigate();
    {
        localStorage.getItem("isActive") && nav("/");
    }

    const [data] = useState(pI);
    const [airportName, setAirportName] = useState("");
    const [airportCode, setAirportCode] = useState("");
    
    const createAccount = () => {
        data.airportName = airportName;
        data.airportCode = airportCode;
        console.log(data);
        localStorage.setItem("isActive", true);
        localStorage.setItem("userData", JSON.stringify(data))
        nav('/')
    };

    const handleNameChange = (e) => {
        setAirportName(e.target.value);
    };
    const handleCodeChange = (e) => {
        setAirportCode(e.target.value);
    }

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="bg-gray-600 p-4 flex flex-col justify-center items-center">
                <h1 className="text-3xl pb-4">Welcome in AirportRPG</h1>
                <p className="pb-4">
                    To start a game please tell us something about your airport.
                </p>
                <input
                    onChange={handleNameChange}
                    type="text"
                    placeholder="Airport name..."
                    className="p-1 rounded my-3 text-black"
                />
                <input
                    onChange={handleCodeChange}
                    type="text"
                    placeholder="Airport code..."
                    className="p-1 rounded my-3 text-black"
                />
                <button
                    onClick={createAccount}
                    className="bg-rose-600 p-4 rounded-lg hover:bg-rose-700 hover:scale-105 w-32 flex justify-between transition ease-in-out duration-100"
                >
                    Take off...
                    <img src={tfi} alt="TakeOffIcon" />
                </button>
            </div>
        </div>
    );
}
