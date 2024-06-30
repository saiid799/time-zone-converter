"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { TimeZoneSelector } from "./TimeZoneSelector";
import { CurrentTime } from "./CurrentTime";
import { TimeConversion } from "./TimeConversion";
import { RecentConversions } from "./RecentConversions";
import moment from "moment-timezone";

interface Conversion {
  id?: string;
  from: string;
  to: string;
  ago: string;
}

export function Dashboard() {
  const { userId } = useAuth();
  const [selectedTimeZones, setSelectedTimeZones] = useState<string[]>([]);
  const [recentConversions, setRecentConversions] = useState<Conversion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchRecentConversions();
    }
  }, [userId]);

  const fetchRecentConversions = async () => {
    if (!userId) return;
    try {
      setIsLoading(true);
      const response = await fetch(`/api/conversions?userId=${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch conversions");
      }
      const data = await response.json();
      setRecentConversions(data);
    } catch (error) {
      console.error("Error fetching conversions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompare = (timeZones: string[]) => {
    setSelectedTimeZones(timeZones);
  };

  const handleConvert = async (conversion: Conversion) => {
    if (!userId) return;
    try {
      const response = await fetch("/api/conversions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...conversion, userId }),
      });
      if (!response.ok) {
        throw new Error("Failed to save conversion");
      }
      const savedConversion = await response.json();
      setRecentConversions((prevConversions) => [
        savedConversion,
        ...prevConversions.slice(0, 4),
      ]);
    } catch (error) {
      console.error("Error saving conversion:", error);
    }
  };

  const removeConversion = async (conversionToRemove: Conversion) => {
    try {
      if (!conversionToRemove.id) {
        throw new Error("Conversion ID is missing");
      }
      const response = await fetch(
        `/api/conversions/${conversionToRemove.id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete conversion");
      }
      setRecentConversions((prevConversions) =>
        prevConversions.filter(
          (conversion) => conversion.id !== conversionToRemove.id
        )
      );
    } catch (error) {
      console.error("Error deleting conversion:", error);
    }
  };

  if (!userId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <header className="bg-card py-4 px-6 border-b flex justify-between items-center">
        <h1 className="text-2xl font-bold">Time Zone Converter</h1>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <TimeZoneSelector onCompare={handleCompare} />
        <CurrentTime timeZones={selectedTimeZones} />
        <TimeConversion
          timeZones={moment.tz.names()}
          onConvert={handleConvert}
        />
        <RecentConversions
          conversions={recentConversions}
          removeConversion={removeConversion}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}
