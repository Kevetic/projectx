"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

interface ThemePickerProps {
  isDarkMode: boolean;
}

const ThemePicker = ({ isDarkMode }: ThemePickerProps) => {
  const [position, setPosition] = useState("");

  const changeColor = useCallback(() => {
    const root = document.documentElement;
    let newColors = {};

    if (position === "Kawasaki") {
      newColors = {
        "--background": isDarkMode ? "20 14.3% 4.1%" : "0 0% 100%",
        "--foreground": isDarkMode ? "0 0% 95%" : "240 10% 3.9%",
        "--card": isDarkMode ? "24 9.8% 10%" : "0 0% 100%",
        "--card-foreground": isDarkMode ? "0 0% 95%" : "240 10% 3.9%",
        "--popover": isDarkMode ? "0 0% 9%" : "0 0% 100%",
        "--popover-foreground": isDarkMode ? "0 0% 95%" : "240 10% 3.9%",
        "--primary": isDarkMode ? "142.1 70.6% 45.3%" : "142.1 76.2% 36.3%",
        "--primary-foreground": isDarkMode
          ? "144.9 80.4% 10%"
          : "355.7 100% 97.3%",
        "--secondary": isDarkMode ? "240 3.7% 15.9%" : "240 4.8% 95.9%",
        "--secondary-foreground": isDarkMode ? "0 0% 98%" : "240 5.9% 10%",
        "--muted": isDarkMode ? "0 0% 15%" : "240 4.8% 95.9%",
        "--muted-foreground": isDarkMode ? "240 5% 64.9%" : "240 3.8% 46.1%",
        "--accent": isDarkMode ? "12 6.5% 15.1%" : "240 4.8% 95.9%",
        "--accent-foreground": isDarkMode ? "0 0% 98%" : "240 5.9% 10%",
        "--destructive": isDarkMode ? "0 62.8% 30.6%" : "0 84.2% 60.2%",
        "--destructive-foreground": isDarkMode ? "0 85.7% 97.3%" : "0 0% 98%",
        "--border": isDarkMode ? "240 3.7% 15.9%" : "240 5.9% 90%",
        "--input": isDarkMode ? "240 3.7% 15.9%" : "240 5.9% 90%",
        "--ring": isDarkMode ? "142.4 71.8% 29.2%" : "142.1 76.2% 36.3%",
        "--radius": isDarkMode ? "0.5rem" : "0.5rem",
      };
    }
    if (position === "Yamaha") {
      newColors = {
        "--background": isDarkMode ? "235 10% 5%" : "235 0% 100%",
        "--foreground": isDarkMode ? "235 0% 100%" : "235 0% 10%",
        "--card": isDarkMode ? "235 0% 10%" : "235 0% 100%",
        "--card-foreground": isDarkMode ? "235 0% 100%" : "235 0% 15%",
        "--popover": isDarkMode ? "235 10% 5%" : "235 0% 100%",
        "--popover-foreground": isDarkMode ? "235 0% 100%" : "235 95% 10%",
        "--primary": isDarkMode ? "235 89% 46%" : "235 89% 46%",
        "--primary-foreground": isDarkMode ? "0 0% 100%" : "0 0% 100%",
        "--secondary": isDarkMode ? "235 10% 30%" : "235 10% 90%",
        "--secondary-foreground": isDarkMode ? "0 0% 100%" : "0 0% 0%",
        "--muted": isDarkMode ? "197 10% 25%" : "197 10% 95%",
        "--muted-foreground": isDarkMode ? "235 0% 65%" : "235 0% 40%",
        "--accent": isDarkMode ? "197 10% 25%" : "197 10% 90%",
        "--accent-foreground": isDarkMode ? "235 0% 95%" : "235 0% 15%",
        "--destructive": isDarkMode ? "0 50% 50%" : "0 50% 50%",
        "--destructive-foreground": isDarkMode ? "235 0% 100%" : "235 0% 100%",
        "--border": isDarkMode ? "235 20% 50%" : "235 20% 82%",
        "--input": isDarkMode ? "235 20% 50%" : "235 20% 50%",
        "--ring": isDarkMode ? "235 89% 46%" : "235 89% 46%",
        "--radius": "0.5rem",
      };
    }
    if (position === "Honda") {
      newColors = {
        "--background": isDarkMode ? "0 10% 5%" : "0 0% 100%",
        "--foreground": isDarkMode ? "0 0% 100%" : "0 0% 10%",
        "--card": isDarkMode ? "0 0% 10%" : "0 0% 100%",
        "--card-foreground": isDarkMode ? "0 0% 100%" : "0 0% 15%",
        "--popover": isDarkMode ? "0 10% 5%" : "0 0% 100%",
        "--popover-foreground": isDarkMode ? "0 0% 100%" : "0 95% 10%",
        "--primary": isDarkMode ? "0 100% 37%" : "0 100% 37%",
        "--primary-foreground": isDarkMode ? "0 0% 100%" : "0 0% 100%",
        "--secondary": isDarkMode ? "0 10% 30%" : "0 10% 90%",
        "--secondary-foreground": isDarkMode ? "0 0% 100%" : "0 0% 0%",
        "--muted": isDarkMode ? "-38 10% 25%" : "-38 10% 95%",
        "--muted-foreground": isDarkMode ? "0 0% 65%" : "0 0% 40%",
        "--accent": isDarkMode ? "-38 10% 25%" : "-38 10% 90%",
        "--accent-foreground": isDarkMode ? "0 0% 95%" : "0 0% 15%",
        "--destructive": isDarkMode ? "0 50% 50%" : "0 50% 50%",
        "--destructive-foreground": isDarkMode ? "0 0% 100%" : "0 0% 100%",
        "--border": isDarkMode ? "0 20% 50%" : "0 20% 82%",
        "--input": isDarkMode ? "0 20% 50%" : "0 20% 50%",
        "--ring": isDarkMode ? "0 100% 37%" : "0 100% 37%",
        "--radius": "0.5rem",
      };
    }

    if (position === "Lupe") {
      newColors = {
        "--background": isDarkMode ? "294 10% 5%" : "294 0% 100%",
        "--foreground": isDarkMode ? "294 0% 100%" : "294 0% 10%",
        "--card": isDarkMode ? "294 0% 10%" : "294 0% 100%",
        "--card-foreground": isDarkMode ? "294 0% 100%" : "294 0% 15%",
        "--popover": isDarkMode ? "294 10% 5%" : "294 0% 100%",
        "--popover-foreground": isDarkMode ? "294 0% 100%" : "294 95% 10%",
        "--primary": isDarkMode ? "294 74% 61%" : "294 74% 61%",
        "--primary-foreground": isDarkMode ? "0 0% 0%" : "0 0% 0%",
        "--secondary": isDarkMode ? "294 10% 30%" : "294 10% 90%",
        "--secondary-foreground": isDarkMode ? "0 0% 100%" : "0 0% 0%",
        "--muted": isDarkMode ? "256 10% 25%" : "256 10% 95%",
        "--muted-foreground": isDarkMode ? "294 0% 65%" : "294 0% 40%",
        "--accent": isDarkMode ? "256 10% 25%" : "256 10% 90%",
        "--accent-foreground": isDarkMode ? "294 0% 95%" : "294 0% 15%",
        "--destructive": isDarkMode ? "0 50% 50%" : "0 50% 50%",
        "--destructive-foreground": isDarkMode ? "294 0% 100%" : "294 0% 100%",
        "--border": isDarkMode ? "294 20% 50%" : "294 20% 82%",
        "--input": isDarkMode ? "294 20% 50%" : "294 20% 50%",
        "--ring": isDarkMode ? "294 74% 61%" : "294 74% 61%",
        "--radius": "0.5rem",
      };
    }

    Object.entries(newColors).forEach(([key, value]: [string, unknown]) => {
      root.style.setProperty(key, value as string);
    });
  }, [position, isDarkMode]);

  useEffect(() => {
    changeColor();
  }, [position, isDarkMode, changeColor]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{position}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Choose Your Team</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="Kawasaki">
            Kawasaki
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Yamaha">Yamaha</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Honda">Honda</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Lupe">Lupe</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemePicker;
