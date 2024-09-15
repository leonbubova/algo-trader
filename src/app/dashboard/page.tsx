"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  SearchIcon,
  UserIcon,
  LayoutIcon,
} from "lucide-react";

// Mock data (unchanged)
const sectorPerformance = [
  { name: "All sectors", change: 0.75 },
  { name: "Utilities", change: 1.41 },
  { name: "Industrials", change: 1.01 },
  { name: "Communication Services", change: 0.96 },
  { name: "Basic Materials", change: 0.9 },
  { name: "Real Estate", change: 0.71 },
  { name: "Consumer Defensive", change: 0.71 },
  { name: "Consumer Cyclical", change: 0.68 },
  { name: "Energy", change: 0.56 },
  { name: "Technology", change: 0.5 },
  { name: "Financial", change: 0.29 },
  { name: "Healthcare", change: 0.21 },
];

const markets = [
  { name: "S&P 500", value: 562.01, change: 2.92, percentChange: 0.52 },
  { name: "Nasdaq", value: 475.34, change: 2.12, percentChange: 0.45 },
  { name: "Dow Jones", value: 414.94, change: 2.97, percentChange: 0.72 },
  { name: "Russell 2000", value: 218.83, change: 5.22, percentChange: 2.47 },
  { name: "Crude Oil", value: 69.84, change: -0.05, percentChange: -0.07 },
  { name: "Gold", value: 238.68, change: 2.35, percentChange: 0.99 },
  { name: "Silver", value: 28.02, change: 0.75, percentChange: 2.75 },
  { name: "10-Year Bond", value: 98.88, change: 0.19, percentChange: 0.19 },
  { name: "Bitcoin", value: 18.12, change: 0.42, percentChange: 2.37 },
];

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="space-y-8">
      <header className="py-6 mb-12 border-b border-gray-200">
        {" "}
        {/* Increased mb-8 to mb-12 */}
        <div className="flex justify-between items-center mb-4">
          {" "}
          {/* Added mb-4 to create space above the border */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hello, Leon</h1>{" "}
            {/* Increased font size */}
            <p className="text-sm text-gray-500 mt-2">
              {currentDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>{" "}
            {/* Increased margin-top */}
          </div>
          <div className="flex space-x-4">
            {" "}
            {/* Increased space between buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-900"
            >
              <UserIcon className="h-5 w-5" />{" "}
              {/* Slightly increased icon size */}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-900"
            >
              <LayoutIcon className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-900"
            >
              <SearchIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="flex justify-between items-center text-sm">
              <span className="text-green-600 font-semibold flex items-center">
                <TrendingUpIcon className="h-3 w-3 mr-1" />
                The markets are bullish
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-gray-500"
              >
                What&apos;s happening
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-lg font-bold leading-tight mt-2 mb-3 text-gray-900">
              Inflation Eases as Fed Heads Into Policy Meeting, Goldman Warns of
              Delay in Rate Cuts, OPEC+ Under Pressure Amid Low Oil Prices.
            </h2>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="flex justify-between items-center text-sm">
              <span className="font-semibold text-gray-900">
                Sector performance
              </span>
              <span className="text-xs text-gray-500">% price change</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mt-2">
              {sectorPerformance.map((sector, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-xs text-gray-700">{sector.name}</span>
                  <div className="flex items-center">
                    <span
                      className={`text-xs font-semibold ${
                        sector.change >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {sector.change >= 0 ? "+" : ""}
                      {sector.change.toFixed(2)}%
                    </span>
                    <div className="w-12 h-1 bg-gray-200 ml-1 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          sector.change >= 0 ? "bg-green-500" : "bg-red-500"
                        }`}
                        style={{ width: `${Math.abs(sector.change) * 10}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-4 text-gray-900">Markets</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="bg-white shadow-sm">
          <CardContent className="pt-4">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-500">
                  <th className="pb-2 font-normal">Name</th>
                  <th className="pb-2 text-right font-normal">Price</th>
                  <th className="pb-2 text-right font-normal">Change</th>
                  <th className="pb-2 text-right font-normal">% Change</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((market, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-2 text-xs font-medium text-gray-900">
                      {market.name}
                    </td>
                    <td className="py-2 text-xs text-right text-gray-900">
                      {market.value.toFixed(2)}
                    </td>
                    <td
                      className={`py-2 text-xs text-right ${
                        market.change >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {market.change >= 0 ? "+" : ""}
                      {market.change.toFixed(2)}
                    </td>
                    <td
                      className={`py-2 text-xs text-right ${
                        market.percentChange >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {market.percentChange >= 0 ? "+" : ""}
                      {market.percentChange.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="flex justify-between items-center text-sm">
              <span className="font-semibold text-gray-900">S&P 500</span>
              <span className="text-xl font-bold text-gray-900">562.01</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-end mt-4 mb-4">
              {/* Placeholder for chart */}
              <div className="w-full h-full bg-gray-100 rounded flex items-end overflow-hidden">
                <div className="w-full h-3/4 bg-blue-500 rounded-t"></div>
              </div>
            </div>
            <div className="flex justify-between">
              {["1D", "1W", "1M", "3M", "YTD", "1Y", "All"].map((period) => (
                <Button
                  key={period}
                  variant="ghost"
                  size="sm"
                  className="text-xs text-gray-500 hover:text-gray-900 px-1"
                >
                  {period}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
