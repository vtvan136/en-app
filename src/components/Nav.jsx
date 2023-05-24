import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>

      <nav className="relative">
        <ul className="flex justify-around py-2 bottom-0 fixed bg-black w-full">
          <li className="basis-1/5">
            <Link to="/" className="flex-col flex justify-center items-center text-white gap-2 hover:bg-white hover:text-black p-2 rounded-2xl">
              <i className=" bx bx-home-alt"></i>
              Home
            </Link>
          </li>
          <li className="basis-1/5">
           
            <Link to="/topic" className="flex-col flex justify-center items-center text-white gap-2 hover:bg-white hover:text-black p-2 rounded-2xl">
               <i className=" bx bx-collection"></i>Topics
            </Link>
          </li>
          <li className="basis-1/5">
            
              <Link        to="/"
                className="flex-col flex justify-center items-center text-white gap-2 hover:bg-white hover:text-black p-2 rounded-2xl"
              >
                <i className=" bx bx-bar-chart-alt-2"></i>Rank
              </Link>
            
          </li>
          <li className="basis-1/5">
          
            <Link to="/" className="flex-col flex justify-center items-center text-white gap-2 hover:bg-white hover:text-black p-2 rounded-2xl">
               <i className=" bx bx-library"></i>Dictionary
            </Link>
          </li>
          <li className="basis-1/5">
            <Link to="/" className="flex-col flex justify-center items-center text-white gap-2 hover:bg-white hover:text-black p-2 rounded-2xl">
              <i className=" bx bx-user"></i>Account
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
