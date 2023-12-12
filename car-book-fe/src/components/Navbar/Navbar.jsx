// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import Menu from "../../assets/menu.png";
import { Link } from "react-router-dom";
import { useUser } from "../../contex/UserContext";
import SignUp from "../SignUp";
import Login from "../Login";

import { navLinks } from "./NavLinks";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser, logout, show, setshow, open, setopen } = useUser();
  console.log(user);
  useEffect(() => {
    const user = localStorage.getItem("9-5Car");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(null);
    }
  }, [setUser]);

  return (
    <>
      <div
        className={`top-0 z-30 sticky flex flex-col md:flex-row w-full p-4 md:px-[1.5rem] lg:px-[8rem] justify-between items-center md:p-4 transition-all border-b ${
          showMenu && "gap-4"
        } md:text-sm lg:text-base shadow-md bg-white`}
      >
        <div className="w-full md:w-max p-2 md:p-0 flex items-center justify-between">
          <Link to={"/"}>
            <img src={Logo} alt="Matricula" className="w-36" />
          </Link>
          <button onClick={() => setShowMenu(!showMenu)} className="md:hidden">
            <img src={Menu} alt="Menu" className="w-6" />
          </button>
        </div>
        <div
          className={`flex flex-col md:flex-row absolute md:relative mt-16 md:mt-0 bg-white ${
            showMenu ? "h-72 md:h-max z-20" : "h-0 md:h-max"
          } transition-all duration-300 overflow-hidden md:overflow-visible md:w-[80%] w-full `}
        >
          <div className=" flex flex-col md:flex-row gap-6 w-full sm:justify-around items-center">
            {navLinks.map((item, idx) => (
              <Link
                to={item.link}
                key={idx}
                className={`${"group text-black font-medium text-lg hover:text-mainColor hover:underline underline-offset-[1rem]"} cursor-pointer`}
                onClick={() => {
                  if (item.scrollId !== undefined) {
                    document
                      .getElementById("verdicts")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.title}
                {/* <span className="hidden group-hover:block">hghg</span> */}
              </Link>
            ))}
            <div className="md:hidden flex-row md:w-[40%] w-full justify-center gap-4 bg-white flex">
              {user === null ? (
                <button
                  className="bg-mainColor border-mainColor border-2 text-white px-5 py-4  hover:text-mainColor hover:bg-white"
                  onClick={() => {
                    setopen(true);
                  }}
                >
                  Login / Sign Up
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <p className="text-grayText text-lg">{user?.name}</p>
                  <button
                    className="bg-mainColor border-mainColor border-2 text-white px-5 py-4  hover:text-mainColor hover:bg-white"
                    onClick={logout}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="md:flex flex-row md:w-[40%] w-full justify-end gap-4 bg-white hidden">
            {user === null ? (
              <button
                className="bg-mainColor border-mainColor border-2 text-white px-5 py-4  hover:text-mainColor hover:bg-white"
                onClick={() => {
                  setopen(true);
                }}
              >
                Login / Sign Up
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <p className="text-grayText text-lg">{user?.name}</p>
                <button
                  className="bg-mainColor border-mainColor border-2 text-white px-5 py-4  hover:text-mainColor hover:bg-white"
                  onClick={logout}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Signin And SigUp pop start */}

      <div
        className={`${
          open
            ? "fixed flex justify-center items-center top-0 left-0  w-[100%] h-[100%] py-4 scale-100 z-50 bg-[#1c1c1dd1] filter backdrop-blur"
            : "absolute scale-0 "
        } transition-all border-b border-gray-400`}
      >
        <div className="md:w-[25%] w-[90%] h-fit bg-white py-3 md:px-10 px-4 rounded-md">
          {!show && <Login setmodal={setopen} />}
          {!show && (
            <div className="flex justify-center text-[14px] py-2">
              Not Registered? &nbsp;
              <span
                className="underline  underline-offset-1 cursor-pointer hover:text-[#16375C]"
                onClick={() => {
                  setshow(!show);
                }}
              >
                SignUp
              </span>
            </div>
          )}
          {show && <SignUp setmodal={setopen} />}
          {show && (
            <div className="flex justify-center text-[14px] py-2">
              Registered? &nbsp;
              <span
                className="underline underline-offset-1 cursor-pointer hover:text-[#16375C]"
                onClick={() => {
                  setshow(!show);
                }}
              >
                SignIn
              </span>
            </div>
          )}
        </div>
      </div>
      {/* Signin And SigUp pop end */}
    </>
  );
}

export default Navbar;
