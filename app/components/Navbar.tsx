"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClockIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const { isSignedIn } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is available on the client side
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <header
      className={`flex items-center justify-between px-4 py-3 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-[#f2f3f4] text-gray-900"
      } shadow-md transition-colors duration-200 ease-in-out sm:px-6`}
    >
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <ClockIcon
            className={`h-6 w-6 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
          />
          <span className="text-lg font-semibold">Time Zone Converter</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-4">
          {["Features", "How It Works", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-sm font-medium hover:underline underline-offset-4 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="icon"
          className={`${
            isDarkMode
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-white text-gray-900 hover:bg-gray-100"
          } 
            border-2 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
        >
          {isDarkMode ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </Button>
        {isSignedIn ? (
          <>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className={`${
                  isDarkMode
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                } 
                  border-2 ${
                    isDarkMode ? "border-gray-700" : "border-gray-300"
                  }`}
              >
                Dashboard
              </Button>
            </Link>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: `${
                    isDarkMode
                      ? "border-2 border-gray-700"
                      : "border-2 border-gray-300"
                  }`,
                },
              }}
            />
          </>
        ) : (
          <>
            <Link href="/sign-in">
              <Button
                variant="outline"
                className={`${
                  isDarkMode
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-white text-gray-900 hover:bg-gray-100"
                } 
                  border-2 ${
                    isDarkMode ? "border-gray-700" : "border-gray-300"
                  }`}
              >
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                className={`${
                  isDarkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
