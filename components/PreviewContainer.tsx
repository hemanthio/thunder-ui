"use client";

import { cn } from "../lib/utils";
import { RefreshCw } from "lucide-react";
import { useState } from "react";

interface PreviewContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PreviewContainer = ({
  children,
  className,
}: PreviewContainerProps) => {
  const [key, setKey] = useState(0);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="relative">
      <button
        onClick={handleRefresh}
        className="absolute top-1 right-1 z-10 p-2 rounded-full hover:bg-primary/10 transition-colors"
        aria-label="Refresh preview"
      >
        <RefreshCw className="w-4 h-4 text-primary/70" />
      </button>
      <div
        key={key}
        className={cn(
          "dark:bg-background  min-h-[15rem] rounded-xl flex items-center justify-center not-prose  relative",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};