import { AvatarComponent } from "@root/components/Avatar";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
const Topnavbar = (props: any) => {
  const { handleDrawer } = props;

  return (
    <nav className="z-20 h-[13vh] overflow-hidden fixed left-0 right-0">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4 px-8">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto m-auto" id="navbar-default">
          <h1 className=" text-f48 text-center">Lottery</h1>
        </div>
      </div>
    </nav>
  );
};

export default Topnavbar;
