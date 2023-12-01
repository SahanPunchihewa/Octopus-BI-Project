import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <>
      <div className="bg-primary-blue text-2xl">
        <div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
          <div className="pr-16 sm:text-center sm:px-16">
            {/* Link to home page */}
            {/* <Link to="/">
							<h1 className="mt-2 mb-2 text-2xl font-bold text-white">Travel Planning System</h1>
						</Link> */}

            {/* Nav links */}
            <nav className="flex justify-between">
              <ul className="flex">
                <li className="mr-6">
                  <Link
                    to="/"
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    <h1 className="mt-2 mb-2 text-2xl font-bold text-white">
                      Frontend
                    </h1>
                  </Link>
                </li>
              </ul>

              <ul className="flex p-1"></ul>

              <ul className="flex p-1">
                
                  <li className="ml-20 bg-white hover:bg-gray-300 px-5 rounded-lg ">
                    <Link
                      to="/admin/dashboard"
                      className="text-base font-bold  text-primary-blue "
                    >
                      <h1 className="mt-2 mb-2 text-base font-bold  text-primary-blue">
                        Dashboard
                      </h1>
                    </Link>
                  </li>
                

              </ul>

              {/* User Logout*/}
              <ul className="flex p-1">
              
                    <li className="ml-4 bg-white hover:bg-gray-300 px-5 rounded-lg ">
                      <Link
                        to="/admin/login"
                        className="text-base font-bold  text-primary-blue "
                      >
                        <h1 className="mt-2 mb-2 text-base font-bold  text-primary-blue">
                          Login
                        </h1>
                      </Link>
                    </li>
                    <li className="ml-10 bg-white hover:bg-gray-300 px-5 rounded-lg ">
                      <Link
                        to="/user/login"
                        className="text-base font-bold  text-primary-blue "
                      >
                        <h1 className="mt-2 mb-2 text-base font-bold  text-primary-blue">
                          Sign Up
                        </h1>
                      </Link>
                    </li>
              
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
