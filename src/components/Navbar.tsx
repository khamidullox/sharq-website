import Link from "next/link";
import React from "react";
import { navabrLink } from "../../public/data/data";

function Navbar() {
  return (
    <div className=" fixed z-10 w-full">
      <div className="navbar  bg-black text-white h-20  ">
        <div className=" navbar-start">
          <Link href="/">
            {" "}
            <img
              src="/img/sharqLogo.jpg"
              alt="logo"
              width="120"
              height=""
              className=""
            />
          </Link>
        </div>
        <nav className=" navbar-center hidden md:flex ">
          <ul className="flex gap-8 m-0 p-0 list-none text-lg font-semibold tracking-widest">
            {navabrLink.map((item, id) => {
              return (
                <li
                  key={id}
                  className="relative group px-4 py-16 overflow-hidden"
                >
                  <Link
                    href={item.href}
                    className="relative z-10 group-hover:text-black transition-colors duration-700 text-2xl  "
                  >
                    {item.name}
                  </Link>
                  <div className="absolute left-0 bottom-3 top-5 w-full h-0 bg-white transition-all duration-700 group-hover:h-24"></div>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="navbar-end">
          <div>
            <Link
              href="tel:+998954007500"
              className=" font-bold text-xl hidden md:flex border border-e-white p-2 px-3 duration-700 rounded-xs hover:bg-amber-50 hover:text-black  "
            >
              Boglanish
            </Link>
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
              {navabrLink.map((item, id) => {
                return (
                  <li key={id}>
                    <Link
                      href={item.href}
                      className=" group-hover:text-black transition-colors   text-xl hover:bg-amber-50 hover:text-black  "
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="tel:+998954007500"
                  // className="group-hover:text-black transition-colors  text-xl mt-2 btn  hover:bg-amber-50 hover:text-black"
                  className="border border-e-white p-2 px-3 duration-700  text-xl mt-2  rounded-xs hover:bg-amber-50 hover:text-black"
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
