"use client";

import useRoutes from "@/hooks/useRoutes";
import clsx from "clsx";
import DesktopItem from "./DesktopItem";
import Navbar from "../navbar/Navbar";

const DesktopSidebar = () => {
  const routes = useRoutes();
  return (
    <>
      <div
        className={clsx(
          `
        hidden 
        lg:fixed 
        lg:left-0 
        lg:flex
        lg:flex-col
        justify-between
      `
        )}
      >
        <Navbar />
        <ul className="flex flex-col  ">
          {routes.map((item, idx) =>
            idx == routes.length - 1 ? (
              <DesktopItem
                key={item.label}
                last={true}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ) : (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default DesktopSidebar;
