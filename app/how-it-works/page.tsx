"use client";
import {
  ClockIcon,
  GlobeAltIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

export default function HowItWorks() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const steps = [
    {
      icon: ClockIcon,
      title: "Select Time",
      description: "Choose your local time and date",
    },
    {
      icon: GlobeAltIcon,
      title: "Pick Locations",
      description: "Select the time zones you want to compare",
    },
    {
      icon: ArrowPathIcon,
      title: "Instant Conversion",
      description: "See the converted times instantly",
    },
  ];

  return (
    <div
      className={`flex flex-col min-h-[100dvh] ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1
          className={`text-4xl font-bold mb-12 text-center ${
            isDarkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          How It Works
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105`}
            >
              <step.icon
                className={`w-12 h-12 mb-4 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
