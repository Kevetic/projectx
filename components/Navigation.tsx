import { ModeToggle } from "@/components/ui/sun-moon";
import Image from "next/image";
import H2R from "@/app/assets/H2R.png";
import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="flex flex-row-reverse justify-between items-center w-full text-primary p-3 border bg-secondary shadow-sm shadow-primary fixed z-20">
      <ul className="flex gap-5 items-center">
        <Link href={"/Product"}>Product</Link>
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
      <div className="flex gap-5">
        <Link href={"/"} className="hover:animate-pulse">
          <Image src={H2R} width={50} height={50} alt="logo" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}

export default NavBar;
