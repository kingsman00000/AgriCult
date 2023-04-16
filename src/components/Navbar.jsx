import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import doraemon from '../assets/doraemon.png'
import logo from '../assets/logo.png'
import "./Navbar.css";
const Navbar = () => {

  const arr = [
  {name:"Agri Equipments",href : "#"},
  {name:"Agri Waste",href : "#"},
  {name:"Ayurveda",href : "#"},
  {name:"Dry Fruits & Nuts",href : "#"},
  {name:"Flowers",href : "#"},
  {name:"Fodder",href : "#"},
  {name:"Food Grains/Cereals",href : "#"},
  {name:"Fruits",href : "#"},
  {name:"Home Made Products",href : "#"},
  {name:"Manures And Fertilizers",href : "#"},
  {name:"Nursery",href : "#"},
  {name:"Oil Seeds",href : "#"},
  {name:"Organic Products List",href : "#"},
  {name:"Siridhanya Millets",href : "#"},
  {name:"Fertilizers",href : "#"},]

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="my-navbar max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              className="h-8 mr-3"
              alt="AgriCult"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div className="flex md:order-2">
            <div className="flex mx-3 rounded-xl overflow-hidden ">
              <input type="text" className="searchBar max-sm:w-32" />
              <button className="bg-blue-400 ">
                <BiSearch className="text-white text-3xl" />
              </button>
            </div>

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>

            
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className=" threeLines inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="rounded-full w-9 h-9 bg-white relative left-8 overflow-hidden"> 
            <img src={doraemon} alt="" /></div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="allCategories">
                <a
                  href="/"
                  className="  flex py-2 pl-3 pr-4 items-center justify-center space-x-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <apan>All Categories </apan> <AiFillCaretDown />{" "}
                </a>
              </li>
              <div
                className="absolute dropMenu dark:bg-gray-900 p-4 rounded-xl text-white"
                style={{
                  left: "12em",
                  top: "3em",
                  // "display":"none"
                }}
              >
                <ul>
                  {
                    arr.map((a)=> (
                      <li className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <a href={a.href}>{a.name}</a>
                  </li>
                    ))
                  }
                  
                  
                  
                </ul>
              </div>

              <li>
                <a
                  href="/guide"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Guide
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/expert"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Expert
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Become a Seller
                </a>
              </li>
              <li>
                <a
                  href="/notice"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Notice Board
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
