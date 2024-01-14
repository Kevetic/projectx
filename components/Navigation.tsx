"use client";
import { ModeToggle } from "@/components/ui/darkToggle";
import Image from "next/image";
import H2R from "@/app/assets/H2R.png";
import React, { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import ThemePicker from "./themePicker/ThemePicker";
import MobileNav from "./mobileNav/MobileNav";

function NavBar() {
  const user = useUser();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const userOptions = () => {
    return (
      <>
        <SignedOut>
          <Button asChild className="rounded-full" size="lg">
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </>
    );
  };

  const subNav = () => {
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

  const mainNav = () => {
    return (
      <>
        {user.isSignedIn ? (
          <Link href={"/add-product"}>Add Product</Link>
        ) : null}
        <Link href={"/products"}>Product</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/cart"}>Cart</Link>
      </>
    );
  };

  return (
    <>
      <div className="lg:hidden flex flex-row-reverse w-full p-5 fixed z-30">
        <div className="flex gap-5">
          <MobileNav
            mainNav={mainNav}
            subNav={subNav}
            isDarkMode={isDarkMode}
            userOptions={userOptions}
          />
        </div>
      </div>
      <div className="lg:flex bg-secondary flex-row-reverse justify-between items-center w-full text-primary p-3 border shadow-sm z-20 hidden">
        <ul className="flex gap-5 items-center">
          {mainNav()}
          {userOptions()}
        </ul>
        <div className="flex gap-5">{subNav()}</div>
      </div>
    </>
  );
}

export default NavBar;
