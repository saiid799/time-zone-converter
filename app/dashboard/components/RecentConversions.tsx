

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@heroicons/react/24/solid";

interface Conversion {
  id?: string;
  from: string;
  to: string;
  ago: string;
}

interface RecentConversionsProps {
  conversions: Conversion[];
  removeConversion: (conversion: Conversion) => void;
  isLoading: boolean;
}

export function RecentConversions({
  conversions,
  removeConversion,
  isLoading,
}: RecentConversionsProps): JSX.Element {
  if (isLoading) {
    return <div>Loading recent conversions...</div>;
  }

  return (
    <section className="bg-card rounded-lg p-6 shadow col-span-1 md:col-span-2">
      <h2 className="text-lg font-semibold mb-4">Recent Conversions</h2>
      <div className="space-y-4">
        {conversions.map((conversion, index) => (
          <div
            key={conversion.id || index}
            className="flex items-center justify-between bg-muted p-4 rounded-md"
          >
            <div>
              <div className="font-semibold">{conversion.from}</div>
              <div className="text-muted-foreground">{conversion.to}</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-muted-foreground">{conversion.ago}</div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeConversion(conversion)}
              >
                <TrashIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {conversions.length === 0 && (
        <div className="text-center text-muted-foreground mt-4">
          No recent conversions
        </div>
      )}
    </section>
  );
}