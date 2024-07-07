"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useSidebar from "@/hooks/useSidebar";
import { LocationSelect } from "@/components/locations/LocationSelect";
import LocationMap from "@/components/locations/LocationMap";
import DynamicMap from "@/components/dynamicMap";

function Locations() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { sidebarOpen } = useSidebar();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-[calc(100vh-85px)]">
      <div
        className={clsx(
          `h-full lg:block flex lg:space-x-4 space-x-2`,
          sidebarOpen ? "pl-80" : "pl-16"
        )}
      >
        <div className="flex p-6">
          <div className="p-2 align-center z-40 mr-10">
            <LocationSelect />
          </div>
          {mounted ? <DynamicMap /> : "loading..."}
        </div>
      </div>
    </div>
  );
}

export default Locations;
