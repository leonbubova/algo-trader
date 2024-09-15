"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Bell, Lock, User, Mail, Globe } from "lucide-react";

export default function SettingsPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="space-y-8">
      <header className="py-6 mb-12 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-sm text-gray-500 mt-2">{currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
          </div>
          <Button variant="outline" size="sm" className="text-gray-500 hover:text-gray-900">
            Save Changes
          </Button>
        </div>
      </header>

      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-4 pt-6">
          <CardTitle className="text-xl font-semibold text-gray-900">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 px-6 pb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <User className="h-5 w-5 text-gray-500" />
              <Input placeholder="Your Name" defaultValue="Leon Smith" className="max-w-xs" />
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-gray-500" />
              <Input placeholder="Email Address" defaultValue="leon@example.com" className="max-w-xs" />
            </div>
            <div className="flex items-center space-x-4">
              <Lock className="h-5 w-5 text-gray-500" />
              <Button variant="outline" size="sm">Change Password</Button>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-700">Email Notifications</span>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-700">Push Notifications</span>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-700">Language</span>
                </div>
                <select className="form-select text-sm border-gray-300 rounded-md">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-700">Dark Mode</span>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}