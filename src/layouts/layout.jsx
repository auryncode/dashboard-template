import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appSidebar";
import { ThemeProvider } from "@/components/themeProvider";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-screen p-5">
          <Navbar />
          <Outlet />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
