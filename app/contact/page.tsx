"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Contact() {
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
          Contact Us
        </h1>
        <form
          className={`space-y-6 max-w-md mx-auto ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-lg p-8`}
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-gray-100 text-gray-900 border-gray-300"
              }`}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-gray-100 text-gray-900 border-gray-300"
              }`}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className={`w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-gray-100 text-gray-900 border-gray-300"
              }`}
            ></textarea>
          </div>
          <Button
            type="submit"
            className={`w-full ${
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            Send Message
          </Button>
        </form>
      </main>
    </div>
  );
}
