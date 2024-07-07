"use client";

import useSidebar from "@/hooks/useSidebar";
import clsx from "clsx";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { sidebarOpen, openSideBar, closeSideBar } = useSidebar();

  return (
    <div
      className={clsx(
        `
    h-20 
    flex 
    items-center 
    justify-around
    `,
        sidebarOpen ? "w-80" : "w-10"
      )}
    >
      {sidebarOpen ? (
        <>
          <h2>TT-Renew</h2>
          <AiOutlineLeft
            onClick={closeSideBar}
            className="w-6 h-6 hover:text-red-400 hover:cursor-pointer"
          />
        </>
      ) : (
        <AiOutlineRight
          onClick={openSideBar}
          className="w-6 h-6 ml-3 hover:text-red-400 hover:cursor-pointer"
        />
      )}
    </div>
  );
};

export default Navbar;
