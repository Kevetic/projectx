import React, { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

interface MobileNavProps {
  isDarkMode: boolean;
  sharedNav: any;
  userOptions: any;
}

function MobileNav({ sharedNav, isDarkMode, userOptions }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger>MENU</SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex-row justify-evenly mt-5 items-center">
          {userOptions()}
        </SheetHeader>
        <SheetHeader className="flex-row justify-evenly mt-10 gap-2 items-center">
          {sharedNav(isDarkMode)}
        </SheetHeader>
        <ul className="flex flex-col justify-evenly h-1/2 text-3xl text-center">
          <Link href={"/products"}>Products</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/cart"}>Cart</Link>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
