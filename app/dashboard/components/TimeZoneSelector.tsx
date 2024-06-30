"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import moment from "moment-timezone";

interface TimeZone {
  id: number;
  zone: string;
}

interface TimeZoneSelectorProps {
  onCompare: (zones: string[]) => void;
}

export function TimeZoneSelector({
  onCompare,
}: TimeZoneSelectorProps): JSX.Element {
  const [timeZones, setTimeZones] = useState<TimeZone[]>([
    { id: 1, zone: "" },
    { id: 2, zone: "" },
  ]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  useEffect(() => {
    const allTimeZones = moment.tz.names();
    const filtered = allTimeZones.filter((tz) =>
      tz.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm]);

  const addTimeZone = () => {
    setTimeZones([...timeZones, { id: timeZones.length + 1, zone: "" }]);
  };

  const removeTimeZone = (id: number) => {
    if (timeZones.length > 2) {
      setTimeZones(timeZones.filter((tz) => tz.id !== id));
    }
  };

  const updateTimeZone = (id: number, zone: string) => {
    setTimeZones(timeZones.map((tz) => (tz.id === id ? { ...tz, zone } : tz)));
  };

  return (
    <section className="bg-card rounded-lg p-6 shadow">
      <h2 className="text-lg font-semibold mb-4">Time Zone Selector</h2>
      <div className="space-y-4">
        <Input
          placeholder="Search for a city or time zone"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
        {timeZones.map((tz, index) => (
          <div key={tz.id} className="flex items-center space-x-2">
            <Select
              onValueChange={(value: string) => updateTimeZone(tz.id, value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                {filteredOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {index > 1 && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeTimeZone(tz.id)}
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
            )}
            {index === timeZones.length - 1 && (
              <Button variant="outline" size="icon" onClick={addTimeZone}>
                <PlusIcon className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
      <Button
        className="mt-4 w-full"
        onClick={() =>
          onCompare(timeZones.map((tz) => tz.zone).filter(Boolean))
        }
      >
        Compare <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </section>
  );
}
