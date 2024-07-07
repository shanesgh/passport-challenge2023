"use client";

import useSidebar from "../../../hooks/useSidebar";
import clsx from "clsx";
import Faq from "@/components/faq/Faq";

function Locations() {
  const { sidebarOpen } = useSidebar();
  return (
    <div className="h-[calc(100vh-85px)]">
      <div className={clsx(`h-full lg:block`, sidebarOpen ? "pl-80" : "pl-16")}>
        <div className="px-10 md:px-20 flex flex-col items-center justify-start h-full ">
          <Faq />
        </div>
      </div>
    </div>
  );
}

export default Locations;
