"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export function Hero() {
  let isSignedIn = false;

  try {
    const auth = useAuth();
    isSignedIn = auth.isSignedIn?? false;
  } catch (error) {
    console.error("Error using useAuth:", error);
  }

  return (
    <section className="w-full flex items-center justify-center bg-primary text-primary-foreground min-h-[calc(100vh-6rem)]">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none max-w-2xl mx-auto">
            Never Lose Track of Time
          </h1>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 text-lg sm:text-xl md:text-2xl">
            Our Time Zone Converter app makes it easy to stay on top of your
            schedule, no matter where you or your team are located.
          </p>
          <Link
            href={isSignedIn ? "/dashboard" : "/sign-up"}
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary-foreground px-6 font-medium text-primary text-lg shadow transition-colors hover:bg-primary-foreground/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            {isSignedIn ? "Go to Dashboard" : "Get Started"}
          </Link>
        </div>
      </div>
    </section>
  );
}
