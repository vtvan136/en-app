import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="relative h-screen">
        <ul className="flex justify-around py-2 bottom-0 absolute bg-black w-full">
          <li>
            <a href="/" className="flex-col flex justify-center items-center text-white gap-2 hover:bg-white hover:text-black p-2 rounded-2xl">
              <i className=" bx bx-home-alt"></i>
              Home
            </a>
          </li>
          <li>
           
            <a href="/" className="flex-col flex justify-center items-center text-white gap-2 hover:bg-white hover:text-black p-2 rounded-2xl">
               <i className=" bx bx-collection"></i>Topics
            </a>
          </li>
          <li>
            
              <a
                href="/"
                className="flex-col flex justify-center items-center text-white gap-2 hover:bg-white hover:text-black p-2 rounded-2xl"
              >
                <i className=" bx bx-bar-chart-alt-2"></i>Rank
              </a>
            
          </li>
          <li>
          
            <a href="/" className="flex-col flex justify-center items-center text-white gap-2 hover:bg-white hover:text-black p-2 rounded-2xl">
               <i className=" bx bx-library"></i>Dictionary
            </a>
          </li>
          <li>
            <a href="/" className="flex-col flex justify-center items-center text-white gap-2 hover:bg-white hover:text-black p-2 rounded-2xl">
              <i className=" bx bx-user"></i>Account
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
