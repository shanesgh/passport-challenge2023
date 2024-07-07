import { create } from "zustand";

type SidebarStore = {
  sidebarOpen: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
};

const useSidebar = create<SidebarStore>((set) => ({
  sidebarOpen: true,
  openSideBar: () => set({ sidebarOpen: true }),
  closeSideBar: () => set({ sidebarOpen: false }),
}));

export default useSidebar;
