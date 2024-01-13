import React, { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";

interface MobileNavProps {
  isDarkMode: boolean;
  subNav: any;
  userOptions: any;
  mainNav: any;
}

function MobileNav({
  subNav,
  isDarkMode,
  userOptions,
  mainNav,
}: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger className="flex group rotate-90 p-5 right-0 hover:mr-2">
        <div className="after:content-[''] after:border  after:m-1 transition-transform transform motion-safe:group-hover:rotate-45 group-hover:m-[-5px]"></div>
        <div className=" before:content-[''] before:border before:m-1 transition-transform transform motion-safe:group-hover:-rotate-45 group-hover:m-[-4px]"></div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex-row justify-evenly mt-5 items-center">
          {userOptions()}
        </SheetHeader>
        <SheetHeader className="flex-row justify-evenly mt-10 gap-2 items-center">
          {subNav(isDarkMode)}
        </SheetHeader>
        <ul className="flex flex-col justify-evenly h-1/2 text-3xl text-center">
          {mainNav()}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
