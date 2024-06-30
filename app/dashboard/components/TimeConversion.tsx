"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import moment from "moment-timezone";

interface Conversion {
  from: string;
  to: string;
  ago: string;
}

interface TimeConversionProps {
  timeZones: string[];
  onConvert: (conversion: Conversion) => void;
}

export function TimeConversion({
  timeZones,
  onConvert,
}: TimeConversionProps): JSX.Element {
  const [inputTime, setInputTime] = useState<string>("");
  const [inputZone, setInputZone] = useState<string>("");
  const [outputZone, setOutputZone] = useState<string>("");
  const [convertedTime, setConvertedTime] = useState<string>("");

  const convertTime = () => {
    if (inputTime && inputZone && outputZone) {
      const [hours, minutes] = inputTime.split(":");
      const inputDateTime = moment()
        .tz(inputZone)
        .hours(parseInt(hours))
        .minutes(parseInt(minutes));
      const convertedDateTime = inputDateTime.clone().tz(outputZone);
      const result = convertedDateTime.format("HH:mm");
      setConvertedTime(result);
      onConvert({
        from: `${inputTime} ${inputZone}`,
        to: `${result} ${outputZone}`,
        ago: "Just now",
      });
    }
  };

  return (
    <section className="bg-card rounded-lg p-6 shadow">
      <h2 className="text-lg font-semibold mb-4">Time Conversion</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="input-time">Time</Label>
          <Input
            id="input-time"
            type="time"
            className="w-full"
            value={inputTime}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputTime(e.target.value)
            }
          />
        </div>
        <div>
          <Label>From</Label>
          <Select onValueChange={setInputZone}>
            <SelectTrigger>
              <SelectValue placeholder="Select input time zone" />
            </SelectTrigger>
            <SelectContent>
              {timeZones.map((tz) => (
                <SelectItem key={tz} value={tz}>
                  {tz}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>To</Label>
          <Select onValueChange={setOutputZone}>
            <SelectTrigger>
              <SelectValue placeholder="Select output time zone" />
            </SelectTrigger>
            <SelectContent>
              {timeZones.map((tz) => (
                <SelectItem key={tz} value={tz}>
                  {tz}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" onClick={convertTime}>
          Convert
        </Button>
        {convertedTime && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-muted p-4 rounded-md text-center"
          >
            <div className="text-lg font-semibold">{convertedTime}</div>
            <div className="text-sm text-muted-foreground">{outputZone}</div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
