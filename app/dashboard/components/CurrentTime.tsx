"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import moment from "moment-timezone";

interface CurrentTimeProps {
  timeZones: string[];
}

export function CurrentTime({ timeZones }: CurrentTimeProps): JSX.Element {
  const [times, setTimes] = useState<Record<string, string>>({});
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment();
      const newTimes: Record<string, string> = {};
      timeZones.forEach((tz) => {
        newTimes[tz] = now.tz(tz).format("HH:mm:ss");
      });
      setTimes(newTimes);
      setDate(now.format("dddd, MMMM D, YYYY"));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeZones]);

  return (
    <section className="bg-card rounded-lg p-6 shadow">
      <h2 className="text-lg font-semibold mb-4">Current Time</h2>
      <div className="text-center mb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-muted-foreground"
        >
          {date}
        </motion.div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(times).map(([tz, time]) => (
          <motion.div
            key={tz}
            className="bg-muted rounded-lg p-4 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl font-bold">{time}</div>
            <div className="text-muted-foreground">{tz}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
