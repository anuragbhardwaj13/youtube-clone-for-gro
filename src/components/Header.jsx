/* eslint-disable no-unused-vars */
import React from "react";
import Logo from '../assets/creator.svg'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Link to="/">
            <div className="h-14 w-screen bg-slate-200 flex flex-row justify-center fixed z-10 top-0">
                <h2 className="flex flex-row justify-center items-center text-2xl font-bold">
                    <img className="w-20 h-20 mt-4" src={Logo} />
                    gro.Creator
                </h2>
            </div>
        </Link>

    );
};

export default Header;
