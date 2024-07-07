import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "leaflet/dist/leaflet.css";
import { Providers } from "../providers";
import Sidebar from "@/components/sidebar/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T&T Passport Renewal",
  description: "T&T Passport Renewal Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="" lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster />
          <Sidebar>{children}</Sidebar>
        </Providers>
      </body>
    </html>
  );
}
