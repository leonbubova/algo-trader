"use client";
import React from "react";
import Link from "next/link";
import {
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  BarChart2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebar } from "@/contexts/SidebarContext";

interface MenuItemProps {
  href: string;
  icon: React.ElementType;
  text: string;
}

const Sidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  const MenuItem: React.FC<MenuItemProps> = ({ href, icon: Icon, text }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={`flex items-center py-2 px-2 text-gray-700 hover:bg-gray-200 rounded transition-all duration-300 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <Icon size={16} strokeWidth={1.5} />
            </div>
            {!isCollapsed && <span className="ml-3 text-xs">{text}</span>}
          </Link>
        </TooltipTrigger>
        {isCollapsed && <TooltipContent side="right">{text}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );

  const MobileMenuItem: React.FC<MenuItemProps> = ({
    href,
    icon: Icon,
    text,
  }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className="flex items-center justify-center text-gray-700 hover:bg-gray-200 rounded"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <Icon size={16} strokeWidth={1.5} />
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="top">{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden sm:flex flex-col bg-white shadow-md h-screen fixed left-0 top-0 ${
          isCollapsed ? "w-12" : "w-40"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="py-4">
              {isCollapsed ? (
            <div className="flex items-center justify-center mb-4 h-6 overflow-hidden">
                <span className="text-base font-bold text-gray-800">AT</span>
            </div>
              ) : (
            <div className="flex items-center px-5 mb-4 h-6 overflow-hidden">
                <h2 className="text-base font-semibold text-gray-800 whitespace-nowrap">
                  AlgoTrader
                </h2>
            </div>
              )}
          </div>
          <nav className="flex-grow space-y-1 px-2">
            <MenuItem
              href="/dashboard"
              icon={LayoutDashboard}
              text="Dashboard"
            />
            <MenuItem href="/analyse" icon={BarChart2} text="Analyse" />
          </nav>
          <div className="border-t px-2 py-2">
            <MenuItem href="/settings" icon={Settings} text="Settings" />
            <MenuItem href="" icon={LogOut} text="Logout" />
          </div>
        </div>
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
        >
          {isCollapsed ? (
            <ChevronRight size={20} strokeWidth={1.5} />
          ) : (
            <ChevronLeft size={20} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md h-12 flex items-center justify-around">
        <MobileMenuItem
          href="/dashboard"
          icon={LayoutDashboard}
          text="Dashboard"
        />
        <MobileMenuItem href="/analyse" icon={BarChart2} text="Analyse" />
        <MobileMenuItem href="/settings" icon={Settings} text="Settings" />
        <MobileMenuItem href="/logout" icon={LogOut} text="Logout" />
      </div>
    </>
  );
};

export default Sidebar;
