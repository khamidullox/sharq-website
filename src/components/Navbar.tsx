import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className=" fixed z-10 w-full">
      <div className="navbar  bg-black text-white h-20  ">
        <div className=" navbar-start">
          <img
            src="/sharqLogo.jpg"
            alt="logo"
            width="120"
            height=""
            className=""
          />
        </div>

        <nav className=" navbar-center hidden md:flex ">
          <ul className="flex gap-8 m-0 p-0 list-none text-lg font-semibold tracking-widest">
            <li className="relative group px-4 py-16 overflow-hidden">
              <Link
                href="#home"
                className="relative z-10 group-hover:text-black transition-colors duration-700  "
              >
                Assosiy
              </Link>
              <div className="absolute left-0 bottom-3 top-5 w-full h-0 bg-white transition-all duration-700 group-hover:h-24"></div>
            </li>

            <li className="relative group px-4 py-16 overflow-hidden">
              <a
                href="#taomlar-home"
                className="relative z-10 group-hover:text-black transition-colors duration-700"
              >
                Taomlar
              </a>
              <div className="absolute left-0 bottom-3 top-5 w-full h-0 bg-white transition-all duration-700 group-hover:h-24"></div>
            </li>
            <li className="relative group px-4 py-16 overflow-hidden">
              <Link
                href="#about-home"
                className="relative z-10 group-hover:text-black transition-colors duration-700"
              >
                Biz haqimizda
              </Link>
              <div className="absolute left-0 bottom-3 top-5 w-full h-0 bg-white transition-all duration-700 group-hover:h-24"></div>
            </li>
          </ul>
        </nav>
        <div className="navbar-end">
          <div>
            <button className="btn btn-ghost font-bold text-xl hidden md:flex">
              Boglanish | Buyurtma berish
            </button>
          </div>

          <div className="dropdown dropdown-end md:hidden ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blck  rounded-box z-1 mt-3 w-52 p-2 shadow bg-black "
            >
              <li>
                <Link
                  href="#taomlar-home"
                  className=" group-hover:text-black transition-colors   text-xl hover:bg-amber-50 hover:text-black  "
                >
                  Assosiy
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className=" group-hover:text-black transition-colors  text-xl hover:bg-amber-50 hover:text-black"
                >
                  Taomlar
                </Link>
              </li>
              <li>
                <Link
                  href="#about-home"
                  className="group-hover:text-black transition-colors  text-xl hover:bg-amber-50 hover:text-black"
                >
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="group-hover:text-black transition-colors  text-xl mt-2 btn  hover:bg-amber-50 hover:text-black"
                >
                  Boglanish
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
