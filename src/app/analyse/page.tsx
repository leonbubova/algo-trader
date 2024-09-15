"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon, ArrowDownIcon, BarChart2, Filter, RefreshCcw } from "lucide-react";

// Mock data for analysis
const analysisData: {
  topPerformers: Performer[];
  keyMetrics: Metric[];
} = {
  topPerformers: [
    { name: "AI Technologies", score: 95, trend: "up" },
    { name: "Green Energy Solutions", score: 92, trend: "up" },
    { name: "Biotech Innovations", score: 88, trend: "down" },
    { name: "E-commerce Platforms", score: 86, trend: "up" },
    { name: "Cybersecurity Services", score: 84, trend: "down" },
  ],
  keyMetrics: [
    { name: "Market Volatility", value: "High", trend: "up" },
    { name: "Economic Growth", value: "Moderate", trend: "down" },
    { name: "Interest Rates", value: "Stable", trend: "neutral" },
    { name: "Inflation Rate", value: "3.2%", trend: "up" },
    { name: "Unemployment Rate", value: "5.4%", trend: "down" },
  ],
};

export default function AnalysePage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="space-y-8">
      <header className="py-6 mb-12 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Market Analysis</h1>
            <p className="text-sm text-gray-500 mt-2">{currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" className="text-gray-500 hover:text-gray-900">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="text-gray-500 hover:text-gray-900">
              <RefreshCcw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysisData.topPerformers.map((item, index) => (
                <AnalysisItem key={index} item={item} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="pb-2 pt-4">
            <CardTitle className="text-lg font-semibold text-gray-900">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analysisData.keyMetrics.map((item, index) => (
                <AnalysisItem key={index} item={item} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white shadow-sm mt-8">
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Market Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart2 className="h-12 w-12 text-gray-400" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface Performer {
  name: string;
  score: number;
  trend: "up" | "down" | "neutral";
}

interface Metric {
  name: string;
  value: string;
  trend: "up" | "down" | "neutral";
}

type AnalysisItemProps = {
  item: Performer | Metric;
};

function AnalysisItem({ item }: AnalysisItemProps) {
  return (
    <div className="flex items-center justify-between py-2 px-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-50">
      <span className="font-medium text-sm text-gray-700">{item.name}</span>
      <div className={`flex items-center ${
        item.trend === "up"
          ? "text-green-600"
          : item.trend === "down"
          ? "text-red-600"
          : "text-gray-600"
      }`}>
        {item.trend === "up" ? (
          <ArrowUpIcon className="h-4 w-4 mr-1" />
        ) : item.trend === "down" ? (
          <ArrowDownIcon className="h-4 w-4 mr-1" />
        ) : null}
        <span className="font-bold text-sm">
          {"score" in item ? item.score : item.value}
        </span>
      </div>
    </div>
  );
}
