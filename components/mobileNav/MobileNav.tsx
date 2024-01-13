import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>MENU</SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col justify-evenly h-screen text-5xl text-center">
          <Link href={"/products"}>Products</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/cart"}>Cart</Link>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
