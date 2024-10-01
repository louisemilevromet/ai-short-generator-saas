"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  FileVideo,
  ShieldPlus,
  CircleUser,
  Video,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const navItems = [
    { icon: <Home size={20} />, label: "Home", href: "/dashboard/home" },
    {
      icon: <FileVideo size={20} />,
      label: "Create New",
      href: "/dashboard/create",
    },
    {
      icon: <ShieldPlus size={20} />,
      label: "Upgrade",
      href: "/dashboard/upgrade",
    },
    { icon: <CircleUser size={20} />, label: "User", href: "/dashboard/user" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Top Navigation */}
      <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="mr-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 lg:hidden"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
              <Link href="/" className="flex items-center">
                <Video className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                <span className="ml-2 font-bold text-xl text-purple-800 dark:text-purple-300 hidden sm:inline">
                  VideoAI
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Avatar className="mr-4">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-purple-800 dark:text-purple-300 mr-4 hidden sm:inline">
                Welcome, User!
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside
          className={`w-64 bg-white dark:bg-gray-800 border-r border-purple-200 dark:border-purple-700 flex flex-col ${
            isMobileMenuOpen ? "fixed inset-y-0 left-0 z-20" : "hidden"
          } lg:relative lg:block transition-all duration-300 ease-in-out`}
        >
          <div className="flex items-center justify-between p-4 lg:hidden">
            <span className="font-semibold text-purple-800 dark:text-purple-300">
              Menu
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-800"
              aria-label="Close menu"
            >
              <X size={24} />
            </Button>
          </div>
          <nav className="flex-1 overflow-y-auto pt-5 pb-4">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 text-base font-medium text-purple-800 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4">
            <Button
              onClick={handleSignOut}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-900">
          {/* Dashboard Content */}
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
