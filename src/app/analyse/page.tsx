"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  Filter,
  RefreshCcw,
  Briefcase,
  Zap,
  ShoppingCart,
  Shield,
  Plus,
  X,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

// Mock data for analysis
const analysisData = {
  topPerformers: [
    { name: "AI Technologies", score: 23.3, trend: "up", icon: Zap },
    {
      name: "Green Energy Solutions",
      score: 13.2,
      trend: "up",
      icon: Briefcase,
    },
    { name: "Biotech Innovations", score: 9.62, trend: "down", icon: Shield },
    {
      name: "E-commerce Platforms",
      score: 8.9,
      trend: "up",
      icon: ShoppingCart,
    },
    { name: "Cybersecurity Services", score: 8.1, trend: "down", icon: Shield },
  ] as const,
};

type FilterType = {
  metric: string;
  value: string;
};

const filterMetrics = [
  {
    label: "Performance",
    options: [
      "High (>5%)",
      "Very High (>10%)",
      "Low (<-5%)",
      "Very Low (<-10%)",
    ],
  },
  {
    label: "Market Cap",
    options: [
      "Large Cap (>$10B)",
      "Mid Cap ($2B-$10B)",
      "Small Cap ($300M-$2B)",
      "Micro Cap (<$300M)",
    ],
  },
  {
    label: "Sector",
    options: [
      "Technology",
      "Healthcare",
      "Finance",
      "Energy",
      "Consumer Discretionary",
      "Industrials",
      "Materials",
      "Real Estate",
      "Utilities",
      "Communication Services",
    ],
  },
  {
    label: "Dividend Yield",
    options: ["No Dividend", "Low (<2%)", "Medium (2-4%)", "High (>4%)"],
  },
  {
    label: "P/E Ratio",
    options: ["Low (<15)", "Medium (15-25)", "High (>25)", "Negative"],
  },
  {
    label: "Revenue Growth",
    options: ["Negative", "Slow (0-10%)", "Moderate (10-20%)", "Fast (>20%)"],
  },
  {
    label: "Debt to Equity",
    options: ["Low (<0.5)", "Medium (0.5-1.5)", "High (>1.5)"],
  },
  {
    label: "Analyst Rating",
    options: ["Strong Buy", "Buy", "Hold", "Sell", "Strong Sell"],
  },
  { label: "ESG Score", options: ["Excellent", "Good", "Average", "Poor"] },
];

export default function AnalysePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const addFilter = (metric: string, value: string = "...") => {
    const existingFilterIndex = filters.findIndex((f) => f.metric === metric);
    if (existingFilterIndex !== -1) {
      const updatedFilters = [...filters];
      updatedFilters[existingFilterIndex] = { metric, value };
      setFilters(updatedFilters);
    } else {
      setFilters([...filters, { metric, value }]);
    }
    if (value === "...") {
      setSelectedMetric(metric);
    } else {
      setSelectedMetric(null);
      setIsOpen(false);
    }
  };

  const removeFilter = (index: number) => {
    setFilters(filters.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4 sm:space-y-8">
      <header className="py-4 sm:py-6 mb-6 sm:mb-12 border-b border-gray-200">
        <div className="flex justify-between items-center mb-2 sm:mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Market Analysis
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
              {currentDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="text-gray-500 hover:text-gray-900"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-gray-500 hover:text-gray-900"
            >
              <RefreshCcw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </header>
      <div className="w-full sm:border sm:rounded-lg sm:shadow-sm sm:bg-white">
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 mt-6 sm:mb-4 sm:px-6">
          {filters.map((filter, index) => (
            <Popover
              key={index}
              open={filter.value === "..." && isOpen}
              onOpenChange={setIsOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={`text-xs py-0.5 px-1.5 sm:py-1 sm:px-2 h-auto`}
                  onClick={() =>
                    filter.value === "..."
                      ? setIsOpen(true)
                      : removeFilter(index)
                  }
                >
                  {filter.metric}: {filter.value}
                  {filter.value !== "..." && <X className="ml-1 h-2 w-2 sm:h-3 sm:w-3" />}
                </Button>
              </PopoverTrigger>
              {filter.value === "..." && (
                <PopoverContent
                  className="w-48 sm:w-64 p-0 bg-white border border-gray-200 shadow-md rounded-md overflow-hidden"
                  align="start"
                  side="right"
                  alignOffset={0}
                  sideOffset={5}
                >
                  <div className="space-y-0">
                    {filterMetrics
                      .find((m) => m.label === filter.metric)
                      ?.options.map((option) => (
                        <Button
                          key={option}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start hover:bg-gray-100 transition-colors duration-200 rounded-none py-1 px-2 text-xs"
                          onClick={() => addFilter(filter.metric, option)}
                        >
                          {option}
                        </Button>
                      ))}
                  </div>
                </PopoverContent>
              )}
            </Popover>
          ))}
          <Popover open={isOpen && !selectedMetric} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs py-0.5 px-1.5 sm:py-1 sm:px-2 h-auto">
                <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                {filters.length === 0 && (
                  <span className="ml-1 sm:ml-2 text-xs">Add Filter</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-48 sm:w-64 p-0 bg-white border border-gray-200 shadow-md rounded-md overflow-hidden"
              align="start"
              side="bottom"
              alignOffset={0}
              sideOffset={-30}
            >
              <div className="space-y-0">
                {filterMetrics.map((metric) => (
                  <Button
                    key={metric.label}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start hover:bg-gray-100 transition-colors duration-200 rounded-none py-1 px-2 text-xs"
                    onClick={() => addFilter(metric.label)}
                  >
                    {metric.label}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-1 mb-4">
          {analysisData.topPerformers.map((item, index) => (
            <AnalysisItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Performer {
  name: string;
  score: number;
  trend: "up" | "down";
  icon: React.ElementType;
}

type AnalysisItemProps = {
  item: Performer;
};

function AnalysisItem({ item }: AnalysisItemProps) {
  const Icon = item.icon;
  return (
    <div className="flex items-center justify-between py-2 sm:py-3 sm:px-6 transition-all duration-200 ease-in-out hover:bg-gray-50">
      <div className="flex items-center">
        <Icon className="h-5 w-5 mr-3 text-gray-500" />
        <span className="font-medium text-xs sm:text-sm text-gray-700">
          {item.name}
        </span>
      </div>
      <div
        className={`flex items-center ${
          item.trend === "up" ? "text-green-600" : "text-red-600"
        }`}
      >
        {item.trend === "up" ? (
          <ArrowUpIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
        ) : (
          <ArrowDownIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
        )}
        <span className="font-bold text-xs sm:text-sm">
          {item.score.toFixed(1)}%
        </span>
      </div>
    </div>
  );
}
