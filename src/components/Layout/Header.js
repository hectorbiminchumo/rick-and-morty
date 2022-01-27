import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <nav className="bg-gray-800 ">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="ml-8 flex-shrink-0 flex items-center">
                  <Link to="/characters">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://i.ibb.co/PGxdFtq/Rickand-Morty-removebg-preview.png"
                      alt="rickandmorty"
                    />
                    <img
                      className="hidden lg:block h-8 w-20"
                      src="https://i.ibb.co/PGxdFtq/Rickand-Morty-removebg-preview.png"
                      alt="rickandmorty"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className=" flex space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                    

                    <Link
                      to="/characters"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Characters
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  {/* <!-- Heroicon name: outline/bell --> */}
                  <Link to="/characters">
                    <img
                      src="https://i.ibb.co/mNM1Kjn/rickmorty-removebg-preview.png"
                      className="h-12 w-12"
                      alt="rickandmorty"
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
