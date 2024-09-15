"use client";

import React from 'react';
import Sidebar from "@/components/Sidebar";
import { useSidebar } from "@/contexts/SidebarContext";

function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main 
        className={`flex-1 transition-all duration-300 sm:ml-16 ${
          isCollapsed ? "sm:ml-12" : "sm:ml-44"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 pb-16 sm:pb-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default ClientLayout;