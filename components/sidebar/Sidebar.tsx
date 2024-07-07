import DashboardNav from "../navbar/DashboardNav";
import DesktopSidebar from "./DesktopSidebar";

async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <main className="h-full flex flex-col">
        <DashboardNav />
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
