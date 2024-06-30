"use client";
import { useTheme } from "next-themes";

export default function Privacy() {
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
          Privacy Policy
        </h1>
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg shadow-lg p-8 max-w-3xl mx-auto`}
        >
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-6">
            We collect information you provide directly to us, such as when you
            create an account, use our services, or communicate with us. This
            may include your name, email address, and usage data.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-6">
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to comply with legal
            obligations.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to
            protect the security of your personal information. However, no
            method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            4. Changes to This Policy
          </h2>
          <p className="mb-6">
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page.
          </p>
        </div>
      </main>
    </div>
  );
}
