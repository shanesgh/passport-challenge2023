"use client";

import useSidebar from "@/hooks/useSidebar";
import clsx from "clsx";
import Link from "next/link";

type DesktopItemProps = {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
  last?: boolean;
};

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  href,
  icon: Icon,
  active,
  onClick,
  last,
}) => {
  const { sidebarOpen } = useSidebar();

  const handleClick = () => {
    if (onClick) return onClick();
  };
  return (
    <>
      {last && (
        <div className="flex items-center">
          <div className="border border-b border-gray-400 w-full" />
          <span className=" text-sm text-gray-500">premium</span>
        </div>
      )}
      <li
        onClick={handleClick}
        key={label}
        className={clsx(``, active && "bg-gray-100 text-black")}
      >
        <Link
          href={href}
          className={clsx(
            ` 
            flex 
            rounded-sm
            text-sm 
            leading-6 
            font-semibold 
            text-gray-500 
            hover:text-black 
            hover:bg-gray-100
          `
          )}
        >
          <div className="flex p-5 space-x-3">
            <Icon className="h-6 w-6 shrink-0 " />
            {sidebarOpen ? <span>{label}</span> : null}
          </div>
        </Link>
      </li>
    </>
  );
};

export default DesktopItem;
