"use client";

import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdLightbulbCircle } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import Profile from "../profile/Profile";
import SiteGuide from "./SiteGuide";
import clsx from "clsx";
import useSidebar from "@/hooks/useSidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

function DashboardNav() {
  const [openModal, setOpenModal] = useState(false);
  const [siteGuideModalOpen, setSiteGuideModalOpen] = useState(false);
  const { sidebarOpen } = useSidebar();

  const pathname = usePathname();
  return (
    <div className={clsx(`h-full lg:block`, sidebarOpen ? "pl-80" : "pl-16")}>
      <div className="h-20 flex z-40 items-center justify-between px-10">
        {pathname == "about" && (
          <Link
            className="flex items-center flex-col"
            href="/dashboard"
            prefetch={true}
          >
            <AiOutlineHome className="w-6 h-6 hover:text-red-400 hover:cursor-pointer" />
            <span className="inline-block">home</span>
          </Link>
        )}
        <div className="px-10 text-center flex-1 text-[30px] bg-gray-100 shadow-md rounded-sm space-x-4 mx-10">
          <span className="text-red-900 text-[40px]"> T</span>
          <span className="text-white text-[40px]">&</span>
          <span className="text-[40px]">T</span> Passport Renewal System
        </div>
        <div className="space-x-10 items-center flex">
          <div
            onClick={() => setSiteGuideModalOpen(true)}
            className=" hover:bg-gray-400 hover:border-black/60 cursor-pointer hover:border-2 rounded-full border border-black px-3 py-1"
          >
            Site Guide
          </div>
          {siteGuideModalOpen && (
            <SiteGuide
              siteGuideModalOpen={siteGuideModalOpen}
              setSiteGuideModalOpen={setSiteGuideModalOpen}
            />
          )}
          <MdLightbulbCircle className="w-8 h-8 hover:text-red-400 hover:cursor-pointer" />
          <BsPersonCircle
            onClick={() => setOpenModal(true)}
            className="w-8 h-8 hover:text-red-400 hover:cursor-pointer"
          />
        </div>
        {openModal ? (
          <>
            <Profile openModal={openModal} setOpenModal={setOpenModal} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default DashboardNav;
