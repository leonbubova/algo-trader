"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Briefcase,
  Database,
  FileText,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MenuItemProps {
  href: string;
  icon: React.ElementType;
  text: string;
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const MenuItem: React.FC<MenuItemProps> = ({ href, icon: Icon, text }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={`flex items-center py-2 px-3 text-gray-700 hover:bg-gray-200 rounded transition-all duration-300 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <Icon size={20} className={`min-w-[20px] ${isCollapsed ? "mx-auto" : ""}`} />
            <span className={`ml-2 whitespace-nowrap ${isCollapsed ? "hidden" : "inline-block"}`}>
              {text}
            </span>
          </Link>
        </TooltipTrigger>
        {isCollapsed && <TooltipContent side="right">{text}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div
      className={`bg-white shadow-md h-screen fixed left-0 top-0 flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-56"
      }`}
    >
      <div className="p-3 flex-grow">
        <h2
          className={`text-xl font-semibold mb-6 py-2 px-3 rounded-md shadow-sm overflow-hidden whitespace-nowrap transition-all duration-300 ${
            isCollapsed ? "text-center px-0" : ""
          }`}
        >
          {isCollapsed ? "AT" : "AlgoTrader"}
        </h2>
        <nav>
          <MenuItem href="/dashboard" icon={LayoutDashboard} text="Dashboard" />
          <MenuItem href="/strategies" icon={Briefcase} text="Strategies" />
          <MenuItem
            href="/historical-data"
            icon={Database}
            text="Historical Data"
          />
          <MenuItem href="/reports" icon={FileText} text="Reports" />
        </nav>
      </div>
      <div className="border-t p-3">
        <div
          className={`flex items-center mb-4 ${
            isCollapsed ? "justify-center" : "px-3"
          }`}
        >
          <User
            size={20}
            className={`min-w-[20px] ${isCollapsed ? "mx-auto" : ""}`}
          />
          <span className={`ml-2 text-sm whitespace-nowrap ${isCollapsed ? "hidden" : "inline-block"}`}>
            John Doe
          </span>
        </div>
        <nav>
          <MenuItem
            href="/account-settings"
            icon={Settings}
            text="Account Settings"
          />
          <MenuItem
            href="/help-support"
            icon={HelpCircle}
            text="Help & Support"
          />
          <MenuItem href="/logout" icon={LogOut} text="Log Out" />
        </nav>
      </div>
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
      >
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>
    </div>
  );
};

export default Sidebar;
