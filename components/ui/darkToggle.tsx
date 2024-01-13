"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
type SetIsDarkModeType = (value: boolean) => void;

export function ModeToggle({
  setIsDarkMode,
  isDarkMode,
}: {
  setIsDarkMode: SetIsDarkModeType;
  isDarkMode: boolean;
}) {
  const { setTheme } = useTheme();

  React.useEffect(() => {
    setTheme("");
  });

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setIsDarkMode(!isDarkMode);
        setTheme(isDarkMode ? "light" : "dark");
      }}
    >
      {isDarkMode ? (
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
    </Button>
  );
}
