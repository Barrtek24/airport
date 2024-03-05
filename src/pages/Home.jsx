import React from "react";
import NavBar from "../components/NavBar";
import { Link, Outlet, useLocation } from "react-router-dom";
import menuList from "../inits/homeInit.json";
import leftArrow from "../assets/24x24-rightArrow.svg";

const Menu = () => {
    return (
        <div className="flex flex-col ">
            {menuList.map((el) => (
                <Eol data={el} key={el.name} />
            ))}
        </div>
    );
};

const Eol = ({ data }) => {
    return (
        <Link to={data.endpoint}>
            <div className="border-t-2 w-full flex justify-between items-center py-2 border-box">
                <div className="flex">
                    <img
                        src={require(`../assets/${data.image}`)}
                        alt={data.name}
                    />
                    <div className="flex flex-col p-2">
                        <p className="text-xl mb-2">{data.name}</p>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="">
                    <img src={leftArrow} alt="" />
                </div>
            </div>
        </Link>
    );
};

export default function Home() {
    const loc = useLocation();

    console.log(loc.pathname);

    return (
        <div className="flex h-[4000px]">
            <NavBar />
            <div className="w-full p-2">
                {loc.pathname === "/home" || loc.pathname === "/" ? (
                    <Menu />
                ) : (
                    <Outlet />
                )}
            </div>
        </div>
    );
}
