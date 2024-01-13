"use client";
import { ModeToggle } from "@/components/ui/darkToggle";
import Image from "next/image";
import H2R from "@/app/assets/H2R.png";
import React, { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import ThemePicker from "./themePicker/ThemePicker";
import MobileNav from "./mobileNav/MobileNav";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const sharedNav = () => {
    return (
      <>
        <Link href={"/"} className="hover:animate-pulse">
          <Image src={H2R} width={50} height={50} alt="logo" />
        </Link>
        <ModeToggle setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <ThemePicker isDarkMode={isDarkMode} />
      </>
    );
  };
  return (
    <>
      <div className="lg:hidden flex justify-between items-center p-5">
        <div className="flex gap-5">{sharedNav()}</div>
        <div className="flex gap-5">
          <MobileNav />
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
      <div className="lg:flex flex-row-reverse justify-between items-center w-full text-primary p-3 border  shadow-sm shadow-primary fixed z-20 hidden">
        <ul className="flex gap-5 items-center">
          <Link href={"/products"}>Product</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/cart"}>Cart</Link>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </ul>
        <div className="flex gap-5">{sharedNav()}</div>
      </div>
    </>
  );
}

export default NavBar;
