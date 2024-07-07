"use client";

import { Avatar } from "@nextui-org/react";
import React, { useCallback, useEffect, useRef } from "react";
import { GiCancel } from "react-icons/gi";

type ProfileProps = {
  openModal: boolean;
  setOpenModal: (val: boolean) => void;
};

const Profile = ({ openModal, setOpenModal }: ProfileProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handlerModalClick = useCallback(
    (e: MouseEvent) => {
      if (
        modalRef.current &&
        modalRef.current.contains(e.target as HTMLElement)
      ) {
        console.log("clicked inside profile custom modal");
      } else {
        setOpenModal(false);
      }
    },
    [setOpenModal]
  );

  useEffect(() => {
    document.addEventListener("click", handlerModalClick);
    return () => {
      document.removeEventListener("click", handlerModalClick);
    };
  }, [handlerModalClick]);

  console.log("render profile");

  return (
    <>
      {openModal && (
        <div className="w-full overflow-hidden fixed h-full right-0 bottom-0 z-10 bg-black/40"></div>
      )}
      <div
        ref={modalRef}
        className="w-[30%] z-40 fixed right-0 bottom-0 bg-gray-100  h-full"
      >
        <div className="flex p-2 items-center justify-between">
          <div onClick={() => setOpenModal(false)} className="">
            <GiCancel className="w-6 h-6 hover:text-red-400 hover:cursor-pointer" />
          </div>
          <Avatar size="lg" name="Asia Belfon" />
        </div>
        <div className="w-full text-center text-[30px] mb-10">Asia Belfon</div>
        <div className="flex space-y-12 flex-col items-center justify-center px-10">
          <div className="w-full flex ">
            <span className="flex-1 inline-block">Email</span>
            asiabelfon@gmail.com
          </div>
          <div className="w-full flex ">
            <span className="flex-1 inline-block">Passport Number</span>
            TTPP12345
          </div>
          <div className="w-full flex ">
            <span className="flex-1 inline-block">Passport Renewal Dates</span>
            n.a
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
