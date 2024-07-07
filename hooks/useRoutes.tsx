import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineHome, HiOutlineCalculator } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";
import { CiPassport1 } from "react-icons/ci";
import { LuMessagesSquare } from "react-icons/lu";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FaNfcDirectional, FaPassport } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const useRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        href: "/dashboard",
        icon: HiOutlineHome,
        active: pathname === "/dashboard",
        onClick: () => router.push("/dashboard"),
      },
      {
        label: "Locations",
        href: "/locations",
        icon: FaNfcDirectional,
        active: pathname === "/locations",
        onClick: () => router.push("/locations"),
      },
      {
        label: "Renewal 16 & Older",
        href: "/renewal",
        icon: FaPassport,
        active: pathname === "/renewal",
        onClick: () => router.push("/renewal"),
      },
      {
        label: "Renewal Under 16",
        href: "/renewalunder",
        icon: CiPassport1,
        active: pathname === "/renewalunder",
        onClick: () => router.push("/renewalunder"),
      },
      {
        label: "Fee Calculator",
        href: "/fees",
        icon: HiOutlineCalculator,
        active: pathname === "/fees",
        onClick: () => router.push("/fees"),
      },
      {
        label: "FAQ",
        href: "/faq",
        icon: LuMessagesSquare,
        active: pathname === "/faq",
        onClick: () => router.push("/faq"),
      },
      {
        label: "About Us",
        href: "/about",
        icon: IoPeopleCircleOutline,
        active: pathname === "/about",
        onClick: () => router.push("/about"),
      },
      {
        label: "Chat",
        href: "/chat",
        icon: BsChatDots,
        active: pathname === "/chat",
        onClick: () => router.push("/chat"),
      },
    ],
    [pathname, router]
  );

  return routes;
};

export default useRoutes;
