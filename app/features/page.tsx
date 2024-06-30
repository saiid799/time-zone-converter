"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

export default function Features() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const features = [
    "Instant time zone conversion",
    "Support for multiple time zones",
    "Customizable user interface",
    "Daylight Saving Time automatic adjustments",
    "Integration with calendar apps",
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
          Features
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center space-x-4 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-xl`}
            >
              <CheckCircleIcon
                className={`w-8 h-8 ${
                  isDarkMode ? "text-blue-500" : "text-blue-600"
                } flex-shrink-0`}
              />
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
