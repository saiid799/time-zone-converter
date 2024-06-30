"use client";
import { useTheme } from "next-themes";

export default function About() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

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
          About Us
        </h1>
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-lg p-8 max-w-2xl mx-auto`}
        >
          <p className="mb-6 text-lg leading-relaxed">
            Time Zone Converter is a cutting-edge application designed to
            simplify time management across different time zones. Our mission is
            to help individuals and businesses collaborate seamlessly across the
            globe.
          </p>
          <p className="text-lg leading-relaxed">
            Founded in 2024, we&apos;ve quickly become a trusted tool for remote
            teams, international businesses, and frequent travelers. Our
            commitment to accuracy, user-friendly design, and continuous
            improvement sets us apart in the market.
          </p>
        </div>
      </main>
    </div>
  );
}
