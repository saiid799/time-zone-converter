"use client";
import { useTheme } from "next-themes";

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-lg p-8 max-w-3xl mx-auto`}
        >
          <h2 className="text-2xl font-semibold mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-6">
            By accessing and using Time Zone Converter, you agree to be bound by
            these Terms of Service. If you do not agree to these terms, please
            do not use our service.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Use of Service</h2>
          <p className="mb-6">
            You agree to use Time Zone Converter only for lawful purposes and in
            accordance with these Terms. You are prohibited from violating or
            attempting to violate the security of the Service.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Privacy</h2>
          <p className="mb-6">
            Your use of Time Zone Converter is also governed by our Privacy
            Policy. Please review our Privacy Policy to understand our
            practices.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Changes to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these Terms at any time. We will
            always post the most current version on our site. By continuing to
            use Time Zone Converter after changes become effective, you agree to
            be bound by the revised terms.
          </p>
        </div>
      </main>
    </div>
  );
}
