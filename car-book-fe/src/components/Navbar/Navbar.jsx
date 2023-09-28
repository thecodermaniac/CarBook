import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Menu from "../../assets/menu.png";

import { navLinks } from "./NavLinks";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            className={`top-0 z-30 sticky flex flex-col md:flex-row w-full p-4 md:px-[1.5rem] lg:px-[8rem] justify-between items-center md:p-4 transition-all border-b ${showMenu && "gap-4"
                } md:text-sm lg:text-base shadow-md bg-white`}
        >

            <div className="w-full md:w-max p-2 md:p-0 flex items-center justify-between">
                <span >
                    <img src={Logo} alt="Matricula" className="w-36" />
                </span>
                <button onClick={() => setShowMenu(!showMenu)} className="md:hidden">
                    <img src={Menu} alt="Menu" className="w-6" />
                </button>
            </div>
            <div
                className={`flex flex-col md:flex-row absolute md:relative mt-16 md:mt-0 bg-white ${showMenu ? 'h-72 md:h-max z-20' : 'h-0 md:h-max'
                    } transition-all duration-300 overflow-hidden md:overflow-visible md:w-[80%] w-full `}
            >
                <div className=" flex flex-col md:flex-row gap-6 w-full sm:justify-around items-center">
                    {navLinks.map((item, idx) => (
                        <span
                            key={idx}
                            className={`${"group text-black font-medium text-lg hover:text-[#0033FF] hover:underline underline-offset-[1rem]"}`}
                        >
                            {item.title}
                            {/* <span className="hidden group-hover:block">hghg</span> */}
                        </span>
                    ))}
                    <div className="md:hidden flex-row md:w-[40%] w-full justify-around bg-white flex">
                        <button className="border-[#0033FF] border-2 px-5 py-4 text-[#0033FF] font-medium hover:text-white hover:bg-[#0033FF]">Login</button>
                        <button className="bg-[#0033FF] border-[#0033FF] border-2 text-white px-5 py-4  hover:text-[#0033FF] hover:bg-white">Sign Up</button>
                    </div>
                </div>

                <div className="md:flex flex-row md:w-[40%] w-full justify-end gap-4 bg-white hidden">
                    <button className="border-[#0033FF] border-2 px-5 py-4 text-[#0033FF] font-medium hover:text-white hover:bg-[#0033FF]">Login</button>
                    <button className="bg-[#0033FF] border-[#0033FF] border-2 text-white px-5 py-4  hover:text-[#0033FF] hover:bg-white">Sign Up</button>
                </div>
            </div>


        </div>
    );
}

export default Navbar;
