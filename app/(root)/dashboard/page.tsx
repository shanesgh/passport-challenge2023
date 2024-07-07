"use client";

import { DashboardUpdates } from "@/components/dashboard/DashboardUpdates";
import DashboardStatus from "@/components/dashboard/DashboardStatus";
import useSidebar from "../../../hooks/useSidebar";
import clsx from "clsx";
import DashBoardCalender from "@/components/dashboard/DashBoardCalender";
import DashboardUI from "@/components/dashboard/DashboardUI";

const Dashboard = () => {
  const { sidebarOpen } = useSidebar();
  return (
    <>
      <div
        className={clsx(` h-full lg:block`, sidebarOpen ? "pl-80" : "pl-16")}
      >
        <div className="lg:m-6 m-10 text-center flex flex-col space-y-2">
          <div className="p-4 ring-1 flex ring-gray-400 rounded-sm">
            <DashboardStatus />
          </div>
          <div className="flex space-x-10 ">
            <DashboardUI />
            <div>
              <DashBoardCalender />
            </div>
          </div>
          <div className="">
            <DashboardUpdates />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
