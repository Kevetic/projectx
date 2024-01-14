"use client";
import { ModeToggle } from "@/components/ui/darkToggle";
import Image from "next/image";
import H2R from "@/app/assets/H2R.png";
import React, { useState } from "react";
import Link from "next/link";
import ThemePicker from "./themePicker/ThemePicker";
import MobileNav from "./mobileNav/MobileNav";
import SignInButton from "./signinButton/SignInButton";
import { useSession } from "next-auth/react";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { data: session } = useSession();

  const userOptions = () => {
    return (
      <>
        <SignInButton session={session} />
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
        {session ? <Link href={"/add-product"}>Add Product</Link> : null}
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
